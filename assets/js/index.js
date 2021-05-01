
window.addEventListener('resize', function () {
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        var swiper = new Swiper('.swiper-container1', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
          });
          var swiper = new Swiper('.swiper-container2', {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
          });
    } else {
        var swiper = new Swiper('.swiper-container1', {
            slidesPerView: 4,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
          });

          var swiper = new Swiper('.swiper-container2', {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
            
          });
       
    }
}
window.onload = addRequiredClass
