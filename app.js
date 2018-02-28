

/*
var request= new XMLHttpRequest();

var apiKey ='APPID=6cccbb60692e99f5004192f18bcb6dd5';
var city ="";
var data;

function getData(){
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&' + apiKey);

    request.onload = function(){
        //console.log(request.responseText);
        data = JSON.parse(request.responseText);
    
        console.log(data);
        city = document.getElementById('cityInput').value;
        document.getElementById('myCity').innerHTML=data.name;
        document.getElementById('myTemp').innerHTML=data.main.temp;
        
    }
    request.send();

    console.log(data);
};

document.getElementById('myBtn').addEventListener('click', getData);
*/

var key = "&client_id=6cccbb60692e99f5004192f18bcb6dd5";
    var unsplashURL = "";
    var apiKey="APPID=6cccbb60692e99f5004192f18bcb6dd5";
    var weatherUrl="http://api.openweathermap.org/data/2.5/weather?q=";
    var geoCity=document.getElementById('geo-City');
    var geoRegion=document.getElementById('state');
    var temp=document.getElementById('temperature');
   
$(function () {
    var regionGeo=geoplugin_regionName();
    $.ajax({
        type: 'GET',
        url: 'https://api.unsplash.com/' + key,
        success: function (data) {
            console.log('success', data[0].urls.full);
        }
    });
    $.ajax({
        type: 'GET',
        url: weatherUrl+geoplugin_city()+'&'+apiKey+'&units=imperial',
        success: function (data) {
            console.log(data);
            temp.innerHTML=data.main.temp;
            geoCity.innerHTML=data.name;
            geoRegion=innerHTML=geoplugin_regionName();
            document.getElementById('state').innerHTML=geoplugin_regionName();
           
        }
    });

        
    document.getElementById('left-col').style.background = "linear-gradient(rgba(255, 255, 255, 0.25),rgba(255, 255, 255, 0.65)),url('https://source.unsplash.com/1600x900/?arizona," + regionGeo +")";
});


