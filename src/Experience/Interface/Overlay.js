import Experience from '../Experience.js';
import certificationDataSet from '../../data/certifications.js';

export default class Overlay {
    constructor() {
        this.experience = new Experience();

        this.overlay  = document.getElementById('detail-panel');
        this.card     = this.overlay?.querySelector('.modal-card');
        this.closeBtn = document.getElementById('close-btn');

        this.image    = document.getElementById('panel-image');
        this.kicker   = document.getElementById('panel-kicker');
        this.title    = document.getElementById('panel-title');
        this.desc     = document.getElementById('panel-desc');
        this.dynamic  = document.getElementById('panel-dynamic-content');
        this.link     = document.getElementById('panel-link');

        // New elements
        this.typeBadge  = document.getElementById('modal-type-badge');
        this.statusText = document.getElementById('modal-status-text');
        this.coords     = document.getElementById('modal-coords');
        this.footerMeta = document.getElementById('modal-footer-meta');

        // Particle canvas
        this.particleCanvas = document.getElementById('modal-particles');
        this._initParticles();

        // Events
        this.closeBtn.addEventListener('click', () => this.hide());
        this.overlay.addEventListener('click', e => {
            if (e.target === this.overlay) this.hide();
        });
        // ESC key
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape' && this.experience.isModalOpen) this.hide();
        });
    }

    /* ── PARTICLE SYSTEM (inside modal backdrop) ─────────────────────
     * Small floating dots that react to mouse inside the modal
     ─────────────────────────────────────────────────────────────── */
    _initParticles() {
        const el = this.particleCanvas;
        if (!el) return;

        const resize = () => {
            el.width  = window.innerWidth;
            el.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const ctx   = el.getContext('2d');
        const count = window.innerWidth < 640 ? 40 : 80;
        const pts   = Array.from({ length: count }, () => ({
            x:  Math.random() * window.innerWidth,
            y:  Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r:  0.5 + Math.random() * 1.2,
            a:  0.04 + Math.random() * 0.09,
        }));

        let mx = -9999, my = -9999;
        this.overlay.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
        this.overlay.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

        let animId = null;
        const draw = () => {
            if (!this.experience.isModalOpen) { animId = null; return; }
            animId = requestAnimationFrame(draw);

            ctx.clearRect(0, 0, el.width, el.height);

            pts.forEach(p => {
                // Mouse repel
                const dx = p.x - mx, dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    const force = (100 - dist) / 100;
                    p.vx += (dx / dist) * force * 0.18;
                    p.vy += (dy / dist) * force * 0.18;
                }

                // Damping + move
                p.vx *= 0.96; p.vy *= 0.96;
                p.x += p.vx;  p.y += p.vy;

                // Wrap
                if (p.x < 0) p.x = el.width;
                if (p.x > el.width) p.x = 0;
                if (p.y < 0) p.y = el.height;
                if (p.y > el.height) p.y = 0;

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${p.a})`;
                ctx.fill();
            });

            // Draw faint connecting lines between nearby particles
            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x;
                    const dy = pts[i].y - pts[j].y;
                    const d  = Math.sqrt(dx * dx + dy * dy);
                    if (d < 90) {
                        ctx.beginPath();
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 90) * 0.028})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        this._startParticles = () => { if (!animId) draw(); };
        this._stopParticles  = () => { animId = null; ctx.clearRect(0, 0, el.width, el.height); };
    }

    /* ── STATUS COORDS ANIMATION ─────────────────────────────────── */
    _animateCoords() {
        if (!this.coords) return;
        let tick = 0;
        this._coordsTimer = setInterval(() => {
            tick++;
            const cam = this.experience.camera?.instance?.position;
            if (cam) {
                this.coords.textContent = `${cam.x.toFixed(1)} · ${cam.y.toFixed(1)}`;
            } else {
                // Fake scanning animation
                const v = (Math.random() * 99).toFixed(2);
                this.coords.textContent = `${v} · ${(Math.random() * 99).toFixed(2)}`;
            }
        }, 140);
    }

    /* ── SHOW ──────────────────────────────────────────────────────── */
    show(data) {
        this.experience.isModalOpen = true;

        // ── Image ──
        if (this.image) {
            this.image.style.opacity = '0';
            this.image.src = data.image || 'https://placehold.co/1200x800/030308/ffffff?text=CLASSIFIED';
            this.image.onload = () => { this.image.style.opacity = ''; };
        }

        // ── Kicker / Type badge ──
        const kicker = data.kicker || 'Showcase';
        if (this.kicker) this.kicker.textContent = kicker;
        if (this.typeBadge) {
            const typeMap = { about: 'ORIGIN NODE', certification: 'CREDENTIALS', project: 'PROJECT LOG' };
            this.typeBadge.textContent = typeMap[data.type] || 'PROJECT';
        }

        // ── Title ──
        if (this.title) this.title.textContent = data.title || 'Untitled';

        // ── Description ──
        if (this.desc) this.desc.textContent = data.desc || '';

        // ── CTA link ──
        if (this.link) {
            this.link.style.display = data.link ? 'inline-flex' : 'none';
            if (data.link) this.link.href = data.link;
            const btnText = this.link.querySelector('.modal-btn-text');
            if (btnText) {
                const labelMap = { about: 'View Profile', certification: 'Verify All', project: 'Open Mission' };
                btnText.textContent = labelMap[data.type] || 'Open Mission';
            }
        }

        // ── Footer meta ──
        if (this.footerMeta) {
            const now   = new Date();
            const stamp = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')} · SECTOR-7G`;
            this.footerMeta.textContent = stamp;
        }

        // ── Status dot ──
        if (this.statusText) this.statusText.textContent = 'ACTIVE';

        // ── Dynamic content ──
        if (this.dynamic) {
            this.dynamic.innerHTML = '';
            this._buildContent(data);
        }

        // ── Reveal ──
        this.overlay.classList.add('visible');
        this._startParticles?.();
        this._animateCoords();

        // Staggered content reveal
        const items = this.dynamic?.querySelectorAll('.modal-list-item, .modal-cert-item, .modal-tag') || [];
        items.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(8px)';
            el.style.transition = `opacity .35s ease ${0.55 + i * 0.04}s, transform .35s ease ${0.55 + i * 0.04}s`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.opacity = '';
                    el.style.transform = '';
                });
            });
        });
    }

    /* ── CONTENT BUILDER ───────────────────────────────────────────── */
    _buildContent(data) {
        const d = this.dynamic;

        if (data.type === 'project') {
            // Tags
            if (data.tags?.length) {
                const label = this._label('Stack');
                d.appendChild(label);
                const wrap = document.createElement('div');
                wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:4px;margin-bottom:14px;';
                data.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'modal-tag';
                    span.textContent = tag;
                    wrap.appendChild(span);
                });
                d.appendChild(wrap);
            }

            // Features
            if (data.features) {
                d.appendChild(this._label('Key Systems'));
                data.features.split('\n').filter(l => l.trim()).forEach(line => {
                    const item = document.createElement('div');
                    item.className = 'modal-list-item';
                    item.appendChild(document.createTextNode(line.replace(/^[-•]/, '').trim()));
                    d.appendChild(item);
                });
            }
        }

        if (data.type === 'about') {
            if (data.exp) {
                d.appendChild(this._label('Experience'));
                data.exp.split('\n').filter(l => l.trim()).forEach(line => {
                    const item = document.createElement('div');
                    item.className = 'modal-list-item';
                    item.appendChild(document.createTextNode(line.replace(/^[-•]/, '').trim()));
                    d.appendChild(item);
                });
            }
            if (data.skills) {
                d.appendChild(this._label('Core Systems'));
                data.skills.split('\n').filter(l => l.trim()).forEach(line => {
                    const item = document.createElement('div');
                    item.className = 'modal-list-item';
                    item.appendChild(document.createTextNode(line.replace(/^[-•]/, '').trim()));
                    d.appendChild(item);
                });
            }
            // Certifications
            if (certificationDataSet?.length) {
                d.appendChild(this._label('Licenses & Certifications'));
                certificationDataSet.forEach(cert => {
                    const item = document.createElement('div');
                    item.className = 'modal-cert-item';
                    item.innerHTML = `
                        <div style="min-width:0;">
                            <span class="modal-cert-title">${cert.title}</span>
                            <span class="modal-cert-issuer">${cert.issuer}</span>
                        </div>
                        <a href="${cert.link}" target="_blank" class="modal-cert-link" rel="noopener">VERIFY</a>
                    `;
                    d.appendChild(item);
                });
            }
        }

        if (data.type === 'certification' && data.certList?.length) {
            d.appendChild(this._label('All Credentials'));
            data.certList.forEach(cert => {
                const item = document.createElement('div');
                item.className = 'modal-cert-item';
                item.innerHTML = `
                    <div style="min-width:0;">
                        <span class="modal-cert-title">${cert.title}</span>
                        <span class="modal-cert-issuer">${cert.issuer}</span>
                    </div>
                    <a href="${cert.link}" target="_blank" class="modal-cert-link" rel="noopener">VERIFY</a>
                `;
                d.appendChild(item);
            });
        }
    }

    _label(text) {
        const el = document.createElement('span');
        el.className = 'modal-section-label';
        el.textContent = text;
        return el;
    }

    /* ── HIDE ──────────────────────────────────────────────────────── */
    hide() {
        this.overlay.classList.remove('visible');
        this.experience.isModalOpen = false;
        this._stopParticles?.();
        clearInterval(this._coordsTimer);
    }
}