let navLinks = document.querySelectorAll('.nav__item-link');

function removeClasses(items, c){
    for (let item of items){
        item.classList.remove(c)
    }
}

for (let link of navLinks){
    link.addEventListener('click', function(evt){
        removeClasses(navLinks, 'nav__item-link--active')
        link.classList.add('nav__item-link--active');
    });
}

//slider

var sliderInput = document.querySelector('.slider__input');

if (sliderInput){
   var imgBefore = document.querySelector('.example__img--before');
    var imgAfter = document.querySelector('.example__img--after');
    var beforeBtn = document.querySelector('.slider__btn--before');
    var afterBtn = document.querySelector('.slider__btn--after'); 

    beforeBtn.addEventListener('click', function(){
        sliderInput.value = 1;
        imgBefore.style.width = 100 + '%';
        imgAfter.style.width = 0 + '%';
    });


    afterBtn.addEventListener('click', function(){
        sliderInput.value = 100;
        imgAfter.style.width = 100 + '%';
        imgBefore.style.width = 0 + '%';
    });

    sliderInput.addEventListener('input', function(){
        imgAfter.style.width = sliderInput.value + '%';
        imgBefore.style.width = (100 - sliderInput.value) + '%';
    })
}

var map;

function initMap() {

    var coordinates = {lat: 59.93881322008863, lng: 30.323133229433207},
    
        map = new google.maps.Map(document.querySelector('.map__iframe'), {
            center: coordinates,
            zoom: 16
        });

         marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: '../images/map-cursor.png'
        });
}

// menu btn

var menuBtn = document.querySelector('.nav-btn');
var headerTop = document.querySelector('.header__top');


menuBtn.addEventListener('click', function(){
    headerTop.classList.toggle('header__top--active');
})




