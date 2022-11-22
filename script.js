var apiKey = "b275b7ddf3e09690dd9b40f87acc2546";


var weatherNCUrl = "https://api.openweathermap.org/data/2.5/weather?lat=35.23&lon=-80.84&appid=b275b7ddf3e09690dd9b40f87acc2546&units=imperial"
var weatherNC = document.getElementById('weatherNC')

fetch(weatherNCUrl, {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) { 
    console.log(data); 
    for (var i = 0; i < data.length; i++) {
        var tempNC = document.createElement('h3');
        var humidityNC = document.createElement('h3');
        tempNC.textContent = data[i].main.temp;
        humidityNC.textContent = data[i].main.humidty;
        weatherNC.append(tempNC);
        weatherNC.append(humidityNC);

       

    }
    
    
    }); 

    



  /*
    
      var humidityNC = document.createElement('h3');
      humidityNC.textContent = data.humidity

      userName.textContent = data[i].user.login;
      issueTitle.textContent = data[i].title;
      issueContainer.append(userName);
      issueContainer.append(issueTitle);
                      






}) */