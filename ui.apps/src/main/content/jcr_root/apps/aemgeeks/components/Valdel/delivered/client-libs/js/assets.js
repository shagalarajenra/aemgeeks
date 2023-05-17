var window_width = 0;
var window_height = 0;
var banner_width = 1927;
var banner_height = 2090;
var menuEasing = [500, 20];
var menuInSpeed = 1200;
var menuOutSpeed = 800;
var mainMenuEasing = 'ease-out';
var mainMenuHeight = 200;

// common scripts //
var init = function () {
    trace('DOM init');

    // check if viewed in touch based devices //
    if (!Modernizr.touch) {
        var isTouch = false;
    }

    // re-arrange content //
    reArrangeContent();

}

var reArrangeContent = function () {
    // window inner width & height //
    window_width = $(window).innerWidth();
    window_height = $(window).innerHeight();

    // calc the banner height //
    banner_height = Number((window_width * banner_height) / banner_width);
    banner_width = window_width;

    // for ref use only //
    $('#dispcon').html(window_width + 'x' + window_height);

    // hide the menu on resize //
    $('.hassubs .submenu, .hassubs .dropmenu').hide();

    // call page scroll //
    $(window).trigger('scroll');

    // map height //
    $('#map-canvas').height($('.ovmap').height());
    $('#gmap iframe').height($('#gmap').height());

    // navigation hilight //
//    hoverNav();

}

// trace script //
var trace = function (parm) {
    if (window.console) {
        console.log(parm);
    }
}



// global vars //
var galInst;


// *************************************** app ready *************************************** //

$(function () {

    // resize event handler //
    $(window).resize(function () {
        reArrangeContent();
    });

    // window load call to wait for images to load //
    $(window).load(function () {
        // window content loaded //
        trace('page loaded');
        $('#preldr').fadeOut(200);

// scroll to map //
       if (window.location.hash) {
           $('html, body').animate({
               scrollTop: Number($(window.location.hash).offset().top - 130)
           }, 1000);
       }
        $(window).trigger('scroll');
    });

    // scroll to section //
    $('.hitbtn').click(function () {
        var stOff = $($(this).attr('href')).offset().top;
        $('.mmolay').trigger('click');
        $('html, body').animate({
            scrollTop: stOff
        }, 2000);
    });

    // menu hover //
        $('#head-nav > li').hover(
            function () {
                $('.submenu', this).stop(true).slideDown();
            },
            function () {
                $('.submenu', this).stop(true).slideUp();
            }
        );
    // rollover animation for main navig //
    $('.smnu > li.hasub1').hover(
        function () {
            $('.submenu1', $(this)).stop(true).slideDown();
        },
        function () {
            $('.submenu1', $(this)).stop(true).slideUp();
        }
    );
    
     $('.hasmsubs > a').on('click', function (e) {
        e.preventDefault();
        $('.msubmenu', $(this).parent()).slideToggle();
        $(this).parent().toggleClass("subopn");
    });
    
    $('.hasmsubs1 > a').on('click', function (e) {
        e.preventDefault();
        $('.msubmenu1', $(this).parent()).slideToggle();
        $(this).parent().toggleClass("subopn1");
    });
    
     $("#mondjad a").click(function () {
        $(".actv").removeClass("actv");
        $(this).addClass('actv');
    });

    $("#mondjas3 > li > a").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("sctd");
    });

    $('.hasmsubss3 > a').on('click', function (e) {
        e.preventDefault();
        $('#mondjad3', $(this).parent()).slideToggle();
    });
          
    $('#mondjad3 li a').click(function (e) {
        e.preventDefault();
        $(' #mondjad3').slideUp();
        $("#mondjas3 li.hasmsubss3.sctd").removeClass("sctd");
    });

    $('.a3').click(function () {
        $('#link3').text($(this).text());
    });
    
     $("#mondjas5 > li > a").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("sctd");
    });

    $('.hasmsubss5 > a').on('click', function (e) {
        e.preventDefault();
        $('#mondjad5', $(this).parent()).slideToggle();
    });
          
    $('#mondjad5 li a').click(function (e) {
        $(' #mondjad5').slideUp();
        $("#mondjas5 li.hasmsubss5.sctd").removeClass("sctd");
    });

    $('.a5').click(function () {
        $('#link5').text($(this).text());
    });
    
     $("#mondjas6 > li > a").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("sctd");
    });

    $('.hasmsubss6 > a').on('click', function (e) {
        e.preventDefault();
        $('#mondjad6', $(this).parent()).slideToggle();
    });
          
    $('#mondjad6 li a').click(function (e) {
        $(' #mondjad6').slideUp();
        $("#mondjas6 li.hasmsubss6.sctd").removeClass("sctd");
    });

    $('.a6').click(function () {
        $('#link6').text($(this).text());
    });
    
     $("#mondjas4 > li > a").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("sctd3");
    });

    $('.hasmsubss4 > a').on('click', function (e) {
        e.preventDefault();
        $('#mondjad4', $(this).parent()).slideToggle(); 
    });
          
    $('#mondjad4 li a').click(function (e) {
        e.preventDefault();
        $(' #mondjad4').slideUp();
        $("#mondjas4 li.hasmsubss4.sctd3").removeClass("sctd3");
    });

    $('.a4').click(function () {
        $('#link4').text($(this).text());
    });

$('.mobmlst > a').on('click', function (e) {
        e.preventDefault();
        $('ul', $(this).parent()).slideToggle();
    });

$('.mobmlst li a').on('click', function (e) {
        e.preventDefault();
	$('.mobmlstxt').text($(this).text());
        $('.mobmlst ul').slideUp();
    });

    // rollover animation for mobile navig //
    $('.mnubtn a').on('click', function (e) {
        e.preventDefault();
        $('.main').toggleClass('mobopen');
        $(window).scrollTop(0);
        $('.opts').toggleClass('opts-open');
        $('#header').toggleClass('mobopens');
        $('.mnubtn a').toggleClass('opened');
        $('.mmolay').fadeToggle(400);
    });

    // mobile menu overlay //
    $('.mmolay').on('click', function (e) {
        e.preventDefault();
        $('.mmolay').fadeOut(400);
        $('.opts').removeClass('opts-open');
        $('#header').removeClass('mobopens');
        $('.mnubtn a').removeClass('opened');
        $('.main').removeClass('mobopen');
    });



    // init app on page load //
    init();

    // sticky menu //
    $(window).scroll(function () {
        // sticky header //
       

        if ($(this).scrollTop() > 16) {
            $('#header').addClass('shead');
            $('#content').addClass('thead');
        } else {
            $('#header').removeClass('shead');
            $('#content').removeClass('thead');
        }
        
        // sticky scroll section //
        if ($(this).scrollTop() > (($('#header').height()) + ($('#gas').height()) + ($('.vcntnrs').height())) - 58) {
            $('.abtprnt').addClass('tsthedr');
        } else {
            $('.abtprnt').removeClass('tsthedr');

        }
        
        if ($(this).scrollTop() > (($('#header').height()) + ($('#gas').height())) - 58) {
            $('.relprnt').addClass('tsthedrs');
        } else {
            $('.relprnt').removeClass('tsthedrs');

        }
        
        
          if ($(this).scrollTop() > (($('#header').height()) )) {
            $('#ovrbanns').removeClass('flows');
        } else {
            $('#ovrbanns').addClass('flows');

        }
   
       

        if (banner_height > window_height) {
            if ($(this).scrollTop() > ($('#ovrbann').height() - window_height)) {
                $('#ovrbann').removeClass('flow');
            } else {
                $('#ovrbann').addClass('flow');
            }
        } else {
            $('#ovrbann').removeClass('flow');
        }

    });

    $(window).trigger('scroll');
   
     // scroll to map //
    $('.conloc').click(function () {
        var stOff = Number($($(this).attr('href')).offset().top) - ($('#header').height() + 40);
        //        $('.mmolay').trigger('click');
        $('html, body').animate({
            scrollTop: stOff
        }, 2000);
    });
$('.conlocn').click(function () {
        var stOff = Number($($(this).attr('href')).offset().top) - (($('#header').height()) - ($('#gas').height()) - ($('.vcntnrs').height()));
        //        $('.mmolay').trigger('click');
        $('html, body').animate({
            scrollTop: stOff
        }, 2000);
    });
    
    $('.conloc3').click(function () {
        var stOff = Number($($(this).attr('href')).offset().top) - ($('#header').height() + 45);
        //        $('.mmolay').trigger('click');
        $('html, body').animate({
            scrollTop: stOff
        }, 2000);
    });
    
       // scroll to map //
    $('.conlocsd').click(function () {
        var stOff = Number($($(this).attr('href')).offset().top) - ($('#header').height() + 90) ;
        //        $('.mmolay').trigger('click');
        $('html, body').animate({
            scrollTop: stOff
        }, 2000);
    });
    
      // scroll to map //
    $('.conlocs').click(function () {
        var stOff = Number($($(this).attr('href')).offset().top) - ($('#header').height() + 35) ;
        //        $('.mmolay').trigger('click');
        $('html, body').animate({
            scrollTop: stOff
        }, 2000);
    });

// scroll to top //
    $('.totop a').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
    
    $('.tobtm a').click(function () {
       var $target = $('html,body'); 
    $target.animate({scrollTop: $target.height()}, 2000);
    });

});