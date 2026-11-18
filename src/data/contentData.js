// Helper to generate bespoke high-contrast sci-fi SVG artwork for each node
// Eliminates ugly placehold.co boxes and works 100% offline/instantaneously
function createMissionArtwork({ code, title, kicker, accent = '#38bdf8', secondary = '#6366f1', pattern = 'grid', tags = [] }) {
    const tagPills = tags.slice(0, 4).map((t, i) => {
        const x = 60 + i * 175;
        return `
            <g transform="translate(${x}, 670)">
                <rect width="155" height="36" rx="6" fill="rgba(255,255,255,0.05)" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.2"/>
                <text x="77.5" y="23" fill="#e2e8f0" font-family="monospace" font-size="13" font-weight="bold" text-anchor="middle" letter-spacing="1">${t.toUpperCase()}</text>
            </g>
        `;
    }).join('');

    let centerGraphic = '';
    if (pattern === 'origin') {
        centerGraphic = `
            <circle cx="600" cy="360" r="190" fill="none" stroke="${accent}" stroke-opacity="0.2" stroke-width="1.5" stroke-dasharray="8 6"/>
            <circle cx="600" cy="360" r="145" fill="none" stroke="${secondary}" stroke-opacity="0.35" stroke-width="1.5"/>
            <circle cx="600" cy="360" r="95" fill="url(#coreGlow)" stroke="${accent}" stroke-opacity="0.8" stroke-width="2"/>
            <path d="M410 360 H790 M600 170 V550" stroke="${accent}" stroke-opacity="0.25" stroke-width="1"/>
            <polygon points="600,230 712,425 488,425" fill="none" stroke="${accent}" stroke-opacity="0.5" stroke-width="1.5"/>
            <polygon points="600,490 712,295 488,295" fill="none" stroke="${secondary}" stroke-opacity="0.4" stroke-width="1.5"/>
            <circle cx="600" cy="360" r="14" fill="#ffffff"/>
        `;
    } else if (pattern === 'mobile') {
        centerGraphic = `
            <rect x="495" y="165" width="210" height="390" rx="28" fill="rgba(10,14,26,0.85)" stroke="${accent}" stroke-width="2.5"/>
            <rect x="515" y="205" width="170" height="310" rx="12" fill="url(#panelGrad)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
            <line x1="565" y1="185" x2="635" y2="185" stroke="${accent}" stroke-opacity="0.6" stroke-width="3" stroke-linecap="round"/>
            <circle cx="600" cy="535" r="8" fill="none" stroke="${accent}" stroke-opacity="0.6" stroke-width="1.5"/>
            <rect x="535" y="230" width="130" height="65" rx="8" fill="${accent}" fill-opacity="0.18" stroke="${accent}" stroke-opacity="0.5"/>
            <rect x="535" y="310" width="130" height="32" rx="6" fill="rgba(255,255,255,0.06)"/>
            <rect x="535" y="354" width="130" height="32" rx="6" fill="rgba(255,255,255,0.06)"/>
            <rect x="535" y="398" width="90" height="32" rx="6" fill="${secondary}" fill-opacity="0.25"/>
            <circle cx="420" cy="270" r="45" fill="none" stroke="${accent}" stroke-opacity="0.25" stroke-dasharray="5 5"/>
            <circle cx="780" cy="450" r="65" fill="none" stroke="${secondary}" stroke-opacity="0.25" stroke-dasharray="6 6"/>
        `;
    } else if (pattern === 'infra') {
        centerGraphic = `
            <g stroke="${accent}" stroke-width="1.8" fill="rgba(10,15,30,0.8)">
                <rect x="430" y="195" width="340" height="75" rx="10" stroke-opacity="0.8"/>
                <rect x="430" y="295" width="340" height="75" rx="10" stroke-opacity="0.6"/>
                <rect x="430" y="395" width="340" height="75" rx="10" stroke-opacity="0.45"/>
            </g>
            <g fill="${accent}">
                <circle cx="470" cy="232" r="7"/><circle cx="498" cy="232" r="7" fill="${secondary}"/>
                <circle cx="470" cy="332" r="7"/><circle cx="498" cy="332" r="7" fill="${secondary}"/>
                <circle cx="470" cy="432" r="7"/><circle cx="498" cy="432" r="7" fill="${secondary}"/>
            </g>
            <g stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-linecap="round">
                <line x1="550" y1="232" x2="730" y2="232"/>
                <line x1="550" y1="332" x2="730" y2="332"/>
                <line x1="550" y1="432" x2="730" y2="432"/>
            </g>
            <path d="M360 332 H430 M770 332 H840 M600 140 V195 M600 470 V530" stroke="${accent}" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="6 4"/>
        `;
    } else if (pattern === 'web3') {
        centerGraphic = `
            <g fill="none" stroke="${accent}" stroke-width="2">
                <polygon points="600,175 745,260 745,430 600,515 455,430 455,260" fill="rgba(15,10,35,0.7)" stroke-opacity="0.85"/>
                <polygon points="600,225 700,285 700,405 600,465 500,405 500,285" stroke="${secondary}" stroke-opacity="0.6" stroke-dasharray="6 4"/>
                <line x1="600" y1="175" x2="600" y2="345" stroke-opacity="0.45"/>
                <line x1="745" y1="430" x2="600" y2="345" stroke-opacity="0.45"/>
                <line x1="455" y1="430" x2="600" y2="345" stroke-opacity="0.45"/>
            </g>
            <circle cx="600" cy="345" r="22" fill="${accent}" fill-opacity="0.3" stroke="#fff" stroke-width="2"/>
            <circle cx="600" cy="175" r="8" fill="#fff"/>
            <circle cx="745" cy="260" r="8" fill="${accent}"/>
            <circle cx="745" cy="430" r="8" fill="#fff"/>
            <circle cx="600" cy="515" r="8" fill="${accent}"/>
            <circle cx="455" cy="430" r="8" fill="#fff"/>
            <circle cx="455" cy="260" r="8" fill="${accent}"/>
        `;
    } else {
        centerGraphic = `
            <rect x="370" y="180" width="460" height="330" rx="16" fill="rgba(10,14,26,0.86)" stroke="${accent}" stroke-opacity="0.7" stroke-width="2"/>
            <line x1="370" y1="225" x2="830" y2="225" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
            <circle cx="400" cy="203" r="6" fill="#f43f5e"/>
            <circle cx="422" cy="203" r="6" fill="#f59e0b"/>
            <circle cx="444" cy="203" r="6" fill="#10b981"/>
            <rect x="405" y="255" width="185" height="125" rx="8" fill="url(#coreGlow)" stroke="${accent}" stroke-opacity="0.4"/>
            <rect x="610" y="255" width="185" height="55" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
            <rect x="610" y="325" width="185" height="55" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)"/>
            <rect x="405" y="400" width="390" height="75" rx="8" fill="rgba(255,255,255,0.04)" stroke="${secondary}" stroke-opacity="0.35"/>
            <polyline points="425,455 475,425 525,442 585,412 645,435 710,410 770,428" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linecap="round"/>
        `;
    }

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
        <defs>
            <radialGradient id="bgGrad" cx="50%" cy="45%" r="75%">
                <stop offset="0%" stop-color="#0f172a"/>
                <stop offset="55%" stop-color="#050811"/>
                <stop offset="100%" stop-color="#020307"/>
            </radialGradient>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stop-color="${accent}" stop-opacity="0.42"/>
                <stop offset="60%" stop-color="${secondary}" stop-opacity="0.14"/>
                <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="panelGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${accent}" stop-opacity="0.16"/>
                <stop offset="100%" stop-color="${secondary}" stop-opacity="0.04"/>
            </linearGradient>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
            </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#bgGrad)"/>
        <rect width="1200" height="800" fill="url(#grid)"/>
        <circle cx="600" cy="360" r="340" fill="url(#coreGlow)"/>
        
        <!-- HUD Frame -->
        <rect x="36" y="36" width="1128" height="728" rx="14" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
        <path d="M36 86 V36 H86 M1114 36 H1164 V86 M36 714 V764 H86 M1114 764 H1164 V714" fill="none" stroke="${accent}" stroke-width="2.5"/>
        
        <!-- Top Telemetry -->
        <text x="64" y="78" fill="${accent}" font-family="monospace" font-size="15" font-weight="bold" letter-spacing="3">// ${code} · ${kicker.toUpperCase()}</text>
        <text x="1136" y="78" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="13" text-anchor="end" letter-spacing="2">ARCHIPELAGO DYNAMICS · SECTOR 07</text>
        
        ${centerGraphic}

        <!-- Title Banner -->
        <text x="64" y="610" fill="rgba(255,255,255,0.45)" font-family="monospace" font-size="14" letter-spacing="4">MISSION ARTIFACT</text>
        <text x="64" y="648" fill="#ffffff" font-family="sans-serif" font-size="34" font-weight="800" letter-spacing="1">${title.toUpperCase()}</text>
        ${tagPills}
    </svg>`;

    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export { createMissionArtwork };

const contentData = [
    {
        id: 'origin',
        code: 'SYS-00',
        type: 'about',
        category: 'origin',
        kicker: "Origin Node · Founder & Engineer",
        title: "Rokan S. F.",
        subtitle: "Founder of Archipelago Dynamics · Fullstack, DevOps & Web3 Engineer",
        accent: '#f59e0b',
        accentRgb: [0.96, 0.62, 0.04],
        role: "Founder & Chief Visionary Officer",
        year: "2021 — PRESENT",
        status: "ONLINE · ACTIVE",
        metrics: [
            { label: "Ventures & Systems", value: "12+" },
            { label: "Verified Credentials", value: "11" },
            { label: "English Proficiency", value: "C2 (EF SET)" },
            { label: "National Coding Award", value: "3rd Winner" }
        ],
        desc: "As the founder of Archipelago Dynamics, I am dedicated to bridging Indonesia's vast potential with the global market. Our journey began in international trade, exporting premium local commodities and importing cutting-edge technology. This experience revealed a critical need for digital efficiency, leading to the creation of our IT Solutions division, which now empowers businesses with transformative software and enterprise architecture. Today, we continue to innovate across sectors, driven by a core mission to build synergistic ventures that pioneer the future.",
        exp: "-Founder & Chief Visionary Officer, Archipelago Dynamics (2023 - Present)\n-Global Trade Analyst, Maersk Line (2021 - 2025)\n-Fullstack & DevOps Engineer (Intern), Yayasan Bina Insan Taqwa\n-SCRATCH Trainer, IDNBS (IDN IT CAMP BATCH 2)\n-MicroBit Trainer, IDNBS (IDN IT CAMP BATCH 2)\n-UI/UX Trainer – Al Ashr Bina Mandiri (2023)\n-3rd Winner of National Coding Competition (AL-HAZEN ACADEMY)",
        skills: "-Business Strategy & Leadership: Global Trade & Supply Chain Management, Enterprise Architecture & Digital Transformation, Venture Capital & Strategic Investment\n-Frontend & Mobile: HTML5, CSS3, JavaScript, TypeScript, React, TailwindCSS, Dart, Kotlin, Android Jetpack, UI/UX, GSAP, Lowcoder\n-Backend & Database: Node.js, NestJS, PHP, Laravel, Python, MySQL, PostgreSQL, MongoDB, Prisma ORM, RESTful API\n-Web3 & Blockchain: Solidity, Ethers.js, Hardhat, Smart Contracts, MetaMask Integration\n-Cloud, Infra & DevOps: Linux, Docker, KVM, Portainer, ZimaOS, Syncthing, Tailscale, CI/CD, GitHub Actions, Nginx, Apache, Fortinet Security",
        link: "assets/PORTOFOLIO_ROKAN.pdf",
        linkLabel: "Download CV / Portfolio PDF",
        image: createMissionArtwork({
            code: 'SYS-00',
            title: 'Rokan S. F. — Origin Core',
            kicker: 'Founder · Engineer · Visionary',
            accent: '#f59e0b',
            secondary: '#38bdf8',
            pattern: 'origin',
            tags: ['Archipelago Dynamics', 'Fullstack', 'DevOps', 'Web3']
        })
    },
    {
        id: 'peti-ngemil',
        code: 'PRJ-01',
        type: 'project',
        category: 'web',
        kicker: "E-Commerce Platform",
        title: "Peti Ngemil",
        accent: '#f43f5e',
        accentRgb: [0.96, 0.25, 0.37],
        role: "Fullstack Developer",
        year: "2024",
        status: "DEPLOYED",
        desc: "Peti Ngemil is an e-commerce web platform built to support local MSME (UMKM) food vendors by providing them a digital storefront — for free. Designed and developed as a team project, it includes complete features for users and admins, making it a powerful, real-world solution for small business digitization.",
        features: "Role-based access control (Admin & Customer portals)\nAutomated payment gateway integration via Midtrans\nReal-time shipping rate calculation with RajaOngkir API\nInstant thermal/PDF receipt printing (Cetak Struk)\nComprehensive analytics & inventory Admin Dashboard",
        tags: ["Laravel", "Node.js", "MySQL", "Blade", "TailwindCSS", "Midtrans", "RajaOngkir"],
        image: createMissionArtwork({
            code: 'PRJ-01',
            title: 'Peti Ngemil',
            kicker: 'E-Commerce MSME Platform',
            accent: '#f43f5e',
            secondary: '#fb923c',
            pattern: 'web',
            tags: ['Laravel', 'Midtrans', 'RajaOngkir', 'TailwindCSS']
        })
    },
    {
        id: 'distributed-file-sync',
        code: 'PRJ-02',
        type: 'project',
        category: 'infra',
        kicker: "Infrastructure & DevOps",
        title: "Distributed File Sync",
        accent: '#38bdf8',
        accentRgb: [0.22, 0.74, 0.97],
        role: "DevOps & Systems Architect",
        year: "2024",
        status: "PRODUCTION",
        desc: "This project implements a real-time, peer-to-peer file synchronization system for a multi-division school environment (covering elementary, junior high, and administration divisions). Built using Syncthing, Tailscale, and Docker, the system allows all school computers to share and access documents like a shared cloud — fully offline within the local network.",
        features: "Real-time peer-to-peer document sync across all division devices\nZero internet dependency (runs at LAN speed on local network)\nReproducible containerized deployment via Docker\nEncrypted mesh networking & remote management via Tailscale\nEliminates manual flash-drive transfers across departments",
        tags: ["Syncthing", "Docker", "Tailscale", "Linux", "P2P Networking"],
        image: createMissionArtwork({
            code: 'PRJ-02',
            title: 'Distributed File Sync',
            kicker: 'P2P Local Cloud Infrastructure',
            accent: '#38bdf8',
            secondary: '#0ea5e9',
            pattern: 'infra',
            tags: ['Syncthing', 'Docker', 'Tailscale', 'LAN P2P']
        })
    },
    {
        id: 'nestjs-api',
        code: 'PRJ-03',
        type: 'project',
        category: 'infra',
        kicker: "Backend Architecture",
        title: "NestJS RESTful API",
        accent: '#06b6d4',
        accentRgb: [0.02, 0.71, 0.83],
        role: "Backend Engineer",
        year: "2024",
        status: "VERIFIED",
        desc: "A secure, modular, and scalable RESTful API built with NestJS, utilizing PostgreSQL as the primary relational database and Prisma ORM for type-safe data access. Authentication is hardened with JWT bearer tokens, guards, and role-based access control.",
        features: "Full type-safe CRUD operations with DTO validation\nStateless authentication & authorization with JWT Guards\nRole-Based Access Control (RBAC) middleware\nPostgreSQL relational schema managed via Prisma ORM migrations\nClean modular Dependency Injection architecture in NestJS",
        tags: ["NestJS", "PostgreSQL", "Prisma", "JWT", "TypeScript", "REST API"],
        image: createMissionArtwork({
            code: 'PRJ-03',
            title: 'NestJS RESTful API',
            kicker: 'Modular Backend Service',
            accent: '#06b6d4',
            secondary: '#3b82f6',
            pattern: 'infra',
            tags: ['NestJS', 'PostgreSQL', 'Prisma', 'JWT']
        })
    },
    {
        id: 'web3-todo',
        code: 'PRJ-04',
        type: 'project',
        category: 'web3',
        kicker: "Web3 & Blockchain",
        title: "Decentralized To-Do DApp",
        accent: '#a855f7',
        accentRgb: [0.66, 0.33, 0.97],
        role: "Web3 & Smart Contract Developer",
        year: "2024",
        status: "ON-CHAIN",
        desc: "A fully decentralized To-Do List application built using Web3 technologies. The frontend is developed with React and Tailwind CSS, while the backend logic runs on a Solidity smart contract deployed to an Ethereum network using Hardhat. Users authenticate via MetaMask and manage tasks stored immutably on-chain.",
        features: "On-chain task creation bound to the user's Ethereum wallet address\nDirect smart contract state queries via Ethers.js\nCryptographically verified task deletion (restricted to task owner)\nSeamless MetaMask wallet connection & transaction signing\nResponsive Web3 interface with real-time block confirmation feedback",
        tags: ["React", "Solidity", "Ethers.js", "Hardhat", "MetaMask", "TailwindCSS"],
        image: createMissionArtwork({
            code: 'PRJ-04',
            title: 'Decentralized To-Do DApp',
            kicker: 'Ethereum Smart Contract App',
            accent: '#a855f7',
            secondary: '#6366f1',
            pattern: 'web3',
            tags: ['Solidity', 'Ethers.js', 'Hardhat', 'React']
        })
    },
    {
        id: 'plantique',
        code: 'PRJ-05',
        type: 'project',
        category: 'web',
        kicker: "Creative Studio Web",
        title: "Plantique",
        accent: '#10b981',
        accentRgb: [0.06, 0.73, 0.51],
        role: "Creative Frontend Developer",
        year: "2023",
        status: "SHOWCASE",
        desc: "Plantique is a creative studio concept that merges art, web design, development, and botanical lifestyle. Built as an interactive web service hub for our creative team, the site delivers a fluid, high-craft visual experience powered by GSAP choreography.",
        features: "Choreographed page & scroll transitions powered by GSAP\nFluid responsive layout engineered for mobile and desktop viewports\nBespoke art direction blending editorial typography and motion\nHigh-performance DOM animation pipeline",
        tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Motion Design"],
        image: createMissionArtwork({
            code: 'PRJ-05',
            title: 'Plantique Studio',
            kicker: 'Interactive Creative Hub',
            accent: '#10b981',
            secondary: '#34d399',
            pattern: 'web',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP']
        })
    },
    {
        id: 'skillforge',
        code: 'PRJ-06',
        type: 'project',
        category: 'web',
        kicker: "EdTech Platform · 3rd Winner",
        title: "SkillForge",
        accent: '#f97316',
        accentRgb: [0.98, 0.45, 0.09],
        role: "Lead Fullstack Developer",
        year: "2023",
        status: "AWARD WINNER",
        desc: "SkillForge is an educational platform designed to help individuals master in-demand technology skills through structured online courses. Featuring a full course management system and interactive learning modules, SkillForge won 3rd Place at the National Coding Competition.",
        features: "End-to-end Course Management System (CMS) for instructors & students\nInteractive enrollment, progress tracking & form handling\nResponsive learning interface built with Laravel Blade & Bootstrap\n3rd Place Winner — National Coding Competition (Al-Hazen Academy)",
        tags: ["Laravel", "Bootstrap", "Blade", "MySQL", "EdTech"],
        image: createMissionArtwork({
            code: 'PRJ-06',
            title: 'SkillForge EdTech',
            kicker: 'Award-Winning Learning Platform',
            accent: '#f97316',
            secondary: '#facc15',
            pattern: 'web',
            tags: ['Laravel', 'Blade', 'MySQL', 'Bootstrap']
        })
    },
    {
        id: 'aroundu',
        code: 'PRJ-07',
        type: 'project',
        category: 'mobile',
        kicker: "Android Application",
        title: "AroundU App",
        accent: '#2dd4bf',
        accentRgb: [0.18, 0.83, 0.75],
        role: "Android Engineer (Kotlin)",
        year: "2024",
        status: "RELEASED",
        desc: "AroundU is a modern native Android app developed in Kotlin that aggregates and displays real-time breaking news from trusted Indonesian and global sources via NewsAPI. Engineered with clean MVVM architecture, Retrofit networking, and smooth navigation.",
        features: "Real-time news aggregation & search powered by NewsAPI + Retrofit\nHigh-performance RecyclerView with DiffUtil article rendering\nBottom Navigation Bar across Home, Curated Categories & Settings\nClean MVVM architecture with reactive state management\nNative Kotlin implementation in Android Studio",
        tags: ["Kotlin", "NewsAPI", "RecyclerView", "MVVM", "Retrofit", "Android"],
        image: createMissionArtwork({
            code: 'PRJ-07',
            title: 'AroundU News',
            kicker: 'Native Kotlin Android App',
            accent: '#2dd4bf',
            secondary: '#38bdf8',
            pattern: 'mobile',
            tags: ['Kotlin', 'MVVM', 'Retrofit', 'NewsAPI']
        })
    },
    {
        id: 'quranku',
        code: 'PRJ-08',
        type: 'project',
        category: 'mobile',
        kicker: "Android Application",
        title: "Quranku App",
        accent: '#34d399',
        accentRgb: [0.20, 0.83, 0.60],
        role: "Android Engineer (Kotlin)",
        year: "2024",
        status: "RELEASED",
        desc: "Quranku is a native Kotlin Android application providing the complete 114 Surahs of the Al-Qur'an with interactive audio tilawah, multi-reciter selection, and location-aware daily Adzan schedules.",
        features: "Complete 114 Surahs with verse-by-verse Arabic, translation & search\nMulti-reciter audio streaming & offline caching (Mishary, Abdul Basit, etc.)\nVerse-by-verse and full-surah MediaPlayer audio engine\nLocation-synced daily prayer (Adzan) schedule & Qibla support\nModern Material Design 3 interface with offline-ready architecture",
        tags: ["Kotlin", "Android Jetpack", "Retrofit", "MediaPlayer", "Material Design"],
        image: createMissionArtwork({
            code: 'PRJ-08',
            title: 'Quranku App',
            kicker: 'Al-Quran & Tilawah Android App',
            accent: '#34d399',
            secondary: '#10b981',
            pattern: 'mobile',
            tags: ['Kotlin', 'Jetpack', 'Retrofit', 'MediaPlayer']
        })
    },
    {
        id: 'dzikirku',
        code: 'PRJ-09',
        type: 'project',
        category: 'mobile',
        kicker: "Android Application",
        title: "Dzikirku",
        accent: '#14b8a6',
        accentRgb: [0.08, 0.72, 0.65],
        role: "Android Engineer (Kotlin)",
        year: "2024",
        status: "RELEASED",
        desc: "Dzikirku is a comprehensive Islamic companion Android app built in Kotlin that combines morning/evening dzikir counters, categorized daily prayers, geolocation Adzan alerts, and curated Islamic articles.",
        features: "Guided Morning & Evening Dzikir (Al-Ma'tsurat) with haptic counter\nCategorized daily prayers (travel, health, protection, study)\nGeolocation-based daily Adzan schedule & smart notifications\nCurated Islamic news feed synchronized via Firebase & Retrofit\nOffline persistence powered by local Room/SQLite database",
        tags: ["Kotlin", "Jetpack", "Firebase", "Retrofit", "LocalDatabase"],
        image: createMissionArtwork({
            code: 'PRJ-09',
            title: 'Dzikirku Companion',
            kicker: 'Daily Worship Android App',
            accent: '#14b8a6',
            secondary: '#06b6d4',
            pattern: 'mobile',
            tags: ['Kotlin', 'Jetpack', 'Firebase', 'Retrofit']
        })
    },
    {
        id: 'self-hosted-nas',
        code: 'PRJ-10',
        type: 'project',
        category: 'infra',
        kicker: "Cloud & NAS Infrastructure",
        title: "Self-Hosted NAS System",
        accent: '#60a5fa',
        accentRgb: [0.38, 0.65, 0.98],
        role: "Infrastructure Engineer",
        year: "2024",
        status: "PRODUCTION",
        desc: "A centralized Network Attached Storage (NAS) appliance engineered for school divisions (SD, SMP, and Administration), enabling high-speed LAN file sharing, automated backups, and visual container orchestration using ZimaOS, Docker, and Portainer.",
        features: "High-throughput centralized file storage accessible across school LAN\nWeb-based file explorer, role permissions & link sharing\nAutomated snapshot backups & file versioning\nVisual Docker container orchestration via Portainer\nLightweight, low-overhead bare-metal operation on ZimaOS & Linux",
        tags: ["Docker", "ZimaOS", "Portainer", "Linux", "NAS", "Networking"],
        image: createMissionArtwork({
            code: 'PRJ-10',
            title: 'Self-Hosted NAS System',
            kicker: 'Enterprise LAN Storage Cluster',
            accent: '#60a5fa',
            secondary: '#818cf8',
            pattern: 'infra',
            tags: ['Docker', 'ZimaOS', 'Portainer', 'Linux']
        })
    },
    {
        id: 'wardrobe',
        code: 'PRJ-11',
        type: 'project',
        category: 'web',
        kicker: "Omni-Channel Marketplace",
        title: "Wardrobe",
        accent: '#ec4899',
        accentRgb: [0.93, 0.28, 0.60],
        role: "Fullstack Cloud Developer",
        year: "2024",
        status: "DEPLOYED",
        desc: "WARDROBE is an omni-channel fashion marketplace curating local and independent Indonesian brands. The platform bridges online discovery with offline retail pop-ups, empowering indie fashion labels with cloud-scale commerce and Midtrans payment orchestration.",
        features: "Multi-brand curated fashion catalog with dynamic filtering\nInteractive offline store locator & O2O (Online-to-Offline) inventory sync\nSeamless checkout powered by Midtrans payment gateway\nCloud-native deployment on AWS with ReactJS, Node.js & MongoDB\nSelf-service brand onboarding & analytics portal",
        tags: ["ReactJS", "Node.js", "MongoDB", "Midtrans", "AWS"],
        image: createMissionArtwork({
            code: 'PRJ-11',
            title: 'WARDROBE Marketplace',
            kicker: 'Omni-Channel Fashion Platform',
            accent: '#ec4899',
            secondary: '#a855f7',
            pattern: 'web',
            tags: ['ReactJS', 'Node.js', 'MongoDB', 'AWS']
        })
    }
];

export default contentData;
