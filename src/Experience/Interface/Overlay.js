import Experience from '../Experience.js';

export default class Overlay {
    constructor() {
        this.experience = new Experience();
        
        // Elemen HTML (Pastikan ID ini ada di index.html)
        this.overlay = document.getElementById('detail-panel');
        this.closeBtn = document.getElementById('close-btn');
        
        this.image = document.getElementById('panel-image');
        this.kicker = document.getElementById('panel-kicker');
        this.title = document.getElementById('panel-title');
        this.desc = document.getElementById('panel-desc');
        this.dynamicContent = document.getElementById('panel-dynamic-content');
        this.link = document.getElementById('panel-link');

        // Event Close
        this.closeBtn.addEventListener('click', () => this.hide());
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.hide();
        });
    }

    show(data) {
        this.experience.isModalOpen = true;

        // 1. ISI DATA UMUM
        this.image.src = data.image || 'https://placehold.co/800x600/111/fff?text=No+Image';
        this.kicker.textContent = data.type || 'Showcase';
        this.title.textContent = data.title || 'Untitled';
        this.desc.textContent = data.desc || 'No description provided.';
        
        // 2. ATUR WARNA AKSEN BERDASARKAN TIPE
        this.kicker.style.color = '#ffffff'; // Default Putih
        if (data.type === 'about') this.kicker.style.color = '#00ffcc'; // About = Hijau
        if (data.type === 'certification') this.kicker.style.color = '#ffaa00'; // Cert = Emas

        // 3. TOMBOL LINK (Tampilkan kalau ada)
        if (data.link) {
            this.link.href = data.link;
            this.link.style.display = 'inline-block';
            this.link.textContent = data.linkText || 'VISIT LINK';
        } else {
            this.link.style.display = 'none';
        }

        // 4. ISI KONTEN DINAMIS (Layout Khusus)
        this.dynamicContent.innerHTML = ''; // Bersihkan isi lama

        // --- Layout A: PROJECT (Tags) ---
        if (data.type === 'project') {
            if(data.tags) {
                const label = document.createElement('div');
                label.innerHTML = '<strong style="display:block; font-size:12px; color:#666; margin-bottom:10px; letter-spacing:1px;">TECHNOLOGIES</strong>';
                this.dynamicContent.appendChild(label);

                const tagsDiv = document.createElement('div');
                tagsDiv.className = 'tags-container';
                data.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = tag;
                    tagsDiv.appendChild(span);
                });
                this.dynamicContent.appendChild(tagsDiv);
            }
        }

        // --- Layout B: ABOUT ME (Timeline Experience) ---
        if (data.type === 'about') {
            // Judul Kecil
            const label = document.createElement('div');
            label.innerHTML = '<strong style="display:block; font-size:12px; color:#666; margin-bottom:15px; letter-spacing:1px; margin-top:20px;">EXPERIENCE</strong>';
            this.dynamicContent.appendChild(label);

            // Container Timeline
            const timelineDiv = document.createElement('div');
            // Cek apakah ada data experience
            if (data.experience && Array.isArray(data.experience)) {
                data.experience.forEach(exp => {
                    const item = document.createElement('div');
                    item.className = 'timeline-item';
                    item.innerHTML = `
                        <span class="timeline-year">${exp.year}</span>
                        <span class="timeline-title">${exp.title}</span>
                        <span class="timeline-place">${exp.place}</span>
                    `;
                    timelineDiv.appendChild(item);
                });
            } else {
                timelineDiv.innerHTML = '<p style="color:#666; font-size:14px;">No experience data listed.</p>';
            }
            this.dynamicContent.appendChild(timelineDiv);
        }

        // --- Layout C: CERTIFICATION (List Card) ---
        if (data.type === 'certification') {
             // Judul Kecil
             const label = document.createElement('div');
             label.innerHTML = '<strong style="display:block; font-size:12px; color:#666; margin-bottom:15px; letter-spacing:1px; margin-top:20px;">CREDENTIALS</strong>';
             this.dynamicContent.appendChild(label);

            const certUl = document.createElement('ul');
            certUl.className = 'cert-list';
            
            if (data.certList && Array.isArray(data.certList)) {
                data.certList.forEach(cert => {
                    const li = document.createElement('li');
                    li.className = 'cert-item';
                    li.innerHTML = `
                        <div class="cert-info">
                            <strong>${cert.name}</strong>
                            <span>${cert.issuer} • ${cert.year}</span>
                        </div>
                        ${cert.link ? `<a href="${cert.link}" target="_blank" class="cert-link">Verify</a>` : ''}
                    `;
                    certUl.appendChild(li);
                });
            }
            this.dynamicContent.appendChild(certUl);
        }

        // 5. TAMPILKAN MODAL
        this.overlay.classList.add('visible');
    }

    hide() {
        this.overlay.classList.remove('visible');
        this.experience.isModalOpen = false;
    }
}