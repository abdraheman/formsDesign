try {
    let size = function(){
        
        $('.floor .box-content').mouseover(function(){
            let h= $(this).find('.desc-show').innerHeight();
            if(window.innerWidth > 768)
                $(this).find('.content').css('height',`${145 + h}px`)
            // else {
            //     $(this).find('.content').css('height',`${100 + h}px`)
            // }
        });
        $('.floor .box-content').mouseleave(function(){
            if(window.innerWidth > 768)
            $(this).find('.content').css('height','145px')
            // else{
            //     $(this).find('.content').css('height','100px')
            // }
        });
    }
    console.log(window.innerWidth)
    $(window).resize(size);
    size();
} catch (error) {
    // console.log('You have entered a different page.')
}


try {
    let source = $('.video-player').prop('src')
$('.each-video').click(function(){
    $('header').addClass('ftr-blur')
    $('footer').addClass('ftr-blur')
    $('.hero').addClass('ftr-blur')
    $('.f-contact').addClass('ftr-blur')
    $('.all-vc').addClass('ftr-blur')
    $('.video-active').addClass('visible opacity-100');
    $('.video-player').prop('autoplay', true);
    $('.video-player').prop('src', source);
});

$('.close-video').click(function(){
    $('.video-player').prop('autoplay', false);
    $('.video-active').removeClass('visible opacity-100');
    $('.video-player').prop('muted', true);
    $('.video-player').prop('src', '');
    $('header').removeClass('ftr-blur')
    $('footer').removeClass('ftr-blur')
    $('.hero').removeClass('ftr-blur')
    $('.all-vc').removeClass('ftr-blur')
    $('.f-contact').removeClass('ftr-blur')

});
} catch (error) {}

try {
    $('.view-album').click(function(){
        $('.album').addClass('visible opacity-100');
    })
    $('.close-album').click(function(){
        $('.album').removeClass('visible opacity-100');
    })
} catch (error) {
    
}

let h_hero = $('.hero').innerHeight();
let footer = $('footer').innerHeight();
$(window).scroll(function(){
 
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    if (st > h_hero){
        $('.f-contact').addClass('show-contact')
    }else{
        $('.f-contact').removeClass('show-contact')
    }
})

let h = document.documentElement;
let st = h.scrollTop || document.body.scrollTop;
if (st > h_hero){
    $('.f-contact').addClass('show-contact')
}else{
    $('.f-contact').removeClass('show-contact')
}


$('.open-menu').click(function(){
    $('.head-mobile').addClass('show-mob')
    $('body').addClass('overflow-hidden')
})
$('.close-nav').click(function(){
    $('.head-mobile').removeClass('show-mob')
    $('body').removeClass('overflow-hidden')
})
$('.fd-cta').click(function(){
    $('.head-mobile').removeClass('show-mob')
    $('body').removeClass('overflow-hidden')
})
