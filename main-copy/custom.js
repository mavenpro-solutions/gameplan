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

    // 1. Mobile Menu Toggles
    $(".menu-btn, .menu-close, .overlay").click(function () {
        $("#main-mobile-menu").toggleClass("open");
    });

    // 2. Desktop Dropdown Interaction
    // Level 1
    $("#main-desktop-menu > ul > .dropdown").on("mouseenter", function () {
        $(this).children(".dropdown-menu").stop(true, true).fadeIn(200);
    });
    $("#main-desktop-menu > ul > .dropdown").on("mouseleave", function () {
        $(this).children(".dropdown-menu").stop(true, true).fadeOut(200);
    });

    // Level 2 (Nested)
    $("#main-desktop-menu > ul > .dropdown .dropdown").on("mouseenter", function () {
        $(this).children(".dropdown-menu").stop(true, true).fadeIn(200);
    });
    $("#main-desktop-menu > ul > .dropdown .dropdown").on("mouseleave", function () {
        $(this).children(".dropdown-menu").stop(true, true).fadeOut(200);
    });

    // 3. Mobile Accordion with Icon Rotation
    $("#main-mobile-menu .dropdown > a").on("click", function (e) {
        e.preventDefault(); 
        e.stopPropagation();
        
        var $parentLi = $(this).parent(".dropdown");
        var $currentMenu = $parentLi.children(".dropdown-menu");
        var $icon = $(this).find('i'); // Select the icon inside the clicked link
        
        // Toggle the menu
        $currentMenu.stop(true, true).slideToggle(300);

        // Toggle Rotation Class
        // Note: You can use Tailwind 'rotate-180' if your config supports it, 
        // or just use jQuery css. Here is a CSS toggle approach:
        if ($icon.hasClass('rotate-180')) {
            $icon.removeClass('rotate-180');
        } else {
            $icon.addClass('rotate-180');
        }

        // Close siblings and reset their icons
        $parentLi.siblings(".dropdown").children(".dropdown-menu").stop(true, true).slideUp(300);
        $parentLi.siblings(".dropdown").find('> a i').removeClass('rotate-180');
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
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Continue autoplay after user interaction
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
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        navigation: {
            nextEl: '#past-events-next',
            prevEl: '#past-events-prev',
        },
    });


// --- SIGNATURE (SPORTS) SLIDER ---
new Swiper('.sports-slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    },
    pagination: {
        el: '.sports-pagination',
        clickable: true,
    },
    autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
    navigation: {
        nextEl: '#sports-next',
        prevEl: '#sports-prev',
    },
});

// --- SIGNATURE (LITERATURE) SLIDER ---
new Swiper('.literature-slider', {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    },
    pagination: {
        el: '.literature-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#literature-next',
        prevEl: '#literature-prev',
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
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Continue autoplay after user interaction
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
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        navigation: {
            nextEl: '#corporate-next',
            prevEl: '#corporate-prev',
        },
    });
// Generic initializer for all dynamic signature sliders (emitted from PHP as "<div class='swiper {slug}-slider'>")
$('[class$="-slider"].swiper').each(function() {
    var $container = $(this);
    var classes = $container.attr('class').split(/\s+/);
    var sliderClass = classes.find(function(c) { return c !== 'swiper' && c.endsWith('-slider'); });
    if (!sliderClass) return;

    var base = sliderClass.replace(/-slider$/, '');
    var paginationSelector = '.' + base + '-pagination';
    var nextSelector = '#' + base + '-next';
    var prevSelector = '#' + base + '-prev';

    new Swiper('.' + sliderClass, {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        },
        pagination: {
            el: paginationSelector,
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: nextSelector,
            prevEl: prevSelector,
        },
    });
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
        autoplay: {
            delay: 5000,
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        navigation: {
            nextEl: '#team-next',
            prevEl: '#team-prev',
        },
    });
});