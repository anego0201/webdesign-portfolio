const projects = [
 {
   title: "Portfolio Website",
   desc: "Personal portfolio with cinematic UI",
   img: "preview.jpg",
   video: "preview.mp4",
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


function navslide(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("sideNav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
}
navslide();
function updateProject() {
 const p = projects[index];
 document.querySelector(".project-info h2").innerText = p.title;
 document.querySelector(".desc").innerText = p.desc;
 document.querySelector(".project-media img").src = p.img;
 document.querySelector(".project-media video source").src = p.video;
}
