      <script>
        window.sr = new scrollReveal();
    </script>

 
<!-- <script type="text/javascript"> $('.scrollmm').slimscroll({ railVisible: true, railBorderRadius: 0 }); </script> -->
<script>
      $(function () {

            // home slider //
           /* $('.homsld').cycle({
                log: false,
                timeout: 2000,
                speed: 2000,
                easing: 'easeOutCirc',
                swipe: true,
                fx: 'none',
                slides: '>div',
                pager: '#banpgr'

            }).on('cycle-before', function (event, opts) {
                $('.sld').removeClass('prevsld');
                $(opts.slides[opts.currSlide]).addClass('prevsld');
                //                console.log($(opts.slides[opts.nextSlide]))
                $(opts.slides[opts.nextSlide]).stop(true, true).css('left', '100%').velocity({
                    left: [0, 'easeOutQuad']
                }, {
                    queue: false,
                    duration: 2000
                });
                var totSlds = opts.slideCount;
                var curSlde = opts.nextSlide;
                var nxtSlde = curSlde + 1;
                var nxt2nxtSlde = nxtSlde + 1;

                if (curSlde == (totSlds - 2)) {
                    nxt2nxtSlde = 1;
                }
                if (curSlde == (totSlds - 1)) {
                    nxtSlde = 0;
                    nxt2nxtSlde = 1;
                }

                $('.sld').removeClass('cslide').removeClass('nslide').removeClass('n2nslide');

                $(opts.slides[curSlde]).addClass('cslide');
                $(opts.slides[nxtSlde]).addClass('nslide');
                $(opts.slides[nxt2nxtSlde]).addClass('n2nslide');

            });*/

          $('.homsld').cycle({
               fx: 'fade',
               log: false,
               timeout: 4000,
               speed: 2000,
               easing: 'easeOutCirc',
               swipe: true,
               slides: '>div',
               pager: '#banpgr'
            }).on('cycle-before', function (event, opts) { 
               
           }).on('cycle-after', function (event, opts) {
               
           });
         

            // play n pause //
            $('a.playpause').click(function (e) {
                e.preventDefault();
                var slideshow = $('.homsld');
                if (slideshow.is('.cycle-paused')) {
                    slideshow.cycle('resume');
                    $(this).removeClass('paused');
                } else {
                    slideshow.cycle('pause');
                    $(this).addClass('paused');
                }
            });


 $('.homsld1').cycle({
               fx: 'fade',
               log: false,
               timeout: 2000,
               speed: 2000,
               easing: 'easeOutCirc',
               swipe: true,
               slides: '>div',
               pager: '#banpgr1'
            }).on('cycle-before', function (event, opts) {
               
           }).on('cycle-after', function (event, opts) {
               
           });
         

            // play n pause //
            $('a.playpause1').click(function (e) {
                e.preventDefault();
                var slideshow = $('.homsld1');
                if (slideshow.is('.cycle-paused')) {
                    slideshow.cycle('resume');
                    $(this).removeClass('paused');
                } else {
                    slideshow.cycle('pause');
                    $(this).addClass('paused');
                }
            });
          
           $(".valuesld").owlCarousel({
        timeout: 0,
        navigation: true,
        allowWrap: true,
        margin: 15,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
          
    $("#mondjad a").click(function () {
        $(".actv").removeClass("actv");
        $(this).addClass('actv');
    });

    $("#mondjas > li > a").click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("sctd");
    });

    $('.hasmsubss > a').on('click', function (e) {
        e.preventDefault();
        $('#mondjad', $(this).parent()).slideToggle();
    });
          
    $('.hasmsubss1 > a').on('click', function (e) {
    e.preventDefault();
    $('#mondjad1', $(this).parent()).slideToggle();
    });
          
    $('#mondjad li a').click(function (e) {
        e.preventDefault();
        $(' #mondjad').slideUp();
        $("#mondjas li.hasmsubss.sctd").removeClass("sctd");
    });

    $('.a1').click(function () {
        $('#link1').text($(this).text());
    });
          
     $('.a2').click(function () {
     $('#link2').text($(this).text());
    });
     
          
        $('.study').cycle({
        fx: 'fade',
        log: false,
        slides: '> div',
        speed: 1000,
        easing: 'easeOutQuart',
        timeout: 0,
        swipe: true
    }).on('cycle-before', function (event, opts) {
        // APP.trace(opts);
        // APP.trace('before');
    }).on('cycle-after', function (event, opts) {
        // APP.trace('after');
    });
          
          
        $('#mondjad1 li a').on('click', function (e) {
        e.preventDefault();
        var gotosld = Number($(this).parent().index());
        $('.study').cycle(gotosld);
    });
          
           $('#mondjad1 li a').on('click', function (e) {
        e.preventDefault();
         $(' #mondjad1').slideUp();
        
    });
$('#ovrbanns').height($(window).height());
// $(".slimScrollDiv").height($('#ovrbanns').height());
          
        });
    
     $(window).scroll(function () {
         var scrl = $(window);
$('#ovrbann').css({ top: -(scrl.scrollTop() * 0.3) });
     });
                </script>
 </body></html>