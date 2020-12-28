"use strict";

var header__burger = document.querySelector('.header__burger');
var header_menu = document.querySelector('.header__nav');
var back = document.querySelector('body');
var contactsBtnMobile = document.querySelector('.contacts__btn');
var contactsBtnPc = document.querySelector('.contacts-pc__btn');
var headerLinks = document.querySelectorAll('.header__link');

header__burger.onclick = function () {
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
};

function openContactsModal(e) {
  var path = e.currentTarget.getAttribute('data-path');

  if (document.documentElement.clientWidth <= 767) {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
    contactsModal.style.visibility = 'visible';
    contactsModal.style.opacity = 1;
    closeModal(path);
  } else {
    contactsModal.style.visibility = 'visible';
    contactsModal.style.opacity = 1;
    closeModal(path);
  }
}

contactsBtnMobile.addEventListener('click', openContactsModal);
contactsBtnPc.addEventListener('click', openContactsModal);
new Swiper('.detailing-slider', {
  autoheight: true,
  watchOverflow: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    }
  }
});
new Swiper('.showroom-slider', {
  autoheight: true,
  watchOverflow: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
new Swiper('.tuning-slider', {
  autoheight: true,
  watchOverflow: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var inputs = document.querySelectorAll('.input-file');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling,
      labelVal = label.querySelector('.input-file-button-text').innerText;
  input.addEventListener('change', function (e) {
    var countFiles = '';
    if (this.files && this.files.length >= 1) countFiles = this.files.length;
    if (countFiles) label.querySelector('.input-file-button-text').innerText = 'Вибрано файлів: ' + countFiles;else label.querySelector('.input-file-button-text').innerText = labelVal;
  });
});
var inputts = document.querySelectorAll('.input_file');
Array.prototype.forEach.call(inputts, function (input) {
  var label = input.nextElementSibling,
      labelVal = label.querySelector('.input_file-button-text').innerText;
  input.addEventListener('change', function (e) {
    var countFiles = '';
    if (this.files && this.files.length >= 1) countFiles = this.files.length;
    if (countFiles) label.querySelector('.input_file-button-text').innerText = 'Вибрано файлів: ' + countFiles;else label.querySelector('.input_file-button-text').innerText = labelVal;
  });
});