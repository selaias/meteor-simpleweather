meteor-simpleweather
====================
[simpleweather](http://simpleweatherjs.com/) packaged for [Meteor](http://meteor.com).

### Installation

With Meteor 0.9 and above, install using:

```sh
$ meteor add selaias:meteor-simpleweather
```


### Usage

Just Place a reference to the weather template

```js
{{>simpleWeather}}
```

and set your options

```js
var options = {
    location: 50.850340+','+ 4.351710, // Brussels
    unit: 'c',
    success: function(weather) {
      html = '<h2><i class="sw icon-'+weather.code+'"></i> '
      html += weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region +'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  }
  
  Weather.options = options
  
```

### Geolocation Example 

Alternatively you can set your own templates and css and use something like this:

```js

Template.myWeatherTemplate.rendered= function(){
    var geooptions = {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 0
    };
    
    function success(pos) {
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      var options = {
        location: lat + ',' + lng,
        unit: 'c',
        success: function(weather) {
          html = '<h2><i class="icon-'+weather.code+'"></i> '
          html += weather.temp+'&deg;'+weather.units.temp+'</h2>';
          html += '<ul><li>'+weather.city+', '+weather.region +'</li>';
          html += '<li class="currently">'+weather.currently+'</li>';
    
          $("#weather").html(html);
        },
        error: function(error) {
          $("#weather").html('<p>'+error+'</p>');
        }
      }
    
      Weather.options = options;
      Weather.load();
    
    }
    
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, geooptions);
    }
}

```

**Important** This package uses the artill-weather-icons from http://fonts.artill.de/collection/artill-weather-icons. 


Please check out the [simpleweather](http://simpleweatherjs.com/) for more details.



