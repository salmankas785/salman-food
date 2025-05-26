// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar .menu');
const menuItems = document.querySelectorAll('.menu li a');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuBtn.querySelector('i').classList.toggle('active');
});

// Close menu when clicking on a menu item
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.querySelector('i').classList.remove('active');
  });
});

// Scroll Up Button
const scrollUpBtn = document.querySelector('.scroll-up-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add('show');
  } else {
    scrollUpBtn.classList.remove('show');
  }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });
  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }
  });
});