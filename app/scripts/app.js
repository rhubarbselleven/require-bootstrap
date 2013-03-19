/*global define */
define([
    'marionette'
], function (Marionette) {
    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        // todo: define regions
    });

    app.addInitializer(function () {
        // todo: add initialisers
    });




    app.on('initialize:after', function () {
        Backbone.history.start();

    });

    return app;
});