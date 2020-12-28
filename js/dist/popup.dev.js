"use strict";

// FIND PRICE
var findPriceBtns = document.querySelectorAll('.find-price__btn');
var findPriceModalMb = document.querySelector('.price-pop-pup');
var findPriceModalPc = document.querySelector('.price-pop-pup-pc');
var priceOrderBtn = document.querySelectorAll('.price-order__btn');
var closeBtns = document.querySelectorAll('.close-pop-pup-btn');
var mobileDetailingModal = document.querySelector('.detailing-pop-pup');
var standartDetailingModal = document.querySelector('.standart-pop-pup');
var premiumDetailingModal = document.querySelector('.premium-pop-pup');
var platinumDetailingModal = document.querySelector('.platinum-pop-pup');
var checkInBtns = document.querySelectorAll('.check-in__btn'); // підбір

var selectionBtn = document.querySelector('.selection__btn');
var selectionModal = document.querySelector('.selection-pop-pup'); // trade-in

var tradeInBtn = document.querySelector('.trade-in__btn');
var tradeInModal = document.querySelector('.trade-in-pop-pup'); // car-purchase

var carPurchaseBtn = document.querySelector('.car-purchase__btn');
var carPurchaseModal = document.querySelector('.auto-redemption-pop-pup'); // contacts modal

var contactsModal = document.querySelector('.contucts-pop-pup'); //close FindPriceModal

var closeBtn = function closeBtn() {
  closeBtns.forEach(function (el) {
    el.addEventListener('click', function () {
      if (document.documentElement.clientWidth <= 767) {
        findPriceModalMb.style.visibility = 'hidden';
        findPriceModalMb.style.opacity = 0;
      } else {
        findPriceModalPc.style.visibility = 'hidden';
        findPriceModalPc.style.opacity = 0;
      }
    });
  });
}; // Close DETAILING MODAL FORMS


var closeModal = function closeModal(path) {
  closeBtns.forEach(function (el) {
    el.addEventListener('click', function () {
      switch (path) {
        case 'detailing-mobile':
          mobileDetailingModal.style.visibility = 'hidden';
          mobileDetailingModal.style.opacity = 0;
          break;

        case 'standart':
          standartDetailingModal.style.visibility = 'hidden';
          standartDetailingModal.style.opacity = 0;
          break;

        case 'premium':
          premiumDetailingModal.style.visibility = 'hidden';
          premiumDetailingModal.style.opacity = 0;
          break;

        case 'platinum':
          platinumDetailingModal.style.visibility = 'hidden';
          platinumDetailingModal.style.opacity = 0;
          break;

        case 'selection':
          selectionModal.style.visibility = 'hidden';
          selectionModal.style.opacity = 0;

        case 'trade-in':
          tradeInModal.style.visibility = 'hidden';
          tradeInModal.style.opacity = 0;

        case 'car-purchase':
          carPurchaseModal.style.visibility = 'hidden';
          carPurchaseModal.style.opacity = 0;

        case 'contacts':
          contactsModal.style.visibility = 'hidden';
          contactsModal.style.opacity = 0;

        default:
          break;
      }

      ;
    });
  });
}; // Дізнатись ціну


findPriceBtns.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var path = e.currentTarget.getAttribute('data-path');

    if (document.documentElement.clientWidth <= 767) {
      findPriceModalMb.style.visibility = 'visible';
      findPriceModalMb.style.opacity = 1;
    } else {
      findPriceModalPc.style.visibility = 'visible';
      findPriceModalPc.style.opacity = 1;
    } // ЗАмовити в вікні дізнатись ціну


    priceOrderBtn.forEach(function (el) {
      el.addEventListener('click', function (e) {
        findPriceModalMb.style.visibility = 'hidden';
        findPriceModalMb.style.opacity = 0;

        if (document.documentElement.clientWidth >= 767) {
          switch (path) {
            case 'standart':
              standartDetailingModal.style.visibility = 'visible';
              standartDetailingModal.style.opacity = 1;
              break;

            case 'premium':
              premiumDetailingModal.style.visibility = 'visible';
              premiumDetailingModal.style.opacity = 1;
              break;

            case 'platinum':
              platinumDetailingModal.style.visibility = 'visible';
              platinumDetailingModal.style.opacity = 1;
              break;

            default:
              break;
          }

          ;
        } else {
          path = 'detailing-mobile';
          mobileDetailingModal.style.visibility = 'visible';
          mobileDetailingModal.style.opacity = 1;
        }

        closeModal(path);
      });
    });
  });
  closeBtn();
}); // Форми детейлінг

checkInBtns.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var path = e.currentTarget.getAttribute('data-path');
    console.log(document.documentElement.clientWidth);

    if (document.documentElement.clientWidth >= 767) {
      switch (path) {
        case 'standart':
          standartDetailingModal.style.visibility = 'visible';
          standartDetailingModal.style.opacity = 1;
          break;

        case 'premium':
          premiumDetailingModal.style.visibility = 'visible';
          premiumDetailingModal.style.opacity = 1;
          break;

        case 'platinum':
          platinumDetailingModal.style.visibility = 'visible';
          platinumDetailingModal.style.opacity = 1;
          break;

        default:
          break;
      }

      ;
    } else {
      path = 'detailing-mobile';
      mobileDetailingModal.style.visibility = 'visible';
      mobileDetailingModal.style.opacity = 1;
    }

    closeModal(path);
  });
});
selectionBtn.addEventListener('click', function (e) {
  var path = e.currentTarget.getAttribute('data-path');
  selectionModal.style.visibility = 'visible';
  selectionModal.style.opacity = 1;
  closeModal(path);
});
tradeInBtn.addEventListener('click', function (e) {
  var path = e.currentTarget.getAttribute('data-path');
  tradeInModal.style.visibility = 'visible';
  tradeInModal.style.opacity = 1;
  closeModal(path);
});
carPurchaseBtn.addEventListener('click', function (e) {
  var path = e.currentTarget.getAttribute('data-path');
  carPurchaseModal.style.visibility = 'visible';
  carPurchaseModal.style.opacity = 1;
  closeModal(path);
}); // Calculator