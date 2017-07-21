;(function ($, window, document, undefined) {
    'use strict';

    //set current year in the footer
    $('#year').text(new Date().getFullYear());

    /**
     * scroll to docs
     */
    $('#docs-btn').on('click', function(e){

        e.preventDefault();

        $('body, html').animate({
            scrollTop : $('#docs').position().top
        }, 300);
    });

    /**
     * code highlighting
     */
    if(hljs){
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }

})(jQuery, window, document);
