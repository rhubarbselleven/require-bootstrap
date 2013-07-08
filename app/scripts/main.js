
// require bootstrap so that the js is included in build.
require(['app', 'backbone', 'bootstrap'], function (app, Backbone) {
    'use strict';

    app.start();

    app.on('initialize:after', function () {
        Backbone.history.start();
    });

});