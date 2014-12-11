Package.describe({
  name: 'selaias:meteor-simpleweather',
  summary: ' Wrapper for simpleWeather api for jQuery (http://simpleweatherjs.com/) ',
  version: '0.4.0',
  git: ' https://github.com/selaias/meteor-simpleweather.git'
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");
  api.use('jquery');
  
  var path = Npm.require('path');
  var asset_path = path.join('simpleweather');
  //css
  api.addFiles(path.join(asset_path, 'css', 'simpleweather.css'), 'client');
  
  //js
  api.addFiles(path.join(asset_path, 'js', 'simpleweather.js'), 'client');
  
  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'artill_clean_icons.otf'), 'client');
  
  //template
  api.addFiles("weather.html", 'client');
  api.addFiles("weather.js", 'client');
  
});