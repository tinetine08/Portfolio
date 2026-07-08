// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// PERSONAL DETAILS
// ===============================

const personalDetails = [
    { label: "Name", value: "Christine Mae Nacario" },
    { label: "Age", value: "21 Years Old" },
    { label: "Gender", value: "Female" },
    { label: "Nationality", value: "Filipino" },
    { label: "Location", value: "Philippines" }
];

const personalContainer = document.getElementById("personal-details");

personalDetails.forEach(detail => {

    const p = document.createElement("p");

    p.innerHTML = `<strong>${detail.label}:</strong> ${detail.value}`;

    personalContainer.appendChild(p);

});


// ===============================
// EDUCATION
// ===============================

const education = [

    {
        label: "Degree",
        value: "Bachelor of Science in Information Technology"
    },

    {
        label: "Year Level",
        value: "3rd Year College"
    },

    {
        label: "School",
        value: "Your School Name"
    }

];

const educationContainer = document.getElementById("education");

education.forEach(item => {

    const p = document.createElement("p");

    p.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;

    educationContainer.appendChild(p);

});


// ===============================
// ACHIEVEMENTS
// ===============================

const achievements = [

    "Dean's Lister",

    "Completed Responsive Portfolio Website",

    "Participated in Programming Activities",

    "Completed Arduino Projects",

    "Active IT Student"

];

const achievementContainer = document.getElementById("achievements");

achievements.forEach(item => {

    const p = document.createElement("p");

    p.innerHTML = `🏆 ${item}`;

    achievementContainer.appendChild(p);

});


// ===============================
// PROJECTS & HOBBIES
// ===============================

const projects = [

    {
        icon: "fa-solid fa-laptop-code",
        title: "Portfolio Website",
        description:
            "Modern responsive portfolio built using HTML, CSS and JavaScript."
    },

    {
        icon: "fa-solid fa-globe",
        title: "Travel Website",
        description:
            "Responsive tourism website with modern UI and animations."
    },

    {
        icon: "fa-solid fa-microchip",
        title: "Arduino Projects",
        description:
            "LED animations, heartbeat lights and running lights using Arduino."
    },

    {
        icon: "fa-solid fa-palette",
        title: "UI / UX Design",
        description:
            "Creating attractive and user-friendly website interfaces."
    },

    {
        icon: "fa-solid fa-camera",
        title: "Photography",
        description:
            "Enjoy taking cinematic and creative photographs."
    },

    {
        icon: "fa-solid fa-book",
        title: "Learning",
        description:
            "Continuously learning new programming languages and technologies."
    }

];

const projectContainer = document.getElementById("projects-container");

projects.forEach(project => {

    const card = document.createElement("div");

    card.className = "project-card";

    card.innerHTML = `

        <i class="${project.icon}"></i>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

    `;

    projectContainer.appendChild(card);

});


// ===============================
// SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(section => {

    section.classList.add("fade");

    observer.observe(section);

});


// ===============================
// BACK TO TOP BUTTON
// ===============================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.opacity = "1";
        scrollBtn.style.pointerEvents = "auto";

    } else {

        scrollBtn.style.opacity = "0";
        scrollBtn.style.pointerEvents = "none";

    }

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const year = new Date().getFullYear();

const copyright = document.getElementById("copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${year} Christine Mae Nacario | Modern Cinematic Portfolio`;

}