// visualizer
const frameCount = 118;
let currentFrame = 1;
const container = document.getElementById("visualizer");

const frames = [];
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `assets/visualizer/Timeline 1_${String(i).padStart(4, "0")}.png`;
    frames.push(img);
}

function playSequence() {
    setInterval(() => {
    container.style.backgroundImage = `url(${frames[currentFrame - 1].src})`;
    currentFrame++;
    if (currentFrame > frameCount) {
        currentFrame = 1;
    }
    }, 36);
}

window.addEventListener("load", playSequence);

//Intro
window.addEventListener("load", () => {
const intro = document.getElementById("glitch-intro");

setTimeout(() => {
    intro.style.opacity = 0;

    setTimeout(() => intro.remove(), 800);}, 100);
});

//Panning
const wrapper = document.querySelector('.scene-wrapper');
const zoom = 1.05;

document.addEventListener('mousemove', (e) => {
if (window.innerWidth / window.innerHeight > 1.6) {
    const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;

    const maxTranslateX = (zoom - 1) * 1920 / 2;
    const maxTranslateY = (zoom - 1) * 1080 / 2;

    const translateX = -xPercent * maxTranslateX;
    const translateY = -yPercent * maxTranslateY;

    wrapper.style.transform = `scale(${zoom}) translate(${translateX}px, ${translateY}px)`;
} else {
    wrapper.style.transform = 'scale(1) translate(0,0)';
}
});


//Buttons
const mappings = [
{ btn: 'anim-btn', img: 'beanbag' },
{ btn: 'projects-btn', img: 'desk' },
{ btn: 'about-btn', img: 'bookshelf' },
{ btn: 'songs-btn', img: 'speaker' },
{ btn: 'skills-btn', img: 'skateboard' },
{ btn: 'linkedin-btn', img: 'linkedin' },
{ btn: 'github-btn', img: 'github' },
{ btn: 'resume-btn', img: 'resume' },
];

mappings.forEach(({ btn, img }) => {
    const button = document.getElementById(btn);
    const image = document.querySelector(`.${img}`);

    button.addEventListener('mouseenter', () => image.classList.add('glow'));
    button.addEventListener('mouseleave', () => image.classList.remove('glow'));
});


document.getElementById("linkedin-btn").onclick = () => window.open("https://www.linkedin.com/in/henryyjiang/", "_blank");
document.getElementById("github-btn").onclick = () => window.open("https://github.com/henryyjiang", "_blank");
document.getElementById("anim-btn").onclick = () => window.open("https://www.tiktok.com/@atrxiy?is_from_webapp=1&sender_device=pc", "_blank");
document.getElementById("resume-btn").onclick = () => window.open("resume.pdf", "_blank");
    
const player = document.getElementById("spotify-player");

document.getElementById("songs-btn").onclick = () => {
    player.classList.toggle("visible");
};





//Window
function openOverlay(title, content) {
      const overlay = document.getElementById('overlay-window');

      overlay.classList.remove('hidden');
      setTimeout(() => overlay.classList.add('active'), 10);
    }

function closeOverlay() {
    const overlay = document.getElementById('overlay-window');
    overlay.classList.remove('active');
    setTimeout(() => overlay.classList.add('hidden'), 10);
}

document.getElementById("projects-btn").addEventListener("click", () => {
  openOverlay();

  setTimeout(() => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
});

document.getElementById("skills-btn").addEventListener("click", () => {
  openOverlay();

  setTimeout(() => {
    const skillsSection = document.getElementById("skills-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
});

document.getElementById("about-btn").addEventListener("click", () => {
  openOverlay();

  setTimeout(() => {
    const skillsSection = document.getElementById("about-section");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 300);
});

document.getElementById("close-btn").onclick = () => closeOverlay();

document.getElementById('overlay-window').addEventListener('click', (e) => {
const content = document.getElementById('window');
    if (!content.contains(e.target)) {
    closeOverlay();
    }
});


//overlay bg
const overlay = document.getElementById('overlay-window');
const images = [
  "assets/screenie1.png",
  "assets/screenie2.png",
  "assets/screenie3.png"
];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  overlay.style.setProperty('--overlay-bg', `url('${images[current]}')`);
}, 3000);