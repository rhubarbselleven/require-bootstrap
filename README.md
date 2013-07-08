# Require Bootstrap

RequireJS, Backbone, Marionette bootstrap with Bower Grunt. Sourced from Yeoman, and then further adapted.

## Travis Build Status

[![Build Status](https://travis-ci.org/rhubarbselleven/require-bootstrap.png)](https://travis-ci.org/rhubarbselleven/require-bootstrap)

## Getting Started

First things first, install nodejs.

Then 

    npm install -g grunt-cli bower

Which will install grunt and bower for you.

## Build and Run

Once checked out, cd into the top directory then:

    npm install && bower install

This will download and install all of the project dependencies.

From there you can:

    grunt           # build the application for deployment
    grunt test      # run tests
    grunt server    # preview the application

## Current Caveats

The sass-bootstrap dependency requires sass => 3.2
