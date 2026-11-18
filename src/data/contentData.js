// Minimalist architectural SVG artwork generator for each project
// Clean, editorial, iOS-inspired vector compositions — zero external dependencies
function createMissionArtwork({ code, title, kicker, accent = '#e4e4e7', secondary = '#94a3b8', pattern = 'grid', tags = [] }) {
    const tagPills = tags.slice(0, 4).map((t, i) => {
        const x = 64 + i * 168;
        return `
            <g transform="translate(${x}, 676)">
                <rect width="150" height="34" rx="17" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" stroke-width="1"/>
                <text x="75" y="21.5" fill="rgba(255,255,255,0.82)" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="12" font-weight="500" text-anchor="middle">${t}</text>
            </g>
        `;
    }).join('');

    let centerGraphic = '';
    if (pattern === 'origin') {
        centerGraphic = `
            <circle cx="600" cy="350" r="185" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
            <circle cx="600" cy="350" r="130" fill="none" stroke="${accent}" stroke-opacity="0.28" stroke-width="1.2"/>
            <circle cx="600" cy="350" r="72" fill="url(#coreGlow)" stroke="${accent}" stroke-opacity="0.55" stroke-width="1.5"/>
            <circle cx="600" cy="350" r="10" fill="#ffffff" fill-opacity="0.9"/>
        `;
    } else if (pattern === 'mobile') {
        centerGraphic = `
            <rect x="498" y="158" width="204" height="394" rx="34" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
            <rect x="514" y="176" width="172" height="358" rx="22" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
            <rect x="572" y="190" width="56" height="14" rx="7" fill="rgba(255,255,255,0.12)"/>
            <rect x="534" y="228" width="132" height="72" rx="14" fill="url(#panelGrad)" stroke="${accent}" stroke-opacity="0.3"/>
            <rect x="534" y="316" width="132" height="44" rx="10" fill="rgba(255,255,255,0.05)"/>
            <rect x="534" y="372" width="132" height="44" rx="10" fill="rgba(255,255,255,0.05)"/>
            <rect x="534" y="428" width="92" height="44" rx="10" fill="rgba(255,255,255,0.04)"/>
        `;
    } else if (pattern === 'infra') {
        centerGraphic = `
            <g stroke="rgba(255,255,255,0.16)" stroke-width="1.2" fill="rgba(255,255,255,0.03)">
                <rect x="420" y="195" width="360" height="72" rx="14"/>
                <rect x="420" y="285" width="360" height="72" rx="14"/>
                <rect x="420" y="375" width="360" height="72" rx="14"/>
            </g>
            <g fill="${accent}" fill-opacity="0.75">
                <circle cx="458" cy="231" r="5"/>
                <circle cx="458" cy="321" r="5"/>
                <circle cx="458" cy="411" r="5"/>
            </g>
            <g stroke="rgba(255,255,255,0.14)" stroke-width="2" stroke-linecap="round">
                <line x1="490" y1="231" x2="740" y2="231"/>
                <line x1="490" y1="321" x2="700" y2="321"/>
                <line x1="490" y1="411" x2="725" y2="411"/>
            </g>
        `;
    } else if (pattern === 'web3') {
        centerGraphic = `
            <g fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.4">
                <polygon points="600,175 745,260 745,430 600,515 455,430 455,260" fill="rgba(255,255,255,0.02)"/>
                <polygon points="600,232 695,288 695,402 600,458 505,402 505,288" stroke="${accent}" stroke-opacity="0.4"/>
            </g>
            <circle cx="600" cy="345" r="14" fill="${accent}" fill-opacity="0.7"/>
        `;
    } else {
        centerGraphic = `
            <rect x="360" y="175" width="480" height="330" rx="20" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.16)" stroke-width="1.2"/>
            <line x1="360" y1="222" x2="840" y2="222" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
            <circle cx="392" cy="199" r="5" fill="rgba(255,255,255,0.28)"/>
            <circle cx="412" cy="199" r="5" fill="rgba(255,255,255,0.2)"/>
            <circle cx="432" cy="199" r="5" fill="rgba(255,255,255,0.14)"/>
            <rect x="396" y="252" width="192" height="126" rx="12" fill="url(#panelGrad)" stroke="${accent}" stroke-opacity="0.25"/>
            <rect x="608" y="252" width="196" height="56" rx="12" fill="rgba(255,255,255,0.04)"/>
            <rect x="608" y="322" width="196" height="56" rx="12" fill="rgba(255,255,255,0.04)"/>
            <rect x="396" y="396" width="408" height="78" rx="12" fill="rgba(255,255,255,0.03)"/>
            <polyline points="424,452 480,426 540,440 606,412 670,432 730,414 780,425" fill="none" stroke="${accent}" stroke-opacity="0.75" stroke-width="2" stroke-linecap="round"/>
        `;
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
        <defs>
            <radialGradient id="bgGrad" cx="50%" cy="40%" r="75%">
                <stop offset="0%" stop-color="#14161c"/>
                <stop offset="60%" stop-color="#0b0c10"/>
                <stop offset="100%" stop-color="#060709"/>
            </radialGradient>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stop-color="${accent}" stop-opacity="0.24"/>
                <stop offset="70%" stop-color="${secondary}" stop-opacity="0.06"/>
                <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${accent}" stop-opacity="0.16"/>
                <stop offset="100%" stop-color="${secondary}" stop-opacity="0.03"/>
            </linearGradient>
        </defs>
        <rect width="1200" height="800" fill="url(#bgGrad)"/>
        <circle cx="600" cy="350" r="320" fill="url(#coreGlow)"/>
        
        <text x="64" y="74" fill="rgba(255,255,255,0.45)" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="14" font-weight="500" letter-spacing="1.5">${code} · ${kicker}</text>
        
        ${centerGraphic}

        <text x="64" y="646" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="36" font-weight="700" letter-spacing="-0.5">${title}</text>
        ${tagPills}
    </svg>`;

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export { createMissionArtwork };

const contentData = [
    {
        id: 'origin',
        code: '00',
        type: 'about',
        category: 'origin',
        kicker: "Origin · Founder & Engineer",
        title: "Rokan S. F.",
        subtitle: "Founder of Archipelago Dynamics · Fullstack, DevOps & Web3 Architect",
        accent: '#e2c799',
        accentRgb: [0.89, 0.78, 0.60],
        role: "Founder & Chief Visionary Officer",
        year: "2021 — Present",
        status: "Active",
        metrics: [
            { label: "Systems Built", value: "12+" },
            { label: "Certifications", value: "11" },
            { label: "English Level", value: "C2" },
            { label: "National Award", value: "3rd Place" }
        ],
        desc: "As the founder of Archipelago Dynamics, I am dedicated to bridging Indonesia's vast potential with the global market. Our journey began in international trade, exporting premium local commodities and importing cutting-edge technology. This experience revealed a critical need for digital efficiency, leading to the creation of our IT Solutions division, which now empowers businesses with transformative software and enterprise architecture. Today, we continue to innovate across sectors, driven by a core mission to build synergistic ventures that pioneer the future.",
        exp: "-Founder & Chief Visionary Officer, Archipelago Dynamics (2023 - Present)\n-Global Trade Analyst, Maersk Line (2021 - 2025)\n-Fullstack & DevOps Engineer (Intern), Yayasan Bina Insan Taqwa\n-SCRATCH Trainer, IDNBS (IDN IT CAMP BATCH 2)\n-MicroBit Trainer, IDNBS (IDN IT CAMP BATCH 2)\n-UI/UX Trainer – Al Ashr Bina Mandiri (2023)\n-3rd Winner of National Coding Competition (AL-HAZEN ACADEMY)",
        skills: "-Business Strategy & Leadership: Global Trade & Supply Chain Management, Enterprise Architecture & Digital Transformation, Venture Capital & Strategic Investment\n-Frontend & Mobile: HTML5, CSS3, JavaScript, TypeScript, React, TailwindCSS, Dart, Kotlin, Android Jetpack, UI/UX, GSAP, Lowcoder\n-Backend & Database: Node.js, NestJS, PHP, Laravel, Python, MySQL, PostgreSQL, MongoDB, Prisma ORM, RESTful API\n-Web3 & Blockchain: Solidity, Ethers.js, Hardhat, Smart Contracts, MetaMask Integration\n-Cloud, Infra & DevOps: Linux, Docker, KVM, Portainer, ZimaOS, Syncthing, Tailscale, CI/CD, GitHub Actions, Nginx, Apache, Fortinet Security",
        link: "assets/PORTOFOLIO_ROKAN.pdf",
        linkLabel: "Download CV (PDF)",
        image: createMissionArtwork({
            code: '00',
            title: 'Rokan S. F.',
            kicker: 'Founder & Systems Architect',
            accent: '#e2c799',
            secondary: '#a1a1aa',
            pattern: 'origin',
            tags: ['Archipelago Dynamics', 'Fullstack', 'DevOps', 'Web3']
        })
    },
    {
        id: 'peti-ngemil',
        code: '01',
        type: 'project',
        category: 'web',
        kicker: "E-Commerce Platform",
        title: "Peti Ngemil",
        accent: '#d8b4a0',
        accentRgb: [0.85, 0.71, 0.63],
        role: "Fullstack Developer",
        year: "2024",
        status: "Deployed",
        desc: "Peti Ngemil is an e-commerce web platform built to support local MSME (UMKM) food vendors by providing them a digital storefront — for free. Designed and developed as a team project, it includes complete features for users and admins, making it a powerful, real-world solution for small business digitization.",
        features: "Role-based access control (Admin & Customer portals)\nAutomated payment gateway integration via Midtrans\nReal-time shipping rate calculation with RajaOngkir API\nInstant thermal/PDF receipt printing (Cetak Struk)\nComprehensive analytics & inventory Admin Dashboard",
        tags: ["Laravel", "Node.js", "MySQL", "Blade", "TailwindCSS", "Midtrans", "RajaOngkir"],
        image: createMissionArtwork({
            code: '01',
            title: 'Peti Ngemil',
            kicker: 'E-Commerce MSME Platform',
            accent: '#d8b4a0',
            secondary: '#9ca3af',
            pattern: 'web',
            tags: ['Laravel', 'Midtrans', 'RajaOngkir', 'TailwindCSS']
        })
    },
    {
        id: 'distributed-file-sync',
        code: '02',
        type: 'project',
        category: 'infra',
        kicker: "Infrastructure & DevOps",
        title: "Distributed File Sync",
        accent: '#a5b4fc',
        accentRgb: [0.65, 0.71, 0.99],
        role: "DevOps & Systems Architect",
        year: "2024",
        status: "Production",
        desc: "This project implements a real-time, peer-to-peer file synchronization system for a multi-division school environment (covering elementary, junior high, and administration divisions). Built using Syncthing, Tailscale, and Docker, the system allows all school computers to share and access documents like a shared cloud — fully offline within the local network.",
        features: "Real-time peer-to-peer document sync across all division devices\nZero internet dependency (runs at LAN speed on local network)\nReproducible containerized deployment via Docker\nEncrypted mesh networking & remote management via Tailscale\nEliminates manual flash-drive transfers across departments",
        tags: ["Syncthing", "Docker", "Tailscale", "Linux", "P2P Networking"],
        image: createMissionArtwork({
            code: '02',
            title: 'Distributed File Sync',
            kicker: 'P2P Local Cloud Infrastructure',
            accent: '#a5b4fc',
            secondary: '#94a3b8',
            pattern: 'infra',
            tags: ['Syncthing', 'Docker', 'Tailscale', 'LAN P2P']
        })
    },
    {
        id: 'nestjs-api',
        code: '03',
        type: 'project',
        category: 'infra',
        kicker: "Backend Architecture",
        title: "NestJS RESTful API",
        accent: '#93c5fd',
        accentRgb: [0.58, 0.77, 0.99],
        role: "Backend Engineer",
        year: "2024",
        status: "Verified",
        desc: "A secure, modular, and scalable RESTful API built with NestJS, utilizing PostgreSQL as the primary relational database and Prisma ORM for type-safe data access. Authentication is hardened with JWT bearer tokens, guards, and role-based access control.",
        features: "Full type-safe CRUD operations with DTO validation\nStateless authentication & authorization with JWT Guards\nRole-Based Access Control (RBAC) middleware\nPostgreSQL relational schema managed via Prisma ORM migrations\nClean modular Dependency Injection architecture in NestJS",
        tags: ["NestJS", "PostgreSQL", "Prisma", "JWT", "TypeScript", "REST API"],
        image: createMissionArtwork({
            code: '03',
            title: 'NestJS RESTful API',
            kicker: 'Modular Backend Service',
            accent: '#93c5fd',
            secondary: '#cbd5e1',
            pattern: 'infra',
            tags: ['NestJS', 'PostgreSQL', 'Prisma', 'JWT']
        })
    },
    {
        id: 'web3-todo',
        code: '04',
        type: 'project',
        category: 'web3',
        kicker: "Web3 & Blockchain",
        title: "Decentralized To-Do DApp",
        accent: '#c4b5fd',
        accentRgb: [0.77, 0.71, 0.99],
        role: "Web3 & Smart Contract Developer",
        year: "2024",
        status: "On-Chain",
        desc: "A fully decentralized To-Do List application built using Web3 technologies. The frontend is developed with React and Tailwind CSS, while the backend logic runs on a Solidity smart contract deployed to an Ethereum network using Hardhat. Users authenticate via MetaMask and manage tasks stored immutably on-chain.",
        features: "On-chain task creation bound to the user's Ethereum wallet address\nDirect smart contract state queries via Ethers.js\nCryptographically verified task deletion (restricted to task owner)\nSeamless MetaMask wallet connection & transaction signing\nResponsive Web3 interface with real-time block confirmation feedback",
        tags: ["React", "Solidity", "Ethers.js", "Hardhat", "MetaMask", "TailwindCSS"],
        image: createMissionArtwork({
            code: '04',
            title: 'Decentralized To-Do DApp',
            kicker: 'Ethereum Smart Contract App',
            accent: '#c4b5fd',
            secondary: '#94a3b8',
            pattern: 'web3',
            tags: ['Solidity', 'Ethers.js', 'Hardhat', 'React']
        })
    },
    {
        id: 'plantique',
        code: '05',
        type: 'project',
        category: 'web',
        kicker: "Creative Studio Web",
        title: "Plantique",
        accent: '#a7f3d0',
        accentRgb: [0.65, 0.95, 0.82],
        role: "Creative Frontend Developer",
        year: "2023",
        status: "Showcase",
        desc: "Plantique is a creative studio concept that merges art, web design, development, and botanical lifestyle. Built as an interactive web service hub for our creative team, the site delivers a fluid, high-craft visual experience powered by GSAP choreography.",
        features: "Choreographed page & scroll transitions powered by GSAP\nFluid responsive layout engineered for mobile and desktop viewports\nBespoke art direction blending editorial typography and motion\nHigh-performance DOM animation pipeline",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Motion Design"],
        image: createMissionArtwork({
            code: '05',
            title: 'Plantique',
            kicker: 'Interactive Creative Hub',
            accent: '#a7f3d0',
            secondary: '#94a3b8',
            pattern: 'web',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP']
        })
    },
    {
        id: 'skillforge',
        code: '06',
        type: 'project',
        category: 'web',
        kicker: "EdTech Platform · 3rd Winner",
        title: "SkillForge",
        accent: '#fcd34d',
        accentRgb: [0.99, 0.83, 0.30],
        role: "Lead Fullstack Developer",
        year: "2023",
        status: "Award Winner",
        desc: "SkillForge is an educational platform designed to help individuals master in-demand technology skills through structured online courses. Featuring a full course management system and interactive learning modules, SkillForge won 3rd Place at the National Coding Competition.",
        features: "End-to-end Course Management System (CMS) for instructors & students\nInteractive enrollment, progress tracking & form handling\nResponsive learning interface built with Laravel Blade & Bootstrap\n3rd Place Winner — National Coding Competition (Al-Hazen Academy)",
        tags: ["Laravel", "Bootstrap", "Blade", "MySQL", "EdTech"],
        image: createMissionArtwork({
            code: '06',
            title: 'SkillForge',
            kicker: 'Award-Winning Learning Platform',
            accent: '#fcd34d',
            secondary: '#cbd5e1',
            pattern: 'web',
            tags: ['Laravel', 'Blade', 'MySQL', 'Bootstrap']
        })
    },
    {
        id: 'aroundu',
        code: '07',
        type: 'project',
        category: 'mobile',
        kicker: "Android Application",
        title: "AroundU App",
        accent: '#99f6e4',
        accentRgb: [0.60, 0.96, 0.89],
        role: "Android Engineer (Kotlin)",
        year: "2024",
        status: "Released",
        desc: "AroundU is a modern native Android app developed in Kotlin that aggregates and displays real-time breaking news from trusted Indonesian and global sources via NewsAPI. Engineered with clean MVVM architecture, Retrofit networking, and smooth navigation.",
        features: "Real-time news aggregation & search powered by NewsAPI + Retrofit\nHigh-performance RecyclerView with DiffUtil article rendering\nBottom Navigation Bar across Home, Curated Categories & Settings\nClean MVVM architecture with reactive state management\nNative Kotlin implementation in Android Studio",
        tags: ["Kotlin", "NewsAPI", "RecyclerView", "MVVM", "Retrofit", "Android"],
        image: createMissionArtwork({
            code: '07',
            title: 'AroundU App',
            kicker: 'Native Kotlin Android App',
            accent: '#99f6e4',
            secondary: '#cbd5e1',
            pattern: 'mobile',
            tags: ['Kotlin', 'MVVM', 'Retrofit', 'NewsAPI']
        })
    },
    {
        id: 'quranku',
        code: '08',
        type: 'project',
        category: 'mobile',
        kicker: "Android Application",
        title: "Quranku App",
        accent: '#bbf7d0',
        accentRgb: [0.73, 0.97, 0.82],
        role: "Android Engineer (Kotlin)",
        year: "2024",
        status: "Released",
        desc: "Quranku is a native Kotlin Android application providing the complete 114 Surahs of the Al-Qur'an with interactive audio tilawah, multi-reciter selection, and location-aware daily Adzan schedules.",
        features: "Complete 114 Surahs with verse-by-verse Arabic, translation & search\nMulti-reciter audio streaming & offline caching (Mishary, Abdul Basit, etc.)\nVerse-by-verse and full-surah MediaPlayer audio engine\nLocation-synced daily prayer (Adzan) schedule & Qibla support\nModern Material Design 3 interface with offline-ready architecture",
        tags: ["Kotlin", "Android Jetpack", "Retrofit", "MediaPlayer", "Material Design"],
        image: createMissionArtwork({
            code: '08',
            title: 'Quranku App',
            kicker: 'Al-Quran & Tilawah Android App',
            accent: '#bbf7d0',
            secondary: '#94a3b8',
            pattern: 'mobile',
            tags: ['Kotlin', 'Jetpack', 'Retrofit', 'MediaPlayer']
        })
    },
    {
        id: 'dzikirku',
        code: '09',
        type: 'project',
        category: 'mobile',
        kicker: "Android Application",
        title: "Dzikirku",
        accent: '#a5f3fc',
        accentRgb: [0.65, 0.95, 0.99],
        role: "Android Engineer (Kotlin)",
        year: "2024",
        status: "Released",
        desc: "Dzikirku is a comprehensive Islamic companion Android app built in Kotlin that combines morning/evening dzikir counters, categorized daily prayers, geolocation Adzan alerts, and curated Islamic articles.",
        features: "Guided Morning & Evening Dzikir (Al-Ma'tsurat) with haptic counter\nCategorized daily prayers (travel, health, protection, study)\nGeolocation-based daily Adzan schedule & smart notifications\nCurated Islamic news feed synchronized via Firebase & Retrofit\nOffline persistence powered by local Room/SQLite database",
        tags: ["Kotlin", "Jetpack", "Firebase", "Retrofit", "LocalDatabase"],
        image: createMissionArtwork({
            code: '09',
            title: 'Dzikirku',
            kicker: 'Daily Worship Android App',
            accent: '#a5f3fc',
            secondary: '#94a3b8',
            pattern: 'mobile',
            tags: ['Kotlin', 'Jetpack', 'Firebase', 'Retrofit']
        })
    },
    {
        id: 'self-hosted-nas',
        code: '10',
        type: 'project',
        category: 'infra',
        kicker: "Cloud & NAS Infrastructure",
        title: "Self-Hosted NAS System",
        accent: '#cbd5e1',
        accentRgb: [0.80, 0.84, 0.88],
        role: "Infrastructure Engineer",
        year: "2024",
        status: "Production",
        desc: "A centralized Network Attached Storage (NAS) appliance engineered for school divisions (SD, SMP, and Administration), enabling high-speed LAN file sharing, automated backups, and visual container orchestration using ZimaOS, Docker, and Portainer.",
        features: "High-throughput centralized file storage accessible across school LAN\nWeb-based file explorer, role permissions & link sharing\nAutomated snapshot backups & file versioning\nVisual Docker container orchestration via Portainer\nLightweight, low-overhead bare-metal operation on ZimaOS & Linux",
        tags: ["Docker", "ZimaOS", "Portainer", "Linux", "NAS", "Networking"],
        image: createMissionArtwork({
            code: '10',
            title: 'Self-Hosted NAS System',
            kicker: 'Enterprise LAN Storage Cluster',
            accent: '#cbd5e1',
            secondary: '#94a3b8',
            pattern: 'infra',
            tags: ['Docker', 'ZimaOS', 'Portainer', 'Linux']
        })
    },
    {
        id: 'wardrobe',
        code: '11',
        type: 'project',
        category: 'web',
        kicker: "Omni-Channel Marketplace",
        title: "Wardrobe",
        accent: '#e2e8f0',
        accentRgb: [0.89, 0.91, 0.94],
        role: "Fullstack Cloud Developer",
        year: "2024",
        status: "Deployed",
        desc: "WARDROBE is an omni-channel fashion marketplace curating local and independent Indonesian brands. The platform bridges online discovery with offline retail pop-ups, empowering indie fashion labels with cloud-scale commerce and Midtrans payment orchestration.",
        features: "Multi-brand curated fashion catalog with dynamic filtering\nInteractive offline store locator & O2O (Online-to-Offline) inventory sync\nSeamless checkout powered by Midtrans payment gateway\nCloud-native deployment on AWS with ReactJS, Node.js & MongoDB\nSelf-service brand onboarding & analytics portal",
        tags: ["ReactJS", "Node.js", "MongoDB", "Midtrans", "AWS"],
        image: createMissionArtwork({
            code: '11',
            title: 'Wardrobe',
            kicker: 'Omni-Channel Fashion Platform',
            accent: '#e2e8f0',
            secondary: '#94a3b8',
            pattern: 'web',
            tags: ['ReactJS', 'Node.js', 'MongoDB', 'AWS']
        })
    }
];

export default contentData;
