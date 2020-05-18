cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-facebookads.FacebookAds",
      "file": "plugins/cordova-plugin-facebookads/www/FacebookAds.js",
      "pluginId": "cordova-plugin-facebookads",
      "clobbers": [
        "window.FacebookAds"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-extension": "1.5.4",
    "cordova-facebook-audnet-sdk": "4.26.2",
    "cordova-plugin-facebookads": "4.23.2",
    "cordova-plugin-whitelist": "1.3.3"
  };
});