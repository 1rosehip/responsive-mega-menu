;(function ($, window, document, undefined) {
    'use strict';

    var pluginName = 'rhipMegaMenu',
        defaults = {

        };

    /**
     * init toggle event
     * @param {jQueryElement} $liList
     */
    var initToggleEvent = function($liList){

        var $buttons = $liList.children('a'),
            selectedClassName = 'rhip-mm-selected';

        /**
         * on menu buttons click
         */
        $buttons.on('click', function(event){

            event.preventDefault();
            event.stopPropagation();

            var isSelected = $(this).hasClass(selectedClassName);
            $buttons.removeClass(selectedClassName);
            $(this).toggleClass(selectedClassName, !isSelected);
        });

        /**
         * close menu on button click
         */
        $(document).on('click', function(){

            $buttons.removeClass(selectedClassName);
        });
    };

    /**
     * Plugin constructor
     * @constructor
     * @param {HTMLElement} element
     * @param {Object} options
     */
    var Plugin = function(element, options){

        this.element = element;
        this.settings = $.extend( {}, defaults, options);
        this.init();
    };

    /**
     * APIs
     */
    $.extend(Plugin.prototype, {

        /**
         * initialization
         */
        init: function() {

            //init events
            this.initEvents();
        },

        /**
         * init events
         */
        initEvents: function(){

            //init toggle event
            initToggleEvent($(this.element).children('li'));
        }

    } );

    /**
     * 1rosehip Mega Menu
     * @param {Object} options
     * @returns {*}
     */
    $.fn[pluginName] = function(options) {
        return this.each(function() {

            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new Plugin(this, options));
            }
        } );
    };

})(jQuery, window, document);
