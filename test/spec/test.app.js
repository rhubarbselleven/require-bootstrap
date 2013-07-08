/* global define, describe, it, should */
define(['app'], function (app) {
    'use strict';

    // whatever tests are in here will run as soon as this module is loaded
    describe('app', function () {
        it('should exist', function () {
            should.exist(app);
        });
    });
});