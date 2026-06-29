function openOverlay(id) {
  document.getElementById(id).style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeOverlay(event, id) {
  if (event) event.stopPropagation();

  const overlay = document.getElementById(id);
  if (!overlay) return;

  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';

  const video = overlay.querySelector('video');
  if (video) video.pause();

  const iframe = overlay.querySelector('iframe');
  if (iframe) {
    const currentSrc = iframe.src;
    iframe.src = '';
    iframe.src = currentSrc;
  }
}

function closeOverlayOutside(event, id) {
  if (event.target === event.currentTarget) closeOverlay(event, id);
}

function zoomImage(event, element) {
  if (event) event.stopPropagation();

  let lightbox = document.getElementById('lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-img" id="lightbox-target-img" src="" alt="Zoom">
    `;
    lightbox.onclick = function () { lightbox.style.display = 'none'; };
    document.body.appendChild(lightbox);
  }

  const targetImg = document.getElementById('lightbox-target-img');
  targetImg.src = element.src;
  targetImg.alt = element.alt;
  lightbox.style.display = 'flex';
}

// Accessibilité : fermeture au clavier (Échap)
// Priorité : lightbox d'abord, puis overlay de projet
document.onkeydown = function (event) {
  if (event.key === 'Escape') {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
      return;
    }
    for (let i = 1; i <= 6; i++) {
      const overlay = document.getElementById('overlay-projet' + i);
      if (overlay && overlay.style.display === 'flex') closeOverlay(null, 'overlay-projet' + i);
    }
  }
};


const traductions = {
  fr: {
    "nav-accueil": "Accueil",
    "nav-projets": "Projets",
    "nav-apropos": "À propos",
    "nav-contact": "Contact",
    "txt-titre": "Découvrez mon univers",
    "txt-subtitle": "Bienvenue sur mon portfolio !",
    "txt-description": "Passionné et créatif, je suis ravi de vous partager mes travaux et de vous faire découvrir mes projets ! Explorez mes créations et mes compétences à travers mes différentes collections.",
    "txt-btn-projets": 'Voir mes projets <i class="uil uil-arrow-down"></i>',
    "portfolio-sub": "Portfolio",
    "portfolio-title": "<span>Derniers</span> Projets",
    "p1-grid-title": "Partir en fumée",
    "p1-grid-sub": "Collection argentique",
    "p2-grid-title": "Documentaire en Corée du Sud",
    "p2-grid-sub": "Tournage et post-production",
    "p3-grid-title": "Création de site",
    "p3-grid-sub": "Site internet et jeu",
    "p4-grid-title": "Atelier photographique",
    "p4-grid-sub": "Travail autour de l'appareil",
    "p5-grid-title": "Design",
    "p5-grid-sub": "Projets numériques",
    "p6-grid-title": "Voyager",
    "p6-grid-sub": "Collection personnelle",
    "p1-title": "Partir en fumée",
    "p1-cat": "Collection argentique",
    "p1-about-title": "À propos du projet",
    "p1-about-txt": "Série de photographies argentiques au Canada explorant le noir et blanc et les textures. Ce projet consistait à brûler une pellicule une fois développée.",
    "p1-coll-title": "Aperçu de la collection",
    "p1-coll-desc": "Découvrez d'autres clichés issus de cette série photographique :",
    "p2-title": "Documentaire en Corée du Sud",
    "p2-cat": "Tournage et post-production",
    "p2-about-title": "À propos du projet",
    "p2-about-txt": "Dans le cadre de mon master nous nous sommes rendus en Corée du Sud pour tourner un documentaire sur la pêche et la ruralité.",
    "p2-coll-title": "Photos du tournage",
    "p2-coll-desc": "Clichés de notre tournage à Geoje :",
    "p3-title": "Création de site",
    "p3-cat": "Site internet et jeu",
    "p3-about-title": "À propos du projet",
    "p3-about-txt": "Création de jeux et de sites internet dans le cadre de mes formations. \"Cookie clicker\", \"platform game\" ainsi que la participation à la Nuit de l'Info.",
    "p3-coll-title": "Explorer davantage de projet",
    "p3-coll-desc": "Projet escape game réaliser sur Max",
    "p4-title": "Atelier photographique",
    "p4-cat": "Travail autour de l'appareil",
    "p4-about-title": "À propos du projet",
    "p4-about-txt": "A la découverte de l'appareil photographique, des techniques et de la retouche d'image. Premiers pas dans le monde photographique.",
    "p4-coll-title": "Aperçu de la collection",
    "p4-coll-desc": "Découvrez plus de clichés :",
    "p5-title": "Design",
    "p5-cat": "Projets numériques",
    "p5-about-title": "À propos du projet",
    "p5-about-txt": "Création graphique et artistique pour maquettes d'albums, interfaces numériques, logo et produits.",
    "p5-coll-title": "Plus de projets",
    "p5-coll-desc": "Déclinaisons graphiques et design :",
    "p6-title": "Voyager",
    "p6-cat": "Collection personnelle",
    "p6-about-title": "À propos du projet",
    "p6-about-txt": "Carnet de voyage visuel regroupant des clichés pris aux quatre coins du globe : Canada, Espagne, Corée du Sud...",
    "p6-coll-title": "Aperçu de la collection",
    "p6-coll-desc": "Sélection de clichés :",
    "about-title": "<span>À propos</span> de moi",
    "about-txt": "Actuellement en Master Cultures et Métiers du Web, titulaire d'une Licence EVMAN et d'un DUT MMI, j'ai su développer ma créativité et mon approche des nouvelles technologies. A la recherche de nouvelles compétences, j'ai toujours fait appel à ma curiosité et à mon savoir-faire pour mener à bien mes différents projets. Ce site a pour but de mettre en avant mes travaux et les partager.",
    "contact-title": "Contactez-<span>moi</span>",
    "contact-txt": "N'hésitez pas à me contacter pour toute collaboration ou information complémentaire sur mon travail.",
    "contact-btn": "Envoyer un e-mail",
    "footer-rights": "&copy; 2026 Nolan R. Tous droits réservés.",
    "footer-legal": "<strong>Mentions Légales :</strong> Hébergé par GitHub Pages. Ce site utilise l'IA générative comme outil d'assistance au développement"
  },
  en: {
    "nav-accueil": "Home",
    "nav-projets": "Projects",
    "nav-apropos": "About",
    "nav-contact": "Contact",
    "txt-titre": "Discover my universe",
    "txt-subtitle": "Welcome to my portfolio!",
    "txt-description": "Passionate and creative, I am delighted to share my work and introduce you to my projects! Explore my creations and skills through my different collections.",
    "txt-btn-projets": 'View my projects <i class="uil uil-arrow-down"></i>',
    "portfolio-sub": "Portfolio",
    "portfolio-title": "<span>Latest</span> Projects",
    "p1-grid-title": "Up in Smoke",
    "p1-grid-sub": "Film photography collection",
    "p2-grid-title": "Documentary in South Korea",
    "p2-grid-sub": "Filming and post-production",
    "p3-grid-title": "Website Creation",
    "p3-grid-sub": "Website and gaming",
    "p4-grid-title": "Photography Workshop",
    "p4-grid-sub": "Working around the camera",
    "p5-grid-title": "Design",
    "p5-grid-sub": "Digital projects",
    "p6-grid-title": "Travel",
    "p6-grid-sub": "Personal collection",
    "p1-title": "Up in Smoke",
    "p1-cat": "Film photography collection",
    "p1-about-title": "About the project",
    "p1-about-txt": "A series of film photographs taken in Canada, exploring black and white styles and textures. This project involved burning the film once it was developed.",
    "p1-coll-title": "Collection Overview",
    "p1-coll-desc": "Discover other photographs from this series:",
    "p2-title": "Documentaire en Corée du Sud",
    "p2-cat": "Filming and post-production",
    "p2-about-title": "About the project",
    "p2-about-txt": "As part of my master's degree, we traveled to South Korea to shoot a documentary focusing on fishing and rural life.",
    "p2-coll-title": "Behind the Scenes Photos",
    "p2-coll-desc": "Pictures from our shoot in Geoje:",
    "p3-title": "Website Creation",
    "p3-cat": "Website and gaming",
    "p3-about-title": "About the project",
    "p3-about-txt": "Creation of games and websites during my studies. \"Cookie clicker\", \"platform game\", along with participating in the Nuit de l'Info event.",
    "p3-coll-title": "Explore more of the project",
    "p3-coll-desc": "Escape game project developed using Max",
    "p4-title": "Photography Workshop",
    "p4-cat": "Working around the camera",
    "p4-about-title": "About the project",
    "p4-about-txt": "Discovering cameras, techniques, and image editing. First steps into the world of photography.",
    "p4-coll-title": "Collection Overview",
    "p4-coll-desc": "Discover more pictures:",
    "p5-title": "Design",
    "p5-cat": "Digital projects",
    "p5-about-title": "About the project",
    "p5-about-txt": "Graphic and artistic creation for album covers, digital interfaces, logos, and products.",
    "p5-coll-title": "More Projects",
    "p5-coll-desc": "Graphic variations and designs:",
    "p6-title": "Travel",
    "p6-cat": "Personal collection",
    "p6-about-title": "About the project",
    "p6-about-txt": "A visual travel journal bringing together shots taken around the globe: Canada, Spain, South Korea...",
    "p6-coll-title": "Collection Overview",
    "p6-coll-desc": "Selected pictures:",
    "about-title": "<span>About</span> me",
    "about-txt": "Currently pursuing a Master's degree in Web Cultures and Professions, and holding a Licence EVMAN as well as a DUT MMI, I have developed my creativity and my approach to new technologies. Always looking for new skills, I have constantly drawn upon my curiosity and know-how to successfully carry out my various projects. This site aims to highlight and share my work.",
    "contact-title": "Contact <span>me</span>",
    "contact-txt": "Feel free to reach out to me for any collaboration or further information regarding my work.",
    "contact-btn": "Send an email",
    "footer-rights": "&copy; 2026 Nolan R. All rights reserved.",
    "footer-legal": "<strong>Legal Notice:</strong> Hosted by GitHub Pages. This website uses generative AI as a development support tool."
  }
};

let langueActuelle = localStorage.getItem("languePortfolio") || "fr";

function appliquerTraductions() {
  document.getElementById("lang-btn").innerText = langueActuelle === "fr" ? "EN" : "FR";

  const dictionnaire = traductions[langueActuelle];

  // Responsive text : parcourt chaque clé du dictionnaire et injecte le contenu dans les éléments ciblés par leur classe
  Object.keys(dictionnaire).forEach(function (classe) {
    document.querySelectorAll("." + classe).forEach(function (element) {
      element.innerHTML = dictionnaire[classe];
    });
  });
}

document.getElementById("lang-btn").addEventListener("click", function () {
  langueActuelle = langueActuelle === "fr" ? "en" : "fr";
  localStorage.setItem("languePortfolio", langueActuelle);
  appliquerTraductions();
});

appliquerTraductions();