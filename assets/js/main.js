// Mobile  menu 

const menuBar = document.querySelector('.menu-bar');
const menuMobile = document.querySelector('.header-bottom .navbar');
const menuClose = document.querySelector('i.menu-close');

menuBar.addEventListener('click',()=>{
    menuBar.classList.toggle('active');
    menuMobile.classList.toggle('active');
    
});

menuClose.addEventListener('click',()=>{
    menuBar.classList.toggle('active');
    menuMobile.classList.toggle('active');
});
// Mobile dropdown
let menuItem = document.querySelector('.navbar-nav li.dropdown');
let subMenu = document.querySelector('.submenu');

menuItem.addEventListener('click',()=>{
    if( menuItem.classList.contains('dropdown') ){
        subMenu.classList.toggle('mobile-dd');
    }
})
// Mobile search popup
let mobileSearchBtn = document.querySelector('#mobile-search-btn');
let mobileSearchPopup = document.querySelector('.mobile-search-popup');
let mobileSearchClose = document.querySelector('#mobile-search-close');

mobileSearchBtn.addEventListener('click',()=>{
    mobileSearchPopup.classList.add('active');
});
mobileSearchClose.addEventListener('click',()=>{
    mobileSearchPopup.classList.remove('active');
});

// Login form 

let loginPopup = document.querySelector('.login-user-popup ');
let loginPopupBtn = document.querySelector('#login-btn');
let loginPopupClose = document.querySelector('#login-popup-close');

loginPopupBtn.addEventListener('click',()=>{
    loginPopup.classList.toggle('active');
});
loginPopupClose.addEventListener('click',()=>{
    loginPopup.classList.toggle('active')
});
// Shopping cart popup

let CartPopup = document.querySelector('.cart-popup') ;
let CartPopupClose = document.querySelector('#cart-popup-close');
let CartPopupBtn = document.querySelector('#cart-btn');

CartPopupBtn.addEventListener('click',()=>{
    CartPopup.classList.toggle('active');
})
CartPopupClose.addEventListener('click',()=>{
    CartPopup.classList.toggle('active');
    console.log('hi');
})
