'use strict';

require.config({
    baseUrl: '../../app/scripts/', // non-pathed dependencies should come from the app/scripts directory
    deps: ['runner'], // load spec/runner.js by default
    paths: {
        spec: '../../test/spec', // path tests to this directory
        runner: '../../test/spec/runner', // the main test runner, load all tests as dependencies
        appConfig: '../../app/scripts/config', // the app's config file

        'chai-jquery': '../../app/components/chai-jquery/chai-jquery'
    },
    shim: {
        runner: ['appConfig'] // make runner depend on the app's config file
    }
});