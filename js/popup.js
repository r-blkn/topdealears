// FIND PRICE
const findPriceBtns = document.querySelectorAll('.find-price__btn');

const findPriceModalMb = document.querySelector('.price-pop-pup');
const findPriceModalPc = document.querySelector('.price-pop-pup-pc');
const priceOrderBtn = document.querySelectorAll('.price-order__btn');

const closeBtns = document.querySelectorAll('.close-pop-pup-btn');

const mobileDetailingModal = document.querySelector('.detailing-pop-pup');
const standartDetailingModal = document.querySelector('.standart-pop-pup');
const premiumDetailingModal = document.querySelector('.premium-pop-pup');
const platinumDetailingModal = document.querySelector('.platinum-pop-pup');

const checkInBtns = document.querySelectorAll('.check-in__btn');

// підбір
const selectionBtn = document.querySelector('.selection__btn');
const selectionModal = document.querySelector('.selection-pop-pup');

// trade-in
const tradeInBtn = document.querySelector('.trade-in__btn');
const tradeInModal = document.querySelector('.trade-in-pop-pup');

// car-purchase
const carPurchaseBtn = document.querySelector('.car-purchase__btn');
const carPurchaseModal = document.querySelector('.auto-redemption-pop-pup');

// contacts modal
const contactsModal = document.querySelector('.contucts-pop-pup');

// calculator
const calcBtn = document.querySelector('.form-calc__btn');

const electro = document.querySelector('#electro');
const hybrid = document.querySelector('#hybrid');
const moto = document.querySelector('#moto');
const truck = document.querySelector('#truck');
const lehko = document.querySelector('#lehko');

const priceForm = document.querySelector('.form-calc__price');
const weigthForm = document.querySelector('.form-calc__weight');
const engineVolumeForm = document.querySelector('.form-calc__volume');
const engineVolumeFormMoto = document.querySelector('.form-calc__volume_moto');
const engineTypeForm = document.querySelector('.form-calc__type-engine');
const carAgeForm = document.querySelector('.form-calc__age-car');
const powerForm = document.querySelector('.form-calc__power');

const price = document.querySelector('#car-price');
const currency = document.querySelector('#currency');
const weigth = document.querySelector('#weight');
const engineVolume = document.querySelector('#engine-volume');
const engineVolumeMoto = document.querySelector('#engine-volume_moto');
const engineType = document.querySelector('#engine-type');
const carAge = document.querySelector('#car-age');
const power = document.querySelector('#power');

const priceClear = document.querySelector('.price_clear').innerHTML;
const privePdv = document.querySelector('.price_pdv').innerHTML;
const priceMito = document.querySelector('.price_mito').innerHTML;
const priceActziz = document.querySelector('.price_actziz').innerHTML;
const priceTotal = document.querySelector('.price_total').innerHTML;
const priceAdditional = document.querySelector('.price_additional').innerHTML;
const pricePensia = document.querySelector('.price_retired').innerHTML;





//close FindPriceModal
const closeBtn = () => {
    closeBtns.forEach((el) => {
        el.addEventListener('click', () => {
            if(document.documentElement.clientWidth <= 767) {
                findPriceModalMb.style.visibility = 'hidden';
                findPriceModalMb.style.opacity = 0;
            } else {
                findPriceModalPc.style.visibility = 'hidden';
                findPriceModalPc.style.opacity = 0;
            }
        })
    });
}
// Close DETAILING MODAL FORMS
const closeModal = path => {
    closeBtns.forEach((el) => {
        el.addEventListener('click', () => {
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
            };
        })
    });
}

// Дізнатись ціну
findPriceBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        if(document.documentElement.clientWidth <= 767) {
            findPriceModalMb.style.visibility = 'visible';
            findPriceModalMb.style.opacity = 1;
        } else {
            findPriceModalPc.style.visibility = 'visible';
            findPriceModalPc.style.opacity = 1;
        }

        // ЗАмовити в вікні дізнатись ціну
        priceOrderBtn.forEach((el) => {
            el.addEventListener('click', (e) => {
                findPriceModalMb.style.visibility = 'hidden';
            findPriceModalMb.style.opacity = 0;
    
            if(document.documentElement.clientWidth >= 767) {
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
                };
            } else {
                path = 'detailing-mobile';
                mobileDetailingModal.style.visibility = 'visible';
                mobileDetailingModal.style.opacity = 1;
            }
            
            closeModal(path);
            })
        })
    });
    
    closeBtn();
        
});

// Форми детейлінг
checkInBtns.forEach((el) => {
    
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        console.log(document.documentElement.clientWidth );
        if(document.documentElement.clientWidth >= 767) {
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
            };
        } else {
            path = 'detailing-mobile';
            mobileDetailingModal.style.visibility = 'visible';
            mobileDetailingModal.style.opacity = 1;
        }
        

        closeModal(path);
    })
});

selectionBtn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    selectionModal.style.visibility = 'visible';
    selectionModal.style.opacity = 1;

    closeModal(path);
});

tradeInBtn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    tradeInModal.style.visibility = 'visible';
    tradeInModal.style.opacity = 1;

    closeModal(path);
});

carPurchaseBtn.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    carPurchaseModal.style.visibility = 'visible';
    carPurchaseModal.style.opacity = 1;

    closeModal(path);
});



// Calculator
// let actziz = parseInt(priceActziz.innerHTML.match(/\d+/));


const calculate = (e) => {
    let currencyCoef= 1;

    let currencyType = '';

    if(currency.value === '€') {
        currencyCoef = 1;
        currencyType = '€';
    } else {
        currencyCoef = 1.2;
        currencyType = '$';
    }

    if(lehko.checked) {
    console.log('lehko checked');

    } else if (hybrid.checked) {
    console.log('hybrid checked');

    } else if (truck.checked) {
    console.log('truck checked');

    } else if (moto.checked) {
    console.log('moto checked');

    } else {
    console.log('electro checked');
        
    }

}

calcBtn.addEventListener('click', calculate);

electro.addEventListener('click', function() {
    weigthForm.style.display = 'none';
    engineVolumeForm.style.display = 'none';
    engineTypeForm.style.display = 'none';
    carAgeForm.style.display = 'none';
    powerForm.style.visibility = 'visible';
    powerForm.style.display = 'block';
    engineVolumeFormMoto.style.visibility = 'hidden'

    

});

hybrid.addEventListener('click', function() {
    weigthForm.style.display = 'none';
    engineVolumeForm.style.display = 'none';
    engineTypeForm.style.display = 'none';
    carAgeForm.style.display = 'none';
    powerForm.style.display = 'none';
    engineVolumeFormMoto.style.display = 'none';
    
    actziz = power * 1; 
});

moto.addEventListener('click', function() {
    weigthForm.style.display = 'none';
    engineVolumeForm.style.display = 'none';
    engineTypeForm.style.display = 'none';
    carAgeForm.style.display = 'block';
    powerForm.style.display = 'none';
    engineVolumeFormMoto.style.visibility = 'visible';
    engineVolumeFormMoto.style.display = 'inline-block';
});

lehko.addEventListener('click', function() {
    weigthForm.style.display = 'none';
    engineVolumeForm.style.display = 'block';
    engineTypeForm.style.display = 'block';
    carAgeForm.style.display = 'block';
    powerForm.style.display = 'none';
    engineVolumeFormMoto.style.display = 'none';
});

truck.addEventListener('click', function() {
    weigthForm.style.display = 'block';
    engineVolumeForm.style.display = 'block';
    engineTypeForm.style.display = 'block';
    carAgeForm.style.display = 'block';
    powerForm.style.display = 'none';
    engineVolumeFormMoto.style.display = 'none';
});