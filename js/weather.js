var coords;
var celsius = true;

$(document).ready(function(){

   if (navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(function(position){


            coords = [position.coords.latitude, position.coords.longitude];

            //&callback=?

            

           $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + coords[0] + "&lon=" + coords[1] +"&units=metric&APPID=300559ed560870a7e312018973c6dc0c", function(json){


                
                $("#icon").attr("src", "assets/" + json.weather[0].icon + ".svg");
                $("#sky").html("Sky condition: " + json.weather[0].main);
                $("#local").html(json.name + "/" + json.sys.country);
                $("#current").html("Temperature: " + json.main.temp + " ºC");
                $("#speed").html("Wind speed: " + json.wind.speed + " m/s");
                $("#humidity").html("Humidity: " + json.main.humidity + "%");
            }); 
        });
   }
        

   $("#change").click(function(){

            
        if(celsius){

            celsius = false;
            
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + coords[0] + "&lon=" + coords[1] +"&units=imperial&APPID=300559ed560870a7e312018973c6dc0c", function(json){

                $("#current").html("Temperature: " + json.main.temp + " ºF");
                $("#change").html("Celsius");
                $("#change").css("background-color", "blue");
            });
        }
        else
        {
            celsius = true;
            
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + coords[0] + "&lon=" + coords[1] +"&units=metric&APPID=300559ed560870a7e312018973c6dc0c", function(json){

                $("#current").html("Temperature: " + json.main.temp + " ºC");
                $("#change").html("Fahrenheit");
                $("#change").css("background-color", "red");
            });
        }

   })

});