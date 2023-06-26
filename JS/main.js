
// Header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 16) {
        nav.classList.add("header-scrolled");
    }else {
        nav.classList.remove("header-scrolled");
    }
}

// TO hide the collapsed navbar after clicking and opening of any of the option.
let navLinks = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLinks.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
