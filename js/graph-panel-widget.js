/**
 * @summary     jQuery Widget to manage graph portlets on the Health Dashboard
 * @description
 *
 * @author      Steve Mayhew
 *
 * @copyright Copyright 2014 Nokia USA
 *
 * @markup
 * <a class="fa fa-chevron-down" href="javascript:;"></a>
 * <a class="fa fa-cog" href="javascript:;"></a>
 * <a class="fa fa-times" href="javascript:;"></a>
 *
 */
$.widget("nue.graphPanelWidget", {

    options: {
    },

    _create: function() {
        var self = this;
        var $myElement = $(this.element);

        // Add semantic classes to markup, could generate it all here.
        $myElement.find('.tools .fa-chevron-down').addClass('toggle-visible');
        $myElement.find('.tools .fa-times').addClass('close-portlet');
        this._$bodyElement = $myElement.find('.panel-body');


        this._on({
            'click .toggle-visible' : function(event) {
                self._toggleVisible(event, $(event.target));
            },

            'click .close-portlet' : function(event) {
                self._closePanel(event, $(event.target));
            }
        });

        this._hoverable($myElement.find('a.fa'));
    },

    _init: function() {
        var self = this;
        var $myElement = $(this.element);
    },

    _closePanel: function(event, $button) {
        var self = this;
        var $myElement = $(this.element);
        $myElement.fadeOut(function() {
            $myElement.remove();
        })
    },

    _toggleVisible: function(event, $button) {
        var self = this;
        var $myElement = $(this.element);

        if ($button.hasClass("fa-chevron-down")) {
            $button.removeClass("fa-chevron-down").addClass("fa-chevron-up");
            self._$bodyElement.slideUp(200);
        } else {
            $button.removeClass("fa-chevron-up").addClass("fa-chevron-down");
            self._$bodyElement.slideDown(200);
        }
    }

});
