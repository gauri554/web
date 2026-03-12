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

// Products filter

function toggleproducts(el){

let list = el.nextElementSibling;
let arrow = el.querySelector("i");

if(list.style.display === "none"){
list.style.display = "block";
arrow.classList.replace("bi-chevron-down","bi-chevron-up");
}else{
list.style.display = "none";
arrow.classList.replace("bi-chevron-up","bi-chevron-down");
}

}

function togglemore(el){

let more = el.previousElementSibling;
let arrow = el.querySelector("i");

if(more.style.display === "none"){
more.style.display = "block";
arrow.classList.replace("bi-chevron-down","bi-chevron-up");
}else{
more.style.display = "none";
arrow.classList.replace("bi-chevron-up","bi-chevron-down");
}

}

function togglerating(el){

let list = el.nextElementSibling;
let arrow = el.querySelector("i");

if(list.style.display === "none"){
list.style.display = "block";
arrow.classList.replace("bi-chevron-down","bi-chevron-up");
}else{
list.style.display = "none";
arrow.classList.replace("bi-chevron-up","bi-chevron-down");
}

}