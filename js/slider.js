
$(document).ready(function(){
   $('.slider__body').slick({
     dots: true,
     arrow: false,
     slidestoShow:1,
     autoplaySpeed: 3000,
     nextArrow:'<button type="button" class="slick-next"></button>',
     prevArrow:'<button type="button" class="slick-prev"></button>',
     responsive:[{
       breakpoints:768,
       settings: {}
     }]
   });
 });
       