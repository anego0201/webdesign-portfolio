// Func changeLang này sẽ được tái sử dụng ở các file jscript khác để đổi ngôn ngữ giữa các trang
function changeLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("description").textContent = data.description;
    });
}

// mặc định
changeLang("ja");