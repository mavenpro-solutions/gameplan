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

     // --- 2. MOBILE MENU (WITH MULTILEVEL SUPPORT) ---
    const mobileMenu = $('#mobile-menu');

    // Open the main menu panel
    $('#mobile-menu-button').on('click', function() {
        mobileMenu.removeClass('translate-x-full');
    });

    // Close the main menu panel
    $('#close-menu-button').on('click', function() {
        mobileMenu.addClass('translate-x-full');
    });

    // Handle multilevel dropdowns inside the mobile menu
    $('.mobile-menu-parent').on('click', function(e) {
        // Find the direct submenu of the clicked item
        const submenu = $(this).next('ul');

        // If the submenu exists, prevent link navigation and toggle it
        if (submenu.length) {
            e.preventDefault();
            submenu.slideToggle(300);
            // Toggle rotation of the arrow icon
            $(this).find('svg').toggleClass('rotate-180');
        }
        // If no submenu, the link will work as normal (e.g., "About Us")
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

   // --- 4. UNIVERSAL LIGHTBOX/POPUP LOGIC (UPDATED) ---
    const lightbox = $('#lightbox');
    const lightboxContent = $('#lightbox-content');
    const lightboxClose = $('#lightbox-close');

    // Open lightbox when a trigger is clicked
    $('.js-lightbox').on('click', function(e) {
        e.preventDefault(); // Prevent page from jumping
        
        const type = $(this).data('type');
        const src = $(this).data('src');

        if (type === 'video') {
            // UPDATED: Use the new wrapper class for consistent aspect ratio
            lightboxContent.html('<div class="lightbox-video-wrapper"><iframe src="' + src + '?autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>');
        } else if (type === 'image') {
            // For image, create an img tag
            lightboxContent.html('<img src="' + src + '" class="max-w-full max-h-[90vh] object-contain">');
        }

        // Show the lightbox with animation
        lightbox.removeClass('opacity-0 pointer-events-none');
        setTimeout(() => lightboxContent.removeClass('scale-95'), 50);
    });

    // Function to close the lightbox
    function closeLightbox() {
        lightboxContent.addClass('scale-95');
        lightbox.addClass('opacity-0 pointer-events-none');
        
        // Stop video playback by clearing the content after animation
        setTimeout(() => lightboxContent.html(''), 300);
    }

    // Close lightbox when the close button or background is clicked
    lightboxClose.on('click', closeLightbox);
    lightbox.on('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

 // --- 5. LOAD MORE ARTISTS LOGIC (NEW) ---
    $('#load-more-btn').on('click', function(e) {
        e.preventDefault();

        // Find the next two hidden posts
        const hiddenPosts = $('.artist-post.hidden');
        const postsToReveal = hiddenPosts.slice(0, 2);

        if (postsToReveal.length > 0) {
            // Use slideDown for a smooth reveal animation
            postsToReveal.slideDown(400, function() {
                // After animation, remove the 'hidden' class and Tailwind's inline 'display' style
                $(this).removeClass('hidden').css('display', '');
            });
        }

        // Check if there are any more hidden posts after revealing
        if (hiddenPosts.length <= 2) {
            // If 2 or fewer posts were hidden, hide the button after this click
            $(this).fadeOut(400);
        }
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