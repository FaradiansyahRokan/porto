import Experience from '../Experience.js';
// 👇 1. IMPORT DATASETNYA LANGSUNG DI SINI
import certificationDataSet from '../../data/certifications.js'; 

export default class Overlay {
    constructor() {
        this.experience = new Experience();
        
        this.overlay = document.getElementById('detail-panel');
        this.closeBtn = document.getElementById('close-btn');
        
        this.image = document.getElementById('panel-image');
        this.kicker = document.getElementById('panel-kicker');
        this.title = document.getElementById('panel-title');
        this.desc = document.getElementById('panel-desc');
        this.dynamicContent = document.getElementById('panel-dynamic-content');
        this.link = document.getElementById('panel-link');

        this.closeBtn.addEventListener('click', () => this.hide());
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.hide();
        });
    }

    // Helper buat list (Experience/Skills)
    createListFromText(text, labelTitle) {
        if (!text) return null;
        const container = document.createElement('div');
        container.style.marginTop = '20px';
        container.innerHTML = `<strong style="display:block; font-size:12px; color:#666; margin-bottom:10px; letter-spacing:1px; text-transform:uppercase;">${labelTitle}</strong>`;
        const ul = document.createElement('ul');
        ul.style.listStyle = 'none';
        ul.style.padding = '0';
        
        text.split('\n').forEach(item => {
            if(item.trim().length > 0) {
                const li = document.createElement('li');
                li.style.cssText = 'font-size: 14px; color: #aaa; margin-bottom: 6px; padding-left: 15px; position: relative;';
                li.innerHTML = `<span style="position: absolute; left: 0; top: 6px; width: 6px; height: 6px; background-color: #00ffcc; border-radius: 50%;"></span>${item.replace(/^-/, '').trim()}`;
                ul.appendChild(li);
            }
        });
        container.appendChild(ul);
        return container;
    }

    show(data) {
        this.experience.isModalOpen = true;

        // Populate Data Dasar (Dari contentData.js)
        this.image.src = data.image || 'https://placehold.co/800x600';
        this.kicker.textContent = data.kicker || 'Showcase';
        this.title.textContent = data.title || 'Untitled';
        this.desc.textContent = data.desc || '';
        
        // Styling Header
        this.kicker.style.color = data.type === 'about' ? '#00ffcc' : (data.type === 'project' ? '#ff0055' : '#fff');
        this.link.style.display = (data.link) ? 'inline-block' : 'none';
        if(data.link) this.link.href = data.link;

        this.dynamicContent.innerHTML = ''; // Reset Konten

        // --- LOGIC: PROJECT ---
        if (data.type === 'project') {
            if (data.features) this.dynamicContent.appendChild(this.createListFromText(data.features, 'Features'));
            if (data.tags) {
                const tagsDiv = document.createElement('div');
                tagsDiv.style.marginTop = '20px';
                data.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.innerText = tag;
                    span.style.cssText = 'background:rgba(255,255,255,0.1); padding:4px 10px; border-radius:15px; font-size:12px; margin-right:5px; border:1px solid #444;';
                    tagsDiv.appendChild(span);
                });
                this.dynamicContent.appendChild(tagsDiv);
            }
        }

        // --- LOGIC: ABOUT (DI SINI KITA PANGGIL CERTIFICATE) ---
        if (data.type === 'about') {
            // 1. Experience & Skills (Dari contentData.js)
            if (data.exp) this.dynamicContent.appendChild(this.createListFromText(data.exp, 'Experience'));
            if (data.skills) this.dynamicContent.appendChild(this.createListFromText(data.skills, 'Skills'));

            // 👇 2. PANGGIL DATA DARI FILE 'certificationDataSet.js'
            // Kita cek variabel certificationDataSet yang udah di-import di atas
            if (certificationDataSet && certificationDataSet.length > 0) {
                
                const label = document.createElement('div');
                label.innerHTML = '<strong style="display:block; font-size:12px; color:#666; margin-bottom:15px; letter-spacing:1px; margin-top:30px;">LICENSES & CERTIFICATIONS</strong>';
                this.dynamicContent.appendChild(label);

                const grid = document.createElement('div');
                grid.style.cssText = 'display: grid; gap: 10px;';

                // Looping data dari file eksternal
                certificationDataSet.forEach(cert => {
                    const item = document.createElement('div');
                    item.style.cssText = 'background: rgba(255,255,255,0.05); padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;';
                    
                    item.innerHTML = `
                        <div>
                            <div style="color: #fff; font-size: 13px; font-weight: 600;">${cert.title}</div>
                            <div style="color: #888; font-size: 11px;">${cert.issuer}</div>
                        </div>
                        <a href="${cert.link}" target="_blank" style="color: #ffd700; font-size: 10px; border: 1px solid #ffd700; padding: 4px 8px; border-radius: 4px; text-decoration: none;">VERIFY</a>
                    `;
                    grid.appendChild(item);
                });
                this.dynamicContent.appendChild(grid);
            }
        }

        this.overlay.classList.add('visible');
    }

    hide() {
        this.overlay.classList.remove('visible');
        this.experience.isModalOpen = false;
    }
}