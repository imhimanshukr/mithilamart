// Menu Button JS
let manuBtn = document.getElementById('menu-btn');
manuBtn.onclick = ()=>{
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.shoping-cart').classList.remove('active');
    document.querySelector('.login-form').classList.remove('active')
}
// Search Button JS
let searchBtn = document.getElementById('search-btn');
searchBtn.onclick = ()=>{
    document.querySelector('.search-form').classList.toggle('active');
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.shoping-cart').classList.remove('active');
    document.querySelector('.login-form').classList.remove('active')
}
// Cart Button JS
let cartBtn = document.getElementById('cart-btn');
cartBtn.onclick = ()=>{
    document.querySelector('.shoping-cart').classList.toggle('active');
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.login-form').classList.remove('active')
}
// Search Button JS
let loginBtn = document.getElementById('login-btn');
loginBtn.onclick = ()=>{
    document.querySelector('.login-form').classList.toggle('active');
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.shoping-cart').classList.remove('active');
}

window.onscroll = ()=>{
    document.querySelector('.navbar').classList.remove('active');
    document.querySelector('.search-form').classList.remove('active');
    document.querySelector('.shoping-cart').classList.remove('active');
    document.querySelector('.login-form').classList.remove('active')
}

// Sweeper Slider
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768:{
          slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768:{
          slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });