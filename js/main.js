jQuery(function($) {
    'use strict',


    //Navbar Toggle Animated X Icon JS
    $(document).ready(function() {
        $(".navbar-toggle").on("click", function() {
            $(this).toggleClass("active");
        });
    });
	

    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 0)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
     });


//Contact Form In Modal
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});
//End Contact Form in MOdal

//Event carousel owl
    $(document).ready(function() {
        var owl = $("#owl-demo");
        owl.owlCarousel({
            autoPlay: 1500,
            items: 3, //10 items above 1000px browser width
            itemsDesktop: [1000, 4], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0;
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            pagination: false
        });
        $(".next").click(function() {
            owl.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl.trigger('owl.prev');
        })
    });

    //end event carusel owl
	
//Loader JS
//End Loader JS    
    
    
    //Event Material Design expand
    $(function() {
        $('.material-card > .mc-btn-action').click(function() {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });

    //News Ticker   
    /**
     */
    (function($) {
        $.fn.Ticker = function(options) {
            var defaults = {

                // Time to display each news item. (integer, milliseconds)
                pause: 5000,

                // Time taken to fade in next news item. (integer, milliseconds)
                fadeIn: 800,

                // Time taken to fade out current news item. (integer, milliseconds)
                fadeOut: 800,

                // Pause between displaying each item when fading between items. (integer, milliseconds)
                delay: 500,

                // Next news item typed out one character at a time. If false item will fade in. (boolean)
                typewriter: true,

                // Time to type each character if using the typewriter effect (integer, milliseconds)
                speed: 35,

                // Character to use to mimic a computer cursor if using the typewriter effect (string|boolean)
                cursor: '_'
            };

            // Merge default options with user options
            var opts = $.extend({}, defaults, options);

            return $(this).each(function() {
                var list = $(this),
                    typewriter = {},
                    interval;

                // Activate ticker and display first item
                list
                    .addClass('ticker-active')
                    .children(':first')
                    .css('display', 'block');

                function changeItem() {
                    var item = list.children(':first'),
                        next = item.next(),
                        copy = item.clone();

                    clearTimeout(interval);

                    // Append copy of current item to bottom of list
                    $(copy)
                        .css('display', 'none')
                        .appendTo(list);

                    // Fade current item out, remove from DOM then animate the next item
                    item.fadeOut(opts.fadeOut, function() {
                        $(this).remove();

                        // Animate
                        if (opts.typewriter) {
                            typewriter.string = next.text();

                            next
                                .text('')
                                .css('display', 'block');

                            typewriter.count = 0;
                            typewriter.timeout = setInterval(type, opts.speed);
                        } else {
                            next
                                .delay(opts.delay)
                                .fadeIn(opts.fadeIn, function() {
                                    setTimeout(changeItem, opts.pause);
                                });
                        }
                    });
                }

                function type() {
                    typewriter.count++;

                    var text = typewriter.string.substring(0, typewriter.count);

                    if (typewriter.count >= typewriter.string.length) {
                        clearInterval(typewriter.timeout);
                        setTimeout(changeItem, opts.pause);
                    } else if (opts.cursor) {
                        text += ' ' + opts.cursor;
                    }

                    list
                        .children(':first')
                        .text(text);
                }

                // Test there are more items to display then start ticker
                if (list.find('li').length > 1) {
                    interval = setTimeout(changeItem, opts.pause);
                }
            });
        };

        $('.ticker').Ticker();

    })(jQuery);


    //Scroll Menu

    function menuToggle() {
        var windowWidth = $(window).width();

        if (windowWidth > 767) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 405) {
                    $('.main-nav').addClass('fixed-menu animated slideInDown');
                } else {
                    $('.main-nav').removeClass('fixed-menu animated slideInDown');
                }
            });
        } else {

            $('.main-nav').addClass('fixed-menu animated slideInDown');

        }
    }

    menuToggle();


    //Text Scramble Effect
    // ——————————————————————————————————————————————————

    class TextScramble {
        constructor(el) {
            this.el = el
            this.chars = '!<>-_\\/[]{}—=+*^?#________'
            this.update = this.update.bind(this)
        }
        setText(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || ''
                const to = newText[i] || ''
                const start = Math.floor(Math.random() * 40)
                const end = start + Math.floor(Math.random() * 40)
                this.queue.push({
                    from, to, start, end
                })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
        }
        update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let {
                    from, to, start, end, char
                } = this.queue[i]
                if (this.frame >= end) {
                    complete++
                    output += to
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 2) {
                        char = this.randomChar()
                        this.queue[i].char = char
                    }
                    output += `<span class="dud">${char}</span>`
                } else {
                    output += from
                }
            }
            this.el.innerHTML = output
            if (complete === this.queue.length) {
                this.resolve()
            } else {
                this.frameRequest = requestAnimationFrame(this.update)
                this.frame++
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
    }

    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————

    const phrases = [
        'Babuee...',
        'The Largest Event Management Company of Bangladesh',
        'Let us know...What you Want?',
        'Please share your Plan',
        'We are here to hear you :)',
        'to Serve you',
        'Its our pleasure !',
        'Together we Build our dream'
    ]

    const el = document.querySelector('.text')
    const fx = new TextScramble(el)

    let counter = 0
    const next = () => {
        fx.setText(phrases[counter]).then(() => {
            setTimeout(next, 900)
        })
        counter = (counter + 1) % phrases.length
    }

    next()
        //End Text Scramble Effect

    //Countdown js
    $("#countdown").countdown({
            date: "16 December 2019 12:00:00",
            format: "on"
        },

        function() {
            // callback function
        });
    //End Countdown js
    
    // Carousel Auto Slide Off
    $('#event-carousel, #sponsor-carousel ').carousel({
        interval: false
    });


    // Contact form validation
    var form = $('.contact-form');
    form.submit(function() {
        'use strict',
        $this = $(this);
        $.post($(this).attr('action'), function(data) {
            $this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
        }, 'json');
        return false;
    });

    $(window).resize(function() {
        menuToggle();
    });

    $('.main-nav ul').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 900,
        scrollOffset: 0,
        scrollThreshold: 0.3,
        filter: ':not(.no-scroll)'
    });

});

//Back to top
// Check distance to top and display back-to-top.
$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('.back-to-top').addClass('show-back-to-top');
    } else {
        $('.back-to-top').removeClass('show-back-to-top');
    }
});

// Click event to scroll to top.
$('.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});


//Mouse Scroll Slider
$(document).ready(function() {

    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
        scrolling = true;

        $(pgPrefix + curPage).removeClass("inactive").addClass("active");
        $(pgPrefix + (curPage - 1)).addClass("inactive");
        $(pgPrefix + (curPage + 1)).removeClass("active");

        setTimeout(function() {
            scrolling = false;
        }, animTime);
    };

    function navigateUp() {
        if (curPage === 1) return;
        curPage--;
        pagination();
    };

    function navigateDown() {
        if (curPage === numOfPages) return;
        curPage++;
        pagination();
    };

    $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (scrolling) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            navigateUp();
        } else {
            navigateDown();
        }
    });

    $(document).on("keydown", function(e) {
        if (scrolling) return;
        if (e.which === 38) {
            navigateUp();
        } else if (e.which === 40) {
            navigateDown();
        }
    });

});




// Google Map Customization
(function() {

    var map;

    map = new GMaps({
        el: '#gmap',
        lat: 23.778007,
        lng: 90.413971,
        scrollwheel: false,
        zoom: 18,
        zoomControl: false,
        panControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        clickable: false
    });

    var image = 'images/map-icon.png';
    map.addMarker({
        lat: 43.04446,
        lng: -76.130791,
        icon: image,
        animation: google.maps.Animation.DROP,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        backgroundColor: '#3e8bff',
    });


    var styles = [

        {
            "featureType": "road",
            "stylers": [{
                "color": "#b4b4b4"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#d8d8d8"
            }]
        }, {
            "featureType": "landscape",
            "stylers": [{
                "color": "#f1f1f1"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "color": "#d9d9d9"
            }]
        }, {
            "elementType": "labels.text",
            "stylers": [{
                "saturation": 1
            }, {
                "weight": 0.1
            }, {
                "color": "#000000"
            }]
        }

    ];

    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    });

    map.setStyle("map_style");


}());