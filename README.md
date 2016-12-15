# Require Bootstrap

RequireJS, Backbone, Marionette bootstrap with Bower, Grunt and Mocha. Sourced from Yeoman, and then further adapted to streamline JavaScript modular development.

## Out of the box

### Products
* [RequireJS](http://requirejs.org)
* [Backbone](http://backbonejs.org)
* [Marionette](http://marionettejs.com)
* [Bootstrap](http://twitter.github.com/bootstrap/)
* [Grunt](http://gruntjs.com)
* [Bower](http://bower.io)
* [Mocha](http://mochajs.org/)

### Features
* Buildable
* Live reload of edited files (JS, css and html templates)
* Testable
* [Travis-ci](http://travis-ci.org) integration
* [Bamboo](http://www.atlassian.com/software/bamboo/) integration

## Travis Build Status

[![Build Status](https://travis-ci.org/rhubarbselleven/require-bootstrap.png)](https://travis-ci.org/rhubarbselleven/require-bootstrap)

## Prerequisites
Before you begin, you'll need:

* Node => 0.8.0
* npm (for NodeJS magic)
* compass (for sass magic)
* bower (for dependency magic)
* grunt-cli (for building magic)

Install npm via your distribution's package manager.

    # Gentoo
    emerge npm

Compass is installed as a RubyGem, so as a prerequisite, you need to install Ruby.

    # install compass once you have ruby installed
    gem update --system
    gem install compass

Grunt and bower need to be available in the global paths

    # install grunt and bower
    npm install -g grunt-cli bower

If you're using Ubuntu, see [this issue](https://github.com/bower/bower/issues/201). As there might be something else called node installed on your system.

You now have the base prerequisites installed. To install the project related dependencies, execute the following from the require-bootstrap directory.

    npm install && bower install

This will take some time. Once completed, you're all set to go.

## Building and Running

grunt and bower are now your new best friends. From your project directory, you can execute grunt in the following manner:

    grunt           # build the application for deployment
    grunt test      # run tests
    grunt server    # preview the application in a live environment

There are a few caveats, eg you cannot test when you have the server running. However your tests are available under the test/ URL from the live environment.

Be sure to use bower to pull in all the different JavaScript libraries you're interested in.

## Where to from here

If you're new to Backbone, Marionette or RequireJS - be sure to check out their documentation. This bootstrap supplies you with some basic
views to start with, but once you start using other libraries and creating new views you'll need their documentation to support you.

## Travis-ci Integration

The .travis.yml is all set up and ready to go, all you need to do is supply the repository.

## Atlassian Bamboo Integration

This bootstrap is all ready to go.

You've got the [mocha bamboo reporter](https://github.com/issacg/mocha-bamboo)

Just waiting on [this issue](https://bitbucket.org/atlassian/bamboo-nodejs-plugin/issue/4/rebuild-request) for it to be a clean solution.


