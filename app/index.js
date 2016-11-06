var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = 'db12ed5ee6604c8e90bbcf7c5495e5e3';
var sentryApp = '110288';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
    name: 'Github Battle',
    branch: 'video12',
    version: '1.0'
};

Raven.config(sentryURL, {
    release: _APP_INFO.version,
    tags: {
        branch: _APP_INFO.branch
    }
}).install();

window.onerror = function(){
    Raven.showReportDialog();
};

ReactDOM.render(
    routes, 
    document.getElementById('app')
);