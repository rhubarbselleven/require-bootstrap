define([
    'backbone'

], function (Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            selected: false
        },

        idAttribute: 'id',

        isSelected: function () {
            return this.get('selected');
        }

    });
});