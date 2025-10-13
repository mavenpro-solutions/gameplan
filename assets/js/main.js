// assets/js/main.js
jQuery(document).ready(function($) {

    // --- 1. CUSTOM HERO SLIDER ---
    if ($('.hero-slide').length > 0) {
        let currentSlide = 0;
        const slides = $('.hero-slide');
        const indicators = $('.slide-indicator');
        const totalSlides = slides.length;
        let slideInterval;

        function goToSlide(slideIndex) {
            slideIndex = (slideIndex + totalSlides) % totalSlides;
            slides.removeClass('z-10 opacity-100').addClass('z-0 opacity-0');
            slides.eq(slideIndex).removeClass('opacity-0').addClass('z-10 opacity-100');
            indicators.removeClass('active');
            indicators.eq(slideIndex).addClass('active');
            currentSlide = slideIndex;
        }

        function startSlider() {
            slideInterval = setInterval(function() {
                goToSlide(currentSlide + 1);
            }, 5000);
        }

        function resetSliderInterval() {
            clearInterval(slideInterval);
            startSlider();
        }

        $('#next-slide').on('click', function() {
            goToSlide(currentSlide + 1);
            resetSliderInterval();
        });

        $('#prev-slide').on('click', function() {
            goToSlide(currentSlide - 1);
            resetSliderInterval();
        });

        indicators.on('click', function() {
            const slideIndex = $(this).data('slide-to');
            goToSlide(slideIndex);
            resetSliderInterval();
        });

        goToSlide(0);
        startSlider();
    }

    // --- 2. MOBILE MENU ---
    const mobileMenu = $('#mobile-menu');
    $('#mobile-menu-button').on('click', function() {
        mobileMenu.removeClass('translate-x-full');
    });
    $('#close-menu-button, #mobile-menu a').on('click', function() {
        mobileMenu.addClass('translate-x-full');
    });

    // --- 3. EVENT ALERT POPUP ---
    setTimeout(function() {
        $('#event-alert').removeClass('opacity-0 translate-y-10');
    }, 3000);
    $('#close-alert-button').on('click', function() {
        const eventAlert = $('#event-alert');
        eventAlert.addClass('opacity-0 translate-y-10');
        setTimeout(function() {
            eventAlert.addClass('hidden');
        }, 500);
    });

    // --- 5. UPCOMING EVENTS SLIDER ---
    new Swiper('.events-slider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: '.events-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#events-next',
            prevEl: '#events-prev',
        },
    });

    // --- 6. PAST EVENTS SLIDER ---
    new Swiper('.past-events-slider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: '.past-events-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#past-events-next',
            prevEl: '#past-events-prev',
        },
    });


     // --- NEW/FIXED: SIGNATURE (SPORTS) SLIDER ---
    new Swiper('.sports-events-slider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: '.sports-events-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#sports-events-next',
            prevEl: '#sports-events-prev',
        },
    });

    // --- NEW: SIGNATURE (ART & CULTURE) SLIDER ---
    new Swiper('.art-culture-slider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: '.art-culture-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#art-culture-next',
            prevEl: '#art-culture-prev',
        },
    });

    // --- NEW: SIGNATURE (CORPORATE) SLIDER ---
    new Swiper('.corporate-slider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: '.corporate-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#corporate-next',
            prevEl: '#corporate-prev',
        },
    });


    // --- 8. MEET OUR TEAM SLIDER (This might be number 10 or 11 now) ---
    new Swiper('.team-slider', {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
        },
        pagination: {
            el: '.team-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#team-next',
            prevEl: '#team-prev',
        },
    });
});