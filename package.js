Package.describe({
  name: 'color:analytics',
  version: '0.0.1',
  summary: 'Google analytics pageview.',
  git: 'https://github.com/coloryazilim/meteor-analytics.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5');
  api.use('ecmascript');
  api.mainModule('analytics.js', 'client');
});
