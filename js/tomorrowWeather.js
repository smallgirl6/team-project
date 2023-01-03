const model = {
    init: function(){
        async function getWeatherData(url){
            const response = await fetch(url);
            const data = await response.json();
            return data;
        };
        
        const weatherDataTempPromise = getWeatherData("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-25142137-EFE4-4F9E-9B46-D41BF5BD73D5");
        const weatherDataRainfallPromise = getWeatherData("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization=CWB-25142137-EFE4-4F9E-9B46-D41BF5BD73D5");
        
        Promise.all([weatherDataTempPromise, weatherDataRainfallPromise])
        .then(([dataTemp, dataRainfall]) => {
            view.render(dataTemp, dataRainfall);
        });
    }
};

const view = {
    render: function(dataTemp, dataRainfall){
        const dayWeatherList = {
            "陰時多雲": "/img/day_cloudy_shade.png",
            "陰天": "/img/day_overcast.png",
            "多雲": "/img/day_cloudy.png",
            "晴時多雲": "/img/day_cloudy_sunny_period.png",
            "陰短暫雨": "/img/day_short_rain_shade.png",
            "多雲時陰": "/img/day_most_cloudy_shade.png",
            "陰有雨": "/img/day_rain_shade.png",
            "多雲時晴": "/img/day_cloudy_sunny.png"
        };

        const nightWeatherList = {
            "陰時多雲": "/img/night_cloudy_shade.png",
            "陰天": "/img/night_overcast.png",
            "多雲": "/img/night_cloudy.png",
            "晴時多雲": "/img/night_cloudy_sunny_period.png",
            "陰短暫雨": "/img/night_short_rain_shade.png",
            "多雲時陰": "/img/night_most_cloudy_shade.png",
            "陰有雨": "/img/night_rain_shade.png",
            "多雲時晴": "/img/night_cloudy_sunny.png"
        };

        // Display the content
        document.querySelector("#tomorrowDayWeather").style.opacity = "1";
        document.querySelector("#tomorrowNightWeather").style.opacity = "1";
    
        // Weather Icon
        document.querySelector("#tomorrowDayWeatherIcon").src = dayWeatherList[dataTemp.records.location[0].weatherElement[0].time[1].parameter.parameterName];
        document.querySelector("#tomorrowNightWeatherIcon").src = nightWeatherList[dataTemp.records.location[0].weatherElement[0].time[2].parameter.parameterName];
        
        // Temperature
        document.querySelector("#tomorrowDayWeatherTemp").textContent = dataTemp.records.location[0].weatherElement[2].time[1].parameter.parameterName + " °C - " + dataTemp.records.location[0].weatherElement[4].time[1].parameter.parameterName + " °C";
        document.querySelector("#tomorrowNightWeatherTemp").textContent = dataTemp.records.location[0].weatherElement[2].time[2].parameter.parameterName + " °C - " + dataTemp.records.location[0].weatherElement[4].time[2].parameter.parameterName + " °C";
    
        // Rainfall
        document.querySelector("#tomorrowDayRainfallRate").textContent = dataRainfall.records.location[4].weatherElement[6].elementValue + " mm";
        document.querySelector("#tomorrowNightRainFallRate").textContent = dataRainfall.records.location[4].weatherElement[6].elementValue + " mm";
    }
};

const controller = {
    init: function(){
        model.init();
    }
};
controller.init();