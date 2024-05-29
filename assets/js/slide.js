$('.box-testimonials').slick({    
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows:true,
    dots:true,
    responsive: [
        {
          breakpoint: 576,
            settings: {
            arrows:false,
          },
        },
    ]
})
$('.recent-post').slick({    
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows:false,
    dots:true,
    responsive: [
        {
          breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
          },
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
          },
        },
    ]
})
// $('.imgs-album').slick({    
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     infinite: false,
//     autoSlidesToShow: true,
//     arrows:true,
//     dots:true
// })
// var swiper = new swiper(".our-album", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
// });