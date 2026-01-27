const projects = [
  {
    title: "歩く動物",
    subtitle: "30秒短い",
    tech: ["HTML / CSS", "JavaScript", "GSAP"],
    image: "./asset/work-showcase/歩く動物.gif",
    video: "./images/Avatar-VyMongDu.jpg",
    viewLink: "https://www.facebook.com/",
  },
  {
    title: "計算機",
    subtitle: "Simple task manager application",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./images/Avatar-VyMongDu.jpg",
    video: "./images/Avatar-VyMongDu.jpg",
    viewLink: "#",
  },
  {
    title: "WEATHER APP",
    subtitle: "Realtime weather forecast using API",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "./images/Avatar-VyMongDu.jpg",
    video: "./images/Avatar-VyMongDu.jpg",
    viewLink: "#",
  }
];

let index = 0;

// Hiển thị thông tin trên màn hình
const title = document.querySelector(".showcase-info h2");
const subtitle = document.querySelector(".showcase-info h4");
const techList = document.querySelector(".tech");
const img = document.querySelector(".showcase-media img");
const video = document.querySelector(".showcase-media video source");
const viewBtn = document.querySelector(".btn-view");

// biến số cho 2 nút bấm trước và sau
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Load project để hiển thị lên trên html
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
  document.querySelector(".showcase-media video").load();
}

// lấy event khi click vô nút trước và sau
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= projects.length) index = 0;
  loadProject(index);
})

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = projects.length - 1;
  loadProject(index);
})

// func để nav chuyển động
function navslide(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("sideNav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
};

navslide();
