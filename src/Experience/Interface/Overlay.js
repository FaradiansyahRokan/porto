import Experience from '../Experience.js';
import certificationDataSet from '../../data/certifications.js';

export default class Overlay {
    constructor() {
        this.experience = new Experience();

        this.overlay      = document.getElementById('detail-panel');
        this.card         = this.overlay?.querySelector('.modal-card');
        this.closeBtn     = document.getElementById('close-btn');
        this.prevBtn      = document.getElementById('modal-prev-btn');
        this.nextBtn      = document.getElementById('modal-next-btn');

        this.image        = document.getElementById('panel-image');
        this.codeBadge    = document.getElementById('panel-code');
        this.kicker       = document.getElementById('panel-kicker');
        this.title        = document.getElementById('panel-title');
        this.subtitle     = document.getElementById('panel-subtitle');
        this.desc         = document.getElementById('panel-desc');
        this.dynamic      = document.getElementById('panel-dynamic-content');
        this.link         = document.getElementById('panel-link');

        this.typeBadge    = document.getElementById('modal-type-badge');
        this.statusText   = document.getElementById('modal-status-text');
        this.coords       = document.getElementById('modal-coords');
        this.footerMeta   = document.getElementById('modal-footer-meta');
        this.metaRole     = document.getElementById('modal-meta-role');
        this.metaYear     = document.getElementById('modal-meta-year');

        this.particleCanvas = document.getElementById('modal-particles');
        this._initParticles();

        // Events
        this.closeBtn?.addEventListener('click', () => this.hide());
        document.getElementById('exit-orbit-btn')?.addEventListener('click', () => this.hide());
        this.prevBtn?.addEventListener('click', () => this.experience.navigateNode?.(-1, true));
        this.nextBtn?.addEventListener('click', () => this.experience.navigateNode?.(1, true));

        const triggerRelicPulse = () => {
            this.experience.audio?.play('click');
            const activeNode = this.experience.world?.nodes?.[this.experience.activeNodeIndex];
            activeNode?.triggerPulse?.();
            this.experience.world?.background?.triggerGridPulse?.(1.1);
        };
        document.getElementById('blade-pulse-btn')?.addEventListener('click', triggerRelicPulse);
        document.getElementById('pulse-relic-btn')?.addEventListener('click', triggerRelicPulse);

        window.addEventListener('keydown', e => {
            if (!this.experience.isModalOpen) return;
            if (e.key === 'Escape') this.hide();
            if (e.key === 'ArrowLeft')  this.experience.navigateNode?.(-1, true);
            if (e.key === 'ArrowRight') this.experience.navigateNode?.(1, true);
        });
    }

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
        const count = window.innerWidth < 640 ? 35 : 70;
        const pts   = Array.from({ length: count }, () => ({
            x:  Math.random() * window.innerWidth,
            y:  Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            r:  0.6 + Math.random() * 1.2,
            a:  0.05 + Math.random() * 0.1,
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
                const dx = p.x - mx, dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100 && dist > 0.01) {
                    const force = (100 - dist) / 100;
                    p.vx += (dx / dist) * force * 0.18;
                    p.vy += (dy / dist) * force * 0.18;
                }

                p.vx *= 0.96; p.vy *= 0.96;
                p.x += p.vx;  p.y += p.vy;

                if (p.x < 0) p.x = el.width;
                if (p.x > el.width) p.x = 0;
                if (p.y < 0) p.y = el.height;
                if (p.y > el.height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${p.a})`;
                ctx.fill();
            });

            for (let i = 0; i < pts.length; i++) {
                for (let j = i + 1; j < pts.length; j++) {
                    const dx = pts[i].x - pts[j].x;
                    const dy = pts[i].y - pts[j].y;
                    const d  = Math.sqrt(dx * dx + dy * dy);
                    if (d < 90) {
                        ctx.beginPath();
                        ctx.moveTo(pts[i].x, pts[i].y);
                        ctx.lineTo(pts[j].x, pts[j].y);
                        ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 90) * 0.032})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        this._startParticles = () => { if (!animId) draw(); };
        this._stopParticles  = () => { animId = null; ctx.clearRect(0, 0, el.width, el.height); };
    }

    _animateCoords() {
        if (!this.coords) return;
        clearInterval(this._coordsTimer);
        this._coordsTimer = setInterval(() => {
            const cam = this.experience.camera?.instance?.position;
            if (cam) {
                this.coords.textContent = `${cam.x.toFixed(1)} · ${cam.y.toFixed(1)} · ${cam.z.toFixed(1)}`;
            }
        }, 160);
    }

    show(data) {
        this.experience.isModalOpen = true;
        this.experience.world?.pauseRotation();
        document.body.classList.add('is-inspecting');
        const rvh = document.getElementById('relic-viewport-hud');
        if (rvh) {
            rvh.classList.add('visible');
            rvh.setAttribute('aria-hidden', 'false');
            rvh.style.setProperty('--modal-accent', data.accent || '#38bdf8');
        }

        const accent = data.accent || '#38bdf8';
        this.overlay?.style.setProperty('--modal-accent', accent);

        // Image
        if (this.image) {
            this.image.style.opacity = '0';
            this.image.src = data.image || '';
            this.image.alt = data.title || 'Mission visual';
            this.image.onload = () => { this.image.style.opacity = ''; };
        }

        // Code & Kicker
        if (this.codeBadge) this.codeBadge.textContent = data.code || 'SYS-01';
        if (this.kicker)    this.kicker.textContent = data.kicker || 'Showcase';
        if (this.typeBadge) {
            const typeMap = { about: 'ORIGIN CORE', certification: 'CREDENTIALS', project: 'MISSION LOG' };
            this.typeBadge.textContent = typeMap[data.type] || 'MISSION LOG';
        }

        // Visual telemetry metadata
        if (this.metaRole) this.metaRole.textContent = data.role || 'Fullstack Engineer';
        if (this.metaYear) this.metaYear.textContent = data.year || '2024';
        if (this.statusText) this.statusText.textContent = data.status || 'ACTIVE';

        // Title & Subtitle
        if (this.title) this.title.textContent = data.title || 'Untitled';
        if (this.subtitle) {
            this.subtitle.textContent = data.subtitle || '';
            this.subtitle.style.display = data.subtitle ? 'block' : 'none';
        }

        // Description
        if (this.desc) this.desc.textContent = data.desc || '';

        // Scroll content column back to top
        const col = this.overlay?.querySelector('.modal-content-col');
        if (col) col.scrollTop = 0;

        // CTA link
        if (this.link) {
            this.link.style.display = data.link ? 'inline-flex' : 'none';
            if (data.link) this.link.href = data.link;
            const btnText = this.link.querySelector('.modal-btn-text');
            if (btnText) {
                const labelMap = { about: 'Download CV / PDF', certification: 'Verify All', project: 'Open Mission' };
                btnText.textContent = data.linkLabel || labelMap[data.type] || 'Open Mission';
            }
        }

        // Footer meta
        if (this.footerMeta) {
            const now   = new Date();
            const stamp = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')} · ${data.code || 'SECTOR-07'}`;
            this.footerMeta.textContent = stamp;
        }

        // Dynamic content
        if (this.dynamic) {
            this.dynamic.innerHTML = '';
            this._buildContent(data);
        }

        // Reveal
        this.overlay.classList.add('visible');
        this._startParticles?.();
        this._animateCoords();

        // Staggered content reveal
        const items = this.dynamic?.querySelectorAll('.modal-list-item, .modal-cert-item, .modal-tag, .metric-card, .skill-group-card, .timeline-card') || [];
        items.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(8px)';
            el.style.transition = `opacity .32s ease ${0.18 + Math.min(i, 14) * 0.03}s, transform .32s ease ${0.18 + Math.min(i, 14) * 0.03}s`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.style.opacity = '';
                    el.style.transform = '';
                });
            });
        });
    }

    _buildContent(data) {
        const d = this.dynamic;

        if (data.type === 'project') {
            if (data.tags?.length) {
                d.appendChild(this._label('Technology Stack'));
                const wrap = document.createElement('div');
                wrap.className = 'modal-tags-wrap';
                data.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'modal-tag';
                    span.textContent = tag;
                    wrap.appendChild(span);
                });
                d.appendChild(wrap);
            }

            if (data.features) {
                d.appendChild(this._label('Key Systems & Deliverables'));
                const rawLines = data.features.includes('\n')
                    ? data.features.split('\n')
                    : data.features.split(/,\s+(?=[A-Z])/);

                const listWrap = document.createElement('div');
                listWrap.className = 'modal-feature-grid';
                rawLines.filter(l => l.trim()).forEach(line => {
                    const item = document.createElement('div');
                    item.className = 'modal-list-item';
                    item.textContent = line.replace(/^[-•]/, '').trim();
                    listWrap.appendChild(item);
                });
                d.appendChild(listWrap);
            }
        }

        if (data.type === 'about') {
            // Key Metrics Grid
            if (data.metrics?.length) {
                const metricsGrid = document.createElement('div');
                metricsGrid.className = 'metrics-grid';
                data.metrics.forEach(m => {
                    const card = document.createElement('div');
                    card.className = 'metric-card';
                    card.innerHTML = `
                        <span class="metric-value">${m.value}</span>
                        <span class="metric-label">${m.label}</span>
                    `;
                    metricsGrid.appendChild(card);
                });
                d.appendChild(metricsGrid);
            }

            // Experience Timeline
            if (data.exp) {
                d.appendChild(this._label('Leadership & Career Trajectory'));
                const tlWrap = document.createElement('div');
                tlWrap.className = 'timeline-grid';
                data.exp.split('\n').filter(l => l.trim()).forEach(line => {
                    const clean = line.replace(/^[-•]/, '').trim();
                    const yearMatch = clean.match(/\(([^)]+)\)$/);
                    const yearText  = yearMatch ? yearMatch[1] : 'VERIFIED';
                    const mainText  = yearMatch ? clean.slice(0, yearMatch.index).trim() : clean;
                    const parts     = mainText.split(/,|–|-/);
                    const roleTitle = parts[0]?.trim() || mainText;
                    const orgName   = parts.slice(1).join(' · ').trim();

                    const item = document.createElement('div');
                    item.className = 'timeline-card';
                    item.innerHTML = `
                        <div class="tl-main">
                            <span class="tl-role">${roleTitle}</span>
                            ${orgName ? `<span class="tl-org">${orgName}</span>` : ''}
                        </div>
                        <span class="tl-badge">${yearText}</span>
                    `;
                    tlWrap.appendChild(item);
                });
                d.appendChild(tlWrap);
            }

            // Categorized Core Skills
            if (data.skills) {
                d.appendChild(this._label('Core Systems & Engineering Matrix'));
                const skillsWrap = document.createElement('div');
                skillsWrap.className = 'skills-matrix';
                data.skills.split('\n').filter(l => l.trim()).forEach(line => {
                    const clean = line.replace(/^[-•]/, '').trim();
                    const colonIdx = clean.indexOf(':');
                    const groupName = colonIdx > -1 ? clean.slice(0, colonIdx).trim() : 'Core Stack';
                    const itemsStr  = colonIdx > -1 ? clean.slice(colonIdx + 1).trim() : clean;
                    const chips     = itemsStr.split(',').map(s => s.trim()).filter(Boolean);

                    const card = document.createElement('div');
                    card.className = 'skill-group-card';
                    card.innerHTML = `
                        <span class="skill-group-title">${groupName}</span>
                        <div class="skill-chips">
                            ${chips.map(c => `<span class="modal-tag">${c}</span>`).join('')}
                        </div>
                    `;
                    skillsWrap.appendChild(card);
                });
                d.appendChild(skillsWrap);
            }

            // Certifications inside About
            if (certificationDataSet?.length) {
                d.appendChild(this._label('Licenses & Verified Certifications'));
                this._renderCerts(d, certificationDataSet);
            }
        }

        if (data.type === 'certification' && data.certList?.length) {
            d.appendChild(this._label(`All Verified Credentials (${data.certList.length})`));
            this._renderCerts(d, data.certList);
        }
    }

    _renderCerts(container, list) {
        const wrap = document.createElement('div');
        wrap.className = 'cert-grid';
        list.forEach(cert => {
            const item = document.createElement('div');
            item.className = 'modal-cert-item';
            item.innerHTML = `
                <div style="min-width:0;">
                    <span class="modal-cert-title">${cert.title}</span>
                    <span class="modal-cert-issuer">${cert.issuer}</span>
                </div>
                <a href="${cert.link}" target="_blank" class="modal-cert-link" rel="noopener">VERIFY ↗</a>
            `;
            wrap.appendChild(item);
        });
        container.appendChild(wrap);
    }

    _label(text) {
        const el = document.createElement('span');
        el.className = 'modal-section-label';
        el.textContent = text;
        return el;
    }

    hide() {
        if (!this.experience.isModalOpen) return;
        this.overlay.classList.remove('visible');
        this.experience.isModalOpen = false;
        document.body.classList.remove('is-inspecting');
        const rvh = document.getElementById('relic-viewport-hud');
        if (rvh) {
            rvh.classList.remove('visible');
            rvh.setAttribute('aria-hidden', 'true');
        }
        this.experience.exitCloseUpOrbit?.();
        this.experience.world?.resumeRotation();
        this.experience.audio?.play('outro');
        this._stopParticles?.();
        clearInterval(this._coordsTimer);
    }
}
