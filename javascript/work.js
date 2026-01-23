const projects = [
 {
   title: "歩き動物",
   desc: "Personal portfolio with cinematic UI",
   img: "Avatar-VyMongDu.jpg",
   video: "./asset/video/251044-歩き動物.mp4",
   link: "#"
 },
 {
   title: "Social Media Campaign",
   desc: "Creative content & analytics dashboard",
   img: "preview2.jpg",
   video: "preview2.mp4",
   link: "#"
 }
];

// Project-card Flipping func
let index = 0;
const card = document.querySelector(".project-card");
document.getElementById("next").onclick = () => flip(1);
document.getElementById("prev").onclick = () => flip(-1);
function flip(dir) {
 card.style.transform = `rotateY(${dir * 90}deg)`;
 setTimeout(() => {
   index = (index + dir + projects.length) % projects.length;
   updateProject();
   card.style.transform = "rotateY(0deg)";
 }, 300);
}

// Nav-bar open and close func
function navslide(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("sideNav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// Func để update thông tin dự án lên trên trang.
function updateProject() {
 const p = projects[index];
//  Đây sẽ vô class project info tag H2 để lấy tên và hiện lên
 document.querySelector(".project-info h2").innerText = p.title;

//  Đây sẽ vô class desc (description) để lấy thông tin cơ bản của dự án
 document.querySelector(".desc").innerText = p.desc;

//  Đây sẽ vô class project-media tag img để lấy hình ảnh
 document.querySelector(".project-media img").src = p.img;

//  Đây sẽ vô class project-media để hiện video nếu không có hình ảnh
 document.querySelector(".project-media video source").src = p.video;

  if (p.video) {
    img.style.display = "none";
    video.style.display = "block";
    source.src = p.video;
    video.load();
  } else {
    video.style.display = "none";
    img.style.display = "block";
    img.src = p.img;
  }
}
navslide();
updateProject()
