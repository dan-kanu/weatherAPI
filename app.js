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

$(function(){
    var key="6cccbb60692e99f5004192f18bcb6dd5";
    $.ajax({
        type:'GET',
        url:'https://api.unsplash.com/photos/?client_id=1a28e59e586593faf822eb102154d46e8f56c830d3e5d896a0293804233f991a&per_page=1&page=1',
        success: function(data){
            console.log('success',data[0].urls.full);

            document.getElementById('api-test').style.backgroundImage = "url(" + data[0].urls.full +")";
        }
    })
})