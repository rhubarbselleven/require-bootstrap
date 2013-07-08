define([
    'marionette',
    'views/ModelView',

    'tpl!templates/modelList.html'

], function (Marionette, ModelView, template) {
    'use strict';

    return Marionette.CompositeView.extend({

        template: template,

        itemView: ModelView,
        itemViewContainer: 'ul',

        collectionEvents: {

        },

        initialize: function (model, collection) {
            this.model = model;
            this.collection = collection;
        },

        onRender: function () {

        }
    });

});