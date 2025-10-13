// assets/js/main.js
jQuery(document).ready(function($) {

     // --- 1. HERO SLIDER (WITH CLICK-TO-CHANGE FUNCTIONALITY) ---
    new Swiper('.hero-swiper', {
        // Core settings
        loop: true,
        effect: 'fade', // Use 'fade' effect to match the old style
        fadeEffect: {
            crossFade: true
        },
        
        // Autoplay
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Continue autoplay after user interaction
        },

        // Navigation arrows
        navigation: {
            nextEl: '.hero-button-next',
            prevEl: '.hero-button-prev',
        },

        // Custom pagination for the '01', '02' style
        pagination: {
            el: '.hero-pagination',
            clickable: true,
            // This function creates the '01', '02', etc. format
            renderBullet: function (index, className) {
                const number = (index + 1).toString().padStart(2, '0');
                return '<span class="' + className + '">' + number + '</span>';
            },
        },

        // --- NEW CODE ADDED HERE ---
        // This listens for a click anywhere on the slider and moves to the next slide.
        on: {
            click: function () {
                this.slideNext();
            },
        },
    });

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