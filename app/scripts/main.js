require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/bootstrap.css/js/bootstrap',
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

// require bootstrap so that the js is included in build.
require(['app', 'bootstrap'], function (app) {
    'use strict';

    app.start();
});