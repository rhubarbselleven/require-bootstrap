define([
    'backbone'

], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            selected: false
        },

        isSelected: function () {
            return this.get('selected');
        }

    });
});