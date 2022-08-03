(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        /* smoth scroll*/
        $('.header-area .btn-wrapper .boxed-btn:first-child').on('click', function (e) {
            e.preventDefault();
            var anchor = $(this).attr('href');
            var top = $(anchor).offset().top;
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 1000);
        });

    });
        
        
       

        /*--window Scroll functions--*/
        $(window).on('scroll', function () {
        
        });
           
/*--window load functions--*/
    jQuery(window).load(function(){
    });


}(jQuery));	