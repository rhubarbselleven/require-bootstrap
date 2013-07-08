define([
    'marionette',
    'views/ModelView',

    'tpl!templates/modelList.html'

], function (Marionette, ModelView, template) {
    'use strict';

    return Marionette.CollectionView.extend({

        template: template,

        itemView: ModelView,
        itemViewContainer: 'ul',

        collectionEvents: {

        },

        initialize: function (opts) {

        },

        onRender: function () {

        }
    });

});