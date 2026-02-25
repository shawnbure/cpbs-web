(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Contact form handling - Make checkbox required only when phone is filled
    $(document).on('input', '#phone', function() {
        var phoneValue = $(this).val().trim();
        var smsConsentCheckbox = $('#smsConsent');
        var formCheck = smsConsentCheckbox.closest('.form-check');
        
        if (phoneValue.length > 0) {
            smsConsentCheckbox.prop('required', true);
            formCheck.addClass('required-field');
        } else {
            smsConsentCheckbox.prop('required', false);
            formCheck.removeClass('required-field');
        }
    });

    // Form submission handler
    $(document).on('submit', '#contactForm', function(e) {
        e.preventDefault();
        
        var phoneValue = $('#phone').val().trim();
        var smsConsentChecked = $('#smsConsent').is(':checked');
        
        // Validate: if phone is filled, checkbox must be checked
        if (phoneValue.length > 0 && !smsConsentChecked) {
            alert('Please consent to receive SMS messages if you provide a phone number.');
            $('#smsConsent').focus();
            return false;
        }
        
        // Hide form and show thank you message
        var form = $(this);
        form.fadeOut(300, function() {
            $('#thankYouMessage').fadeIn(300);
        });
        
        return false;
    });

    
})(jQuery);

