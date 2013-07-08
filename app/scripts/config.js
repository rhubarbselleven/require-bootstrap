'use strict';

require.config({
    deps: ['main'],

    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/bootstrap.css/js/bootstrap',
        backbone: '../components/backbone/backbone',
        underscore: '../components/underscore-amd/underscore',
        marionette: '../components/marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.babysitter': '../components/backbone.babysitter/lib/amd/backbone.babysitter',
        tpl: '../components/requirejs-tpl/tpl'


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
