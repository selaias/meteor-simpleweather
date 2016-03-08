Package.describe({
  name: 'selaias:meteor-simpleweather',
  summary: ' Wrapper for simpleWeather api for jQuery (http://simpleweatherjs.com/) ',
  version: '0.7.0',
  git: ' https://github.com/selaias/meteor-simpleweather.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  api.use([
    'templating',
    'jquery',
    'ejson'
  ], 'client');

  //css
  api.addFiles('simpleweather/css/simpleweather.css', 'client');

  //js
  api.addFiles('simpleweather/js/simpleweather.js', 'client');

  // fonts
  api.addAssets('simpleweather/fonts/artill_clean_icons.otf', 'client');

  //template
  api.addFiles("weather.html", 'client');
  api.addFiles("weather.js", 'client');
  
  api.export('Weather', 'client');

});
