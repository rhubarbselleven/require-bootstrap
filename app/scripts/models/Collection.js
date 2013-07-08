define([
    'backbone',
    'models/Model'

], function (Backbone, Model) {
    'use strict';

    return Backbone.Collection.extend({
        defaults: {

        },

        model: Model,

        comparator: function (lhs, rhs) {
            return lhs.get('name').localeCompare(rhs.get('name'));
        }


    });
});