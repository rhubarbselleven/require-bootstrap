define([
    'marionette',

    'tpl!templates/model.html'

], function (Marionette, template) {
    'use strict';

    return Marionette.ItemView.extend({
        template: template,

        tagName: 'li'
    });

});