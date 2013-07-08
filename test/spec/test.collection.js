define([
    'models/Collection'

], function (Collection) {
    'use strict';

    var payload = [
        {name: "0"},
        {name: "1"},
        {name: "2"},
        {name: "3"},
        {name: "4"},
        {name: "5"},
        {name: "6"},
        {name: "7"},
        {name: "8"}
    ];


    describe('Collection', function () {
        it('should exist', function () {
            should.exist(Collection);
        });

        it('should be a function', function () {
            expect(Collection).to.be.a('function');
        });

        it('Can be loaded', function () {
            var collection = new Collection(payload);
            expect(collection.size()).to.equal(payload.length);
        });
    });


});