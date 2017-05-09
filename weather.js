$(document).ready(function(){

   if (navigator.geolocation){
        
        navigator.geolocation.getCurrentPosition(function(position){


            var coords = [position.coords.latitude, position.coords.longitude];

            //alert("https://api.darksky.net/forecast/631081f27db94fb5a700895f671efc20/" + coords[0] + "," + coords[1] + "?exclude=currently,minutely,hourly,alerts,flags&units=si");

            $.getJSON("https://api.darksky.net/forecast/631081f27db94fb5a700895f671efc20/" + coords[0] + "," + coords[1], function(json){


                alert(worked);

            });






        });


   }
        
});