/* global define */
define([


    // All your tests go here.
    'spec/test.app' // maybe it makes sense to add tests as dependencies in spec/config?

], function () {
    'use strict';

    window.console = window.console || function () {
    }; // protect from barfs
    window.notrack = true; // don't track
    window.mocha.run(); // kickoff the runner
});