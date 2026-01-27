// Func changeLang này sẽ được tái sử dụng ở các file jscript khác để đổi ngôn ngữ giữa các trang
//Tesing func
function changeLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("description").textContent = data.description;
    });
}

// func để nav chuyển động
function navslide(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("sideNav");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

// mặc định
changeLang("ja");
navslide();