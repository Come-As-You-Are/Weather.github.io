window.addEventListener('load', ()=>{
    //after page loads, and this function runs
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.desc');
     
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector(".location-timezone");
    let locationHumidity = document.querySelector(".humidi");
    let locationDaily = document.querySelector(".daily");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //access the weather...
            //darksky.net
            
            const api = `https://api.darksky.net/forecast/9a9b3a07cf6eb56ae505baf6653d269e/${lat},${long}`;
            
        fetch(api)
        .then(response =>{
            return response.json();
            
        })
        .then(data =>{
            console.log(data);
            
            const{temperature, summary, humidity} = data.currently;
           
            
            //from currently section. take out temp and summary
            //SET DOM elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = "Current Summary: " + summary;
            locationTimezone.textContent = "Timezone: " + data.timezone;
            locationHumidity.textContent = "Humidity: " + humidity;
            locationDaily.textContent = data.daily.summary;
            
            
        });
        //after you get the information, then we can do something with thsi data
        //take the information and convert it to JSON
            
        });
        //to get information, use fetch. (get request, which gets data from that url)
       
    }
});