/*global define */
define([
    'marionette',

    'models/Collection',
    'views/ModelListView'
], function (Marionette, Collection, ModelListView) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        // todo: define regions
        hero: '.hero-unit'
    });

    var collection = new Collection(
        [
            {name: 'this'},
            {name: 'is'},
            {name: 'a'},
            {name: 'collection'},
            {name: '!!'}
        ]
    );

    app.addInitializer(function () {
        // todo: add initialisers
        app.hero.show(new ModelListView(collection));
    });


    app.on('initialize:after', function () {
        Backbone.history.start();

    });

    return app;
});