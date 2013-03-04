require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        backbone: '../components/backbone/backbone',
        underscore: '../components/underscore-amd/underscore',
        marionette: '../components/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../components/backbone.babysitter/lib/amd/backbone.babysitter',
        tpl: '../components/tpl/tpl'


    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        }


    }
});

require(['app', 'jquery', 'underscore', 'backbone', 'marionette'], function (app, $, _, Backbone, Marionette) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);

    Backbone.history.start();

    var myApp = new Marionette.Application();
    console.log(myApp);


});