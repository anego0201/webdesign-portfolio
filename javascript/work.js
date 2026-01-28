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
    // Chưa đáp lên repo github
    title: "計算機",
    subtitle: "Java言語で作りました簡単計算機",
    tech: ["Java"],
    image: "./asset/work-showcase/vymongdu-icon-illus.png",
    video: "./asset/work-showcase/vymongdu-icon-illus.png",
    viewLink: "#",
  },
  {
    // Chưa đáp lên repo github
    title: "ビンゴゲーム",
    subtitle: "配列の知識を応用する、ビンゴゲームを作りました！",
    tech: ["Java"],
    image: "./asset/work-showcase/vymongdu-icon-illus.png",
    video: "./asset/work-showcase/vymongdu-icon-illus.png",
    viewLink: "#",
  },
    {
      // Chưa đáp lên repo github
    title: "カードーゲーム",
    subtitle: "appendChild、insertBefore、prepend、append といった DOM操作を勉強ように作りました。",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./asset/work-showcase/vymongdu-icon-illus.png",
    video: "./asset/work-showcase/vymongdu-icon-illus.png",
    viewLink: "#",
  },
    {
    title: "",
    subtitle: "",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "./asset/work-showcase/vymongdu-icon-illus.png",
    video: "./asset/work-showcase/vymongdu-icon-illus.png",
    viewLink: "#",
  },
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
