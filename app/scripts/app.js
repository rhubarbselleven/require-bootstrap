/*global define */
define([
    'marionette',
    'models/Collection',
    'models/Collection',
    'views/ModelListView'
], function (Marionette, Model, Collection, ModelListView) {
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

    var model = new Model({name: 'Collection Time!'});

    app.addInitializer(function () {
        // todo: add initialisers
        app.hero.show(new ModelListView(model, collection));
    });


    app.on('initialize:after', function () {
        Backbone.history.start();

    });

    return app;
});