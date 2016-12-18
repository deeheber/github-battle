import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import Raven from 'raven-js';

const sentryKey = 'db12ed5ee6604c8e90bbcf7c5495e5e3';
const sentryApp = '110288';
const sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

const _APP_INFO = {
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