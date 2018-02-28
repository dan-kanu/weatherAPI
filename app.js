

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


$(function () {
    var key = "&client_id=6cccbb60692e99f5004192f18bcb6dd5";
    var unsplashURL = "";
    $.ajax({
        type: 'GET',
        url: 'https://api.unsplash.com/'+key,
        success: function (data) {
            console.log('success', data[0].urls.full);

            document.getElementById('left-col').style.background = "url(https://source.unsplash.com/random)";
        }
    })
})

