const projects = [
  {
    title: "Dynamic Web Site",
    description: "A dynamic e-commerce website built with PHP and MySQL.",
    image: "pic/image1.png",
    technologies: ["PHP","MySQL"],
    github: "https://github.com/touzanisalmane-hash/shopzone",
    download: ""
  },
  {
    title: "Tkinter Calculator",
    description: "A simple calculator built with Python-Tkinter.",
    image: "pic/image2.png",
    technologies: ["Python"],
    github: "https://github.com/touzanisalmane-hash/calculator_tkinter",
    download: "https://github.com/touzanisalmane-hash/calculator_tkinter/releases/tag/v1.0"
  },
  {
    title: "PyQt Calculator",
    description: "A simple calculator built with Python-PyQt.",
    image: "pic/image3.png",
    technologies: ["Python"],
    github: "https://github.com/touzanisalmane-hash/calculator_pyqt",
    download: "https://github.com/touzanisalmane-hash/calculator_pyqt/releases/tag/v1.0"
  },
  {
    title: "Antivirus",
    description: "A desktop antivirus application developed with Python.",
    image: "pic/image4.png",
    technologies: ["Python"],
    github: "https://github.com/touzanisalmane-hash/Antivirus",
    download: "https://github.com/touzanisalmane-hash/Antivirus/releases/tag/v1.0"
  },
  {
    title: "File Cleaner",
    description: "A simple desktop file cleaner developed with Python.",
    image: "pic/image5.png",
    technologies: ["Python"],
    github: "https://github.com/touzanisalmane-hash/File-Cleaner",
    download: "https://github.com/touzanisalmane-hash/File-Cleaner/releases/tag/v1.0"
  }
  {
    title: "Link Shortener",
    description: "A simple desktop link shortener developed with Python.",
    image: "pic/image5.png",
    technologies: ["Python"],
    github: "https://github.com/touzanisalmane-hash/link_shortener",
    download: "https://github.com/touzanisalmane-hash/link_shortener/releases/tag/v1.0"
  }
];



function createProjectCard(project) {
  // Turn the technologies array into a list of little tag elements
  const techTags = project.technologies
    .map((tech) => `<span class="tech-tag">${tech}</span>`)
    .join("");

  // Only show a "Live Demo" button if a demo link was provided
  const downloadButton = project.download
    ? `<a href="${project.download}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--small">Live Download</a>`
    : "";

  return `
    <div class="project-card fade-in">
      <img class="project-card__image" src="${project.image}" alt="${project.title} screenshot" loading="lazy" />
      <div class="project-card__body">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__tech">${techTags}</div>
        <div class="project-card__links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost btn--small">GitHub</a>
          ${downloadButton}
        </div>
      </div>
    </div>
  `;
}


function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map(createProjectCard).join("");
}

renderProjects();



const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close the mobile menu whenever a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}



const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.15 } 
);


document.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));



const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width;
        skillObserver.unobserve(fill);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".skill-bar__fill").forEach((fill) => skillObserver.observe(fill));



const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

if (contactForm && contactSuccess) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    contactSuccess.classList.add("visible");
    contactForm.reset();
  });
}
