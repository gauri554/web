//Top scroll button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


//mission tabs
document.querySelectorAll(".mission-tabs .tab").forEach(tab => {

tab.addEventListener("click", function(){

document.querySelectorAll(".mission-tabs .tab")
.forEach(t => t.classList.remove("active"));

this.classList.add("active");

let tabId = this.getAttribute("data-tab");

document.querySelectorAll(".mission-tab-content")
.forEach(content => content.classList.remove("active"));

document.getElementById(tabId).classList.add("active");

});

});

