/* Package Description: Contains the bundled lib for zocial icons use in meteor
 * applications. Pushed to atmosphere, stored on user 'yuniversaldan.'
  */
Package.describe({
  name: 'yuniversaldan:zocial',
  version: '0.1.0',
  summary: 'Zocial icons, bundled for Meteor',
  git: 'https://github.com/danXyu/yuniversaldan_zocial.git',
  documentation: 'README.md'
});

/* Simply add the social.css file to the client's dependencies. */
Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles(['lib/css-social-buttons/css/zocial.css'], ['client']);
});
