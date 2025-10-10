// assets/js/main.js
jQuery(document).ready(function($) {

    // --- 1. CUSTOM HERO SLIDER (as requested) ---
    // This section only runs if the hero slider elements exist on the page.
    if ($('.hero-slide').length > 0) {
        let currentSlide = 0;
        const slides = $('.hero-slide');
        const indicators = $('.slide-indicator');
        const totalSlides = slides.length;
        let slideInterval;

        function goToSlide(slideIndex) {
            slideIndex = (slideIndex + totalSlides) % totalSlides; // Loop through slides
            slides.removeClass('z-10 opacity-100').addClass('z-0 opacity-0');
            slides.eq(slideIndex).removeClass('opacity-0').addClass('z-10 opacity-100');
            indicators.removeClass('active');
            indicators.eq(slideIndex).addClass('active');
            currentSlide = slideIndex;
        }

        function startSlider() {
            slideInterval = setInterval(function() {
                goToSlide(currentSlide + 1);
            }, 5000); // Change slide every 5 seconds
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
            let slideIndex = $(this).data('slide-to');
            goToSlide(slideIndex);
            resetSliderInterval();
        });

        // Initialize the slider
        startSlider();
    }

    // --- 2. MOBILE MENU ---
    $('#mobile-menu-button').on('click', function() {
        $('#mobile-menu').removeClass('hidden');
    });
    $('#close-menu-button').on('click', function() {
        $('#mobile-menu').addClass('hidden');
    });
    
    // --- 3. EVENT ALERT BOX ---
    $('#close-alert-button').on('click', function() {
        $('#event-alert').fadeOut();
    });
  
 // --- 5. UPCOMING EVENTS SLIDER ---
    const eventsSwiper = new Swiper('.events-slider', {
        loop: true,
        spaceBetween: 30, // Space between slides

        // Responsive breakpoints
        slidesPerView: 1, // Default for mobile
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },

        // Custom Pagination
        pagination: {
            el: '.events-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#events-next',
            prevEl: '#events-prev',
        },
    });

    // --- 6. PAST EVENTS SLIDER ---
    const pastEventsSwiper = new Swiper('.past-events-slider', {
        loop: true,
        spaceBetween: 30, // Space between slides

        // Responsive breakpoints
        slidesPerView: 1, // Default for mobile
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },

        // Custom Pagination
        pagination: {
            el: '.past-events-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#past-events-next',
            prevEl: '#past-events-prev',
        },
    });


      // --- 7. SIGNATURE EVENTS SLIDER ---
    const signatureSwiper = new Swiper('.signature-slider', {
        loop: true,
        spaceBetween: 30, // Space between slides

        // Responsive breakpoints
        slidesPerView: 1, // Default for mobile
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
            }
        },

        // Custom Pagination
        pagination: {
            el: '.signature-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#signature-next',
            prevEl: '#signature-prev',
        },
    });


    
    // --- 8. MEET OUR TEAM SLIDER ---
    const teamSwiper = new Swiper('.team-slider', {
        loop: true,
        spaceBetween: 30, // Space between slides

        // Responsive breakpoints
        slidesPerView: 1, // Default for mobile
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
            }
        },

        // Custom Pagination
        pagination: {
            el: '.team-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '#team-next',
            prevEl: '#team-prev',
        },
    });
});