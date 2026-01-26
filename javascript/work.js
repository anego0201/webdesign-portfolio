const projects = [
  {
    title: "WORK SHOWCASE",
    subtitle: "Personal portfolio with dark luxury theme",
    tech: ["HTML / CSS", "JavaScript", "GSAP"],
    image: "preview.jpg",
    video: "preview.mp4",
    viewLink: "#",
    sourceLink: "#"
  },
  {
    title: "TODO APP",
    subtitle: "Simple task manager application",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "preview2.jpg",
    video: "preview2.mp4",
    viewLink: "#",
    sourceLink: "#"
  },
  {
    title: "WEATHER APP",
    subtitle: "Realtime weather forecast using API",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "preview3.jpg",
    video: "preview3.mp4",
    viewLink: "#",
    sourceLink: "#"
  }
];

let index = 0;

const title = document.querySelector(".showcase-info h2");
const subtitle = document.querySelector(".showcase-info h4");
const techList = document.querySelector(".tech");
const img = document.querySelector(".showcase-media img");
const video = document.querySelector(".showcase-media video source");
const viewBtn = document.querySelector(".btn");
const sourceBtn = document.querySelector(".btn.ghost");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function loadProject(i) {
  const p = projects[i];

  title.textContent = p.title;
  subtitle.textContent = p.subtitle;

  techList.innerHTML = "";
  p.tech.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    techList.appendChild(li);
  });

  img.src = p.image;
  video.src = p.video;

  viewBtn.href = p.viewLink;
  sourceBtn.href = p.sourceLink;

  document.querySelector(".showcase-media video").load();
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= projects.length) index = 0;
  loadProject(index);
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = projects.length - 1;
  loadProject(index);
});

loadProject(index);
