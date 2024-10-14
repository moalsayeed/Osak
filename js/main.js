


$(document).ready(function () {
    $('#loading').fadeOut(1000)
    let d = new Date();

    // console.log('document', d.getMilliseconds()); 


    let aboutOffset = $('#about').offset().top;

    $(window).scroll(function () {

        let wScroll = $(window).scrollTop();

        if (wScroll > aboutOffset - 50) {
            $('#main-nav').css('cssText', 'background-color:rgba(0,0,0,0.4) !important');
            $('#btnUp').fadeIn(500)
        }
        else {
            $('#main-nav').css('cssText', 'background-color:transparent !important')
            $('#btnUp').fadeOut(500)
        }
    })
    $('#btnUp').on('click', function () {
        // $(window).scrollTop(0)
        $('html,body').animate({ scrollTop: '0px' }, 3000)

    })

    $('.nav-link[href^="#"]').click(function (e) {

        let linkHref = $(e.target).attr('href') 
        let linkOffset = $(linkHref).offset().top;

        $('html,body').animate({ scrollTop: linkOffset }, 1000) 

    });

    $('#sideBar i').click(function () {

        let wBox = $('.box').innerWidth()
        if ($('#sideBar').css('left') == '0px') {
            $('#sideBar').animate({ left: `-${wBox}px` }, 1000)
        }
        else {
            $('#sideBar').animate({ left: `0px` }, 1000)
        }

    });


    $('.img-item').on('click', function (e) {

        let img = $(e.target).attr('src');
        // console.log(img); 
        $('header').css('cssText', `background-image: url(${img})`)


    });


    let colorItem = $('.color-item');//5
    let colors = ['red', 'green', 'blue', 'teal', 'orange']
    for (let i = 0; i < colorItem.length; i++) {
        $(colorItem).eq(i).css('backgroundColor', colors[i])

    }
    $(colorItem).click(function (e) {
    
        let colorThem = $(e.target).css('backgroundColor');
 
        $(':root').css('--main-color', colorThem)
  


    })
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true
    });
    $('.skitter-large').skitter();

    particlesJS.load('particles-js', 'js/particles.json', function () {
        console.log('callback - particles.js config loaded');
    }); 

});
