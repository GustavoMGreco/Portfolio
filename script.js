
const apisData = [
    {
        categoria: "apis",
        titulo: { pt: "API - Mapa de Oportunidade para Crédito Inclusivo", en: "API - Opportunity Map for Inclusive Credit" },
        img: "imagens/imagemDM.png",
        imgAlt: "APIDmCard",
        badge: { pt: "Em Desenvolvimento", en: "In Development" },
        descricao: {
            pt: "Inteligência de crédito em TypeScrypt, Node e React com análise de dados público do Banco Central do Brasil.",
            en: "Credit intelligence in TypeScript, Node, and React with public data analysis from the Central Bank of Brazil."
        },
        desafio: {
            pt: "<strong>Desafio:</strong> ...",
            en: "<strong>Challenge:</strong> ..."
        },
        solucao: {                                                              // Em desenvolvimento
            pt: "<strong>Solução:</strong> ...",
            en: "<strong>Solution:</strong> ..."
        },
        tecs: ["devicon-html5-plain","devicon-css3-plain", "devicon-javascript-plain" ,"devicon-typescript-plain","devicon-nodejs-plain", "devicon-react-plain", "devicon-mysql-plain"],
        links: { github: "https://github.com/Galaticos-API/API-3" }
    },
    {
        categoria: "apis",
        titulo: { pt: "API - Sistema de PDI", en: "API - PDI System" },
        img: "imagens/imagemPDI.png",
        imgAlt: "SistemaPDI",
        descricao: {
            pt: "Aplicação Java desktop com banco de dados para otimização e gestão de PDIs.",
            en: "Java desktop application with database for optimizing and managing Individual Development Plans."
        },
        desafio: {
            pt: "<strong>Desafio:</strong> Garantir o gerenciamento seguro de recursos na interação das classes DAO com o BD.",
            en: "<strong>Challenge:</strong> Ensure secure resource management in the interaction of DAO classes with the DB."
        },
        solucao: {
            pt: "<strong>Solução:</strong> Implementei a estrutura try-with-resources para assegurar o fechamento automático dos recursos.",
            en: "<strong>Solution:</strong> Implemented try-with-resources to ensure automatic resource closing and prevent leaks."
        },
        tecs: ["devicon-html5-plain","devicon-css3-plain","devicon-java-plain","devicon-mysql-plain"],
        links: { video: "https://youtu.be/meaiycU6ehY", github: "https://github.com/Galaticos-API/API-2" }
    },
    {
        categoria: "apis",
        titulo: { pt: "API - AVATAR", en: "API - AVATAR" },
        img: "imagens/ImagemAVATAR.png",
        imgAlt: "APIAvatar",
        descricao: {
            pt: "Sistema web para gestão de atestados e avaliação de equipes ágeis.",
            en: "Web system for managing medical certificates and evaluating agile teams."
        },
        desafio: {
            pt: "<strong>Desafio:</strong> Implementar autenticação e exportação de documentos sem banco de dados.",
            en: "<strong>Challenge:</strong> Implement authentication and document export without a database."
        },
        solucao: {
            pt: "<strong>Solução:</strong> Utilizei Flask para as rotas, lógica e JSON como estrutura de dados.",
            en: "<strong>Solution:</strong> Used Flask for routing, logic and JSON as the data structure."
        },
        tecs: ["devicon-html5-plain","devicon-css3-plain","devicon-python-plain","devicon-bootstrap-plain","devicon-flask-original","devicon-javascript-plain"],
        links: { video: "https://www.youtube.com/watch?v=2vUJxWFI6WU", github: "https://github.com/NinjaDevs-API/NinjaDevs" }
    }
 ];

const jogosData = [
    {
        categoria: "jogos",
        titulo: { pt: "Dismissal Escape", en: "Dismissal Escape" },
        categoria: "jogos",
        img: "imagens/imagemDismissal.png",
        imgAlt: "DismissalEscape",
        badge: { pt: "Em Desenvolvimento", en: "In Development" },
        descricao: {
            pt: "Dodge 'em Up 2D desenvolvido em Godot/GDScript",
            en: "2D Dodge 'em Up developed in Godot/GDScript"
        },
        desafio: {
            pt: "<strong>Desafio:</strong> ...",
            en: "<strong>Challenge:</strong> ..."
        },
        solucao: {
            pt: "<strong>Solução:</strong> ...",
            en: "<strong>Solution:</strong> ..."
        },
        tecs: ["devicon-godot-plain"],
        links: { video: "", github: "https://github.com/GustavoMGreco/Dismissal_Escape" }
    }
];

const projetosData = [
    {
        categoria: "aplicacoes",
        titulo: { pt: "Gerador de Narrativas Procedural", en: "Procedural Narrative Generator" },
        img: "imagens/imagemQuests.png",
        imgAlt: "Gerador de Narrativas Procedural",
        badge: { pt: "Em Desenvolvimento", en: "In Development" },
        descricao: {
            pt: "API que utiliza algoritmos e lógica de grafos para gerar missões de RPG procedurais.",
            en: "API that uses graph algorithms and logic to generate procedural RPG quests."
        },
        desafio: {
            pt: "<strong>Desafio:</strong> ...",
            en: "<strong>Challenge:</strong> ..."
        },
        solucao: {
            pt: "<strong>Solução:</strong> ...",
            en: "<strong>Solution:</strong> ..."
        },
        tecs: ["devicon-html5-plain","devicon-css3-plain","devicon-typescript-plain","devicon-nodejs-plain","devicon-nestjs-plain","devicon-react-plain","devicon-prisma-plain","devicon-postgresql-plain"],
        links: { github: "https://github.com/GustavoMGreco/Gerador-de-Narrativas-Procedural" }
    },
    {
        categoria: "aplicacoes",
        titulo: { pt: "Sistema Bancário", en: "Banking System" },
        img: "imagens/imagemBanco.png",
        imgAlt: "SistemaBancario",
        descricao: {
            pt: "Core bancário e sistema de transações com extrato.",
            en: "Core Banking and Transaction System with Statement."
        },
        desafio: {
            pt: "<strong>Desafio:</strong> Impedir a exposição de dados sensíveis e da estrutura bruta do banco de dados diretamente na camada de rede (API).",
            en: "<strong>Challenge:</strong> Preventing the exposure of sensitive data and raw database structures directly to the API network layer."
        },
        solucao: {
            pt: "<strong>Solução:</strong> Implementei o padrão DTO para desacoplar as entidades do banco da interface, assim, apenas dados necessários e formatados trafegam via JSON.",
            en: "<strong>Solution:</strong> Implemented the DTO pattern to decouple database entities from the UI, ensuring only necessary and formatted data is transferred via JSON."
        },
        tecs: ["devicon-html5-plain","devicon-css3-plain","devicon-java-plain","devicon-typescript-plain","devicon-react-plain", "devicon-tailwindcss-plain","devicon-postgresql-plain"],
        links: { video: "https://youtu.be/9DyAC5l8tN8", github: "https://github.com/GustavoMGreco/Sistema-Bancario" }
    },
    {
        categoria: "aplicacoes",
        titulo: { pt: "Agenda de Contatos", en: "Contacts Manager" },
        img: "imagens/ImagemCRUD.png",
        imgAlt: "AgendadeContatos",
        descricao: {
            pt: "Aplicação web com CRUD completo para gerenciamento de contatos.",
            en: "Web application with full CRUD for contact management."
        },
        desafio: {
            pt: "<strong>Desafio:</strong> Integrar backend Flask com banco MySQL e interface responsiva.",
            en: "<strong>Challenge:</strong> Integrate Flask backend with MySQL database and responsive interface."
        },
        solucao: {
            pt: "<strong>Solução:</strong> Usei Flask para rotas e lógica, MySQL para armazenamento e Bootstrap no frontend.",
            en: "<strong>Solution:</strong> Used Flask for routes and logic, MySQL for storage, and Bootstrap on the frontend."
        },
        tecs: ["devicon-html5-plain","devicon-css3-plain","devicon-python-plain","devicon-bootstrap-plain","devicon-flask-original","devicon-mysql-plain"],
        links: { video: "https://youtu.be/e9jTuC-lV3M", github: "https://github.com/GustavoMGreco/CRUD-Agenda-de-Contatos" }
    }
];


const translations = {
    pt: {
        "nav.inicio": "Início", "nav.sobre": "Sobre mim", "nav.tecs": "Tecnologias",
        "nav.projetos": "Projetos", "nav.contato": "Contato",
        "inicio.ola": "Olá! Meu nome é", "inicio.cv": "Meu CV",
        "sobre.titulo": "Sobre Mim",
        "sobre.texto": "Atualmente curso Análise e Desenvolvimento de Sistemas na FATEC de São José dos Campos, deixei minha cidade no interior para estudar meus principais interesses: desenvolvimento full-stack, inteligência artificial e desenvolvimento de jogos. Busco sempre evoluir por meio de projetos, cursos e colaboração em equipe. Meu objetivo é aplicar o que aprendo na prática, criando soluções criativas, funcionais e impactantes, como em um bom jogo: com técnica, emoção e propósito.",
        "sobre.certs": "Certificações e Certificados:",
        "cert1.titulo": "Iniciação em Programação - ONE", "cert1.inst": "Alura • Mar 2025",
        "cert2.titulo": "Formação em Cibersegurança", "cert2.inst": "RNP • Out 2024",
        "cert3.nivel": "Nível estimado: Avançado (CEFR: B2/C1)", "cert3.nivel_label": "Nível estimado:",
        "cert.ver": "Ver Certificado", "tecs.titulo": "Tecnologias", "tecs.linguagens": "Linguagens", "tecs.frameworks": "Frameworks / Feramentas",
        "api.desc": "API (Aprendizagem por Projetos Integrados) é uma metodologia focada em desenvolver hard e soft skills. Seus diferenciais são o uso de metodologias ágeis, a resolução de desafios reais de empresas parceiras (Real Problem Based Learning) e a validação externa dos projetos pelas próprias organizações.",
        "proj.titulo": "Projetos",
        "filter.todos": "Todos", "filter.apps": "Aplicações", "filter.apis": "APIs", "filter.jogos": "Jogos",
        "card.video": "Vídeo", "card.github": "GitHub",
        "card.empty": "Nenhum projeto encontrado nesta categoria.",
        "contato.titulo": "Contato", "contato.fale": "Fale comigo!",
        "footer.rights": "Todos os direitos reservados."
    },
    en: {
        "nav.inicio": "Home", "nav.sobre": "About me", "nav.tecs": "Technologies", 
        "nav.projetos": "Projects", "nav.contato": "Contact",
        "inicio.ola": "Hi! My name is", "inicio.cv": "My CV",
        "sobre.titulo": "About Me",
        "sobre.texto": "I'm currently studying Systems Analysis and Development at FATEC in São José dos Campos. I left my hometown to pursue my main interests: full-stack development, artificial intelligence, and game development. I'm always looking to grow through projects, courses, and teamwork. My goal is to apply what I learn in practice, creating creative, functional, and impactful solutions — like a great game: with technique, emotion, and purpose.",
        "sobre.certs": "Certifications & Certificates:",
        "cert1.titulo": "Programming Fundamentals - ONE", "cert1.inst": "Alura • Mar 2025",
        "cert2.titulo": "Cybersecurity Training", "cert2.inst": "RNP • Oct 2024",
        "cert3.nivel": "Estimated level: Advanced (CEFR: B2/C1)", "cert3.nivel_label": "Estimated level:",
        "cert.ver": "View Certificate", "tecs.titulo": "Technologies", "tecs.linguagens": "Languages", "tecs.frameworks": "Frameworks / Tools",
        "api.desc": "API (Integrated Project Learning) is a methodology focused on developing hard and soft skills. Its key features are the use of agile methodologies, solving real challenges from partner companies (Real Problem Based Learning), and external validation of projects by those organizations.",
        "proj.titulo": "Projects",
        "filter.todos": "All", "filter.apps": "Applications", "filter.apis": "APIs", "filter.jogos": "Games",
        "card.video": "Video", "card.github": "GitHub",
        "card.empty": "No projects found in this category.",
        "contato.titulo": "Contact", "contato.fale": "Get in touch!",
        "footer.rights": "All rights reserved."
    }
};

let currentLang = "pt";
let currentFilter = "todos";

function t(key) { return translations[currentLang][key] || key; }

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
    });
    document.documentElement.lang = currentLang === "pt" ? "pt-br" : "en";
}


function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("gmg-theme", theme);
    const icon = document.getElementById("themeIcon");
    if (theme === "dark") {
        icon.className = "fa-solid fa-moon";
    } else {
        icon.className = "fa-solid fa-sun";
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
}


function setLang(lang) {
    currentLang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    document.getElementById("langLabel").textContent = lang === "pt" ? "EN" : "PT";
    applyTranslations();
    document.querySelectorAll(".filter-btn").forEach(btn => {
        const key = btn.getAttribute("data-i18n");
        if (key) btn.textContent = t(key);
    });
    renderGrid("projCarousel", getFilteredProjects(), true);
    updateProjDescription();
}


function getFilteredProjects() {
    if (currentFilter === "todos") return projetosData.concat(apisData, jogosData);
    if (currentFilter === "apis") return apisData;
    if (currentFilter === "jogos") return jogosData;
    return projetosData.filter(p => p.categoria === currentFilter);
}

function buildBlocoHTML(item, showCategory) {
    let badgeHTML = "";
    if (item.badge) {
        badgeHTML = `<p class="carousel-badge">${item.badge[currentLang]}</p>`;
    } else if (showCategory && item.categoria) {
        let label;
        if (item.categoria === "aplicacoes") label = t("filter.apps");
        else if (item.categoria === "jogos") label = t("filter.jogos");
        else if (item.categoria === "apis") label = t("filter.apis");
        badgeHTML = `<p class="carousel-badge">${label}</p>`;
    }

    const imgHTML = item.img
        ? `<img src="${item.img}" alt="${item.imgAlt || ""}">`
        : `<div class="carousel-no-img"><i>Em Desenvolvimento...</i></div>`;

    const tecsHTML = item.tecs && item.tecs.length > 0
        ? `<div class="carousel-tecs">${item.tecs.map(c => `<i class="${c}" title="${c.split('-')[1] || ''}"></i>`).join("")}</div>`
        : "";

    let detailsHTML = "";
    const des = item.desafio && item.desafio[currentLang];
    const sol = item.solucao && item.solucao[currentLang];
    if (des || sol) {
        detailsHTML = `<p class="carousel-details">${[des, sol].filter(Boolean).join("<br>")}</p>`;
    }

    const linksHTML = [
        item.links && item.links.video ? `<a href="${item.links.video}" target="_blank">${t("card.video")}</a>` : "",
        item.links && item.links.github ? `<a href="${item.links.github}" target="_blank">${t("card.github")}</a>` : ""
    ].filter(Boolean).join("");

    return `
        <div class="carousel-left">
            ${imgHTML}
        </div>
        <div class="carousel-right">
            <div class="carousel-right-header">
                <h2>${item.titulo[currentLang]}</h2>
                ${badgeHTML}
            </div>
            <p class="carousel-desc">${item.descricao[currentLang]}</p>
            ${tecsHTML}
            ${detailsHTML}
            <div class="carousel-links">${linksHTML}</div>
        </div>
    `;

}

function renderGrid(containerId, data, showCategory) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";
    if (!data || data.length === 0) {
        container.innerHTML = `<p class="carousel-empty">${t("card.empty")}</p>`;
        return;
    }

    const grid = document.createElement("div");
    grid.className = "cards-grid";

    data.forEach(item => {
        const bloco = document.createElement("div");
        bloco.className = "carousel-bloco";
        bloco.innerHTML = buildBlocoHTML(item, showCategory);
        grid.appendChild(bloco);
    });

    container.appendChild(grid);
}


function updateProjDescription() {
    const descEl = document.getElementById("projDesc");
    if (!descEl) return;
    if (currentFilter === "apis") {
        descEl.textContent = t("api.desc");
    } else {
        descEl.textContent = "";
    }
}

function initFilters() {
    const bar = document.getElementById("filterBar");
    if (!bar) return;
    bar.addEventListener("click", e => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter");
        renderGrid("projCarousel", getFilteredProjects(), true);
        updateProjDescription();
    });
}


function initNavbar() {
    const btnMenu = document.querySelector(".menu-hamburger");
    const nav = document.querySelector("header nav");
    btnMenu.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
        this.classList.toggle("open");
        this.setAttribute("aria-expanded", this.classList.contains("open"));
    });
    document.querySelectorAll("nav .naveg").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 900) {
                nav.classList.remove("nav-open");
                btnMenu.classList.remove("open");
                btnMenu.setAttribute("aria-expanded", "false");
            }
        });
    });
}


document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    const savedTheme = localStorage.getItem("gmg-theme") || "dark";
    setTheme(savedTheme);

    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    document.getElementById("langToggle").addEventListener("click", () => {
        setLang(currentLang === "pt" ? "en" : "pt");
    });

    renderGrid("projCarousel", getFilteredProjects(), true);
    initFilters();
    initNavbar();
    applyTranslations();
    updateProjDescription();
});