{/* <nav class="header-top__navbar">
<ul class="header-top__navbar-list"> */}
const navBar =  document.querySelector('.header-top__navbar');
const navList = document.querySelector('.header-top__navbar-list');
const menuBtn = document.querySelector('.menu-btn');
menuBtn.onclick = function(){
    navBar.classList.toggle('header-top__navbar--active');
    navList.classList.toggle('header-top__navbar-list--active');
}
navBar.onclick = function(){
    navBar.classList.remove('header-top__navbar--active');
    navList.classList.remove('header-top__navbar-list--active');
}