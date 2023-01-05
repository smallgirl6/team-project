const model = {
    init: function(){
        async function getWeatherData(url){
            const response = await fetch(url);
            const data = await response.json();
            return data;
        };
        
        const weatherDataTempPromise = getWeatherData("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-DF2CB80E-CB70-453A-B35E-80356742388A");
        const weatherDataRainfallPromise = getWeatherData("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization=CWB-DF2CB80E-CB70-453A-B35E-80356742388A");
        
        Promise.all([weatherDataTempPromise, weatherDataRainfallPromise])
        .then(([dataTemp, dataRainfall]) => {
            view.render(dataTemp, dataRainfall);
        });
    }
};

const view = {
    render: function(dataTemp, dataRainfall){
        const dayWeatherList = {
            "陰時多雲": "img/day_cloudy_shade.png",
            "陰天": "img/day_overcast.png",
            "多雲": "img/day_cloudy.png",
            "晴時多雲": "img/day_cloudy_sunny_period.png",
            "陰短暫雨": "img/day_short_rain_shade.png",
            "多雲時陰": "img/day_most_cloudy_shade.png",
            "陰有雨": "img/day_rain_shade.png",
            "多雲時晴": "img/day_cloudy_sunny.png",
            "多雲時陰短暫雨": "img/day_short_rain_shade.png",
            "多雲短暫雨": "img/day_short_rain_shade.png",
            "陰時多雲有雨": "img/day_short_rain_shade.png",
            "陰時多雲短暫雨": "img/day_short_rain_shade.png",
            "多雲時陰有雨": "img/day_short_rain_shade.png"
        };

        const nightWeatherList = {
            "陰時多雲": "img/night_cloudy_shade.png",
            "陰天": "img/night_overcast.png",
            "多雲": "img/night_cloudy.png",
            "晴時多雲": "img/night_cloudy_sunny_period.png",
            "陰短暫雨": "img/night_short_rain_shade.png",
            "多雲時陰": "img/night_most_cloudy_shade.png",
            "陰有雨": "img/night_rain_shade.png",
            "多雲時晴": "img/night_cloudy_sunny.png",
            "多雲短暫雨": "img/day_short_rain_shade.png",
            "多雲時陰短暫雨": "img/day_short_rain_shade.png",
            "陰時多雲有雨": "img/day_short_rain_shade.png",
            "陰時多雲短暫雨": "img/day_short_rain_shade.png"
        };

        // Display the content on Web Initial Load (嘉義)
        document.querySelector("#tomorrowDayWeather").style.opacity = "1";
        document.querySelector("#tomorrowNightWeather").style.opacity = "1";

        // Weather Description on Web Initial Load (嘉義)
        // 天氣第二格
        if(dataTemp.records.location[0].weatherElement[0].time[1].startTime.split(" ").pop().split(":")[0] + ":00 ~ " + dataTemp.records.location[0].weatherElement[0].time[1].endTime.split(" ").pop().split(":")[0] + ":00" == "18:00 ~ 06:00"){
            document.querySelector("#tomorrowDayWeatherTitle").textContent = "今晚明晨"
        }
        else{
            document.querySelector("#tomorrowDayWeatherTitle").textContent = "明日白天"
        };
        // 天氣第三格
        if(dataTemp.records.location[0].weatherElement[0].time[2].startTime.split(" ").pop().split(":")[0] + ":00 ~ " + dataTemp.records.location[0].weatherElement[0].time[2].endTime.split(" ").pop().split(":")[0] + ":00" == "06:00 ~ 18:00"){
            document.querySelector("#tomorrowNightWeatherTitle").textContent = "明日白天"
        }
        else{
            document.querySelector("#tomorrowNightWeatherTitle").textContent = "明日晚上"
        };

        // Weather Period on Web Initial Load (嘉義)
        document.querySelector("#tomorrowDayWeatherPeriod").textContent = dataTemp.records.location[0].weatherElement[0].time[1].startTime.split(" ").pop().split(":")[0] + ":00 ~ " + dataTemp.records.location[0].weatherElement[0].time[1].endTime.split(" ").pop().split(":")[0] + ":00";
        document.querySelector("#tomorrowNightWeatherPeriod").textContent = dataTemp.records.location[0].weatherElement[0].time[2].startTime.split(" ").pop().split(":")[0] + ":00 ~ " + dataTemp.records.location[0].weatherElement[0].time[2].endTime.split(" ").pop().split(":")[0] + ":00";

        // Weather Mouse Text on Web Initial Load (嘉義)
        document.querySelector("#tomorrowDayWeatherIcon").title = dataTemp.records.location[0].weatherElement[0].time[1].parameter.parameterName;
        document.querySelector("#tomorrowNightWeatherIcon").title = dataTemp.records.location[0].weatherElement[0].time[2].parameter.parameterName;

        // Weather Icon on Web Initial Load (嘉義)
        // 天氣第二格
        if(dataTemp.records.location[0].weatherElement[0].time[1].startTime.split(" ").pop().split(":")[0] + ":00 ~ " + dataTemp.records.location[0].weatherElement[0].time[1].endTime.split(" ").pop().split(":")[0] + ":00" == "06:00 ~ 18:00"){
            document.querySelector("#tomorrowDayWeatherIcon").src = dayWeatherList[dataTemp.records.location[0].weatherElement[0].time[1].parameter.parameterName];
        }
        else{
            document.querySelector("#tomorrowDayWeatherIcon").src = nightWeatherList[dataTemp.records.location[0].weatherElement[0].time[1].parameter.parameterName];
        };
        // 天氣第三格
        if(dataTemp.records.location[0].weatherElement[0].time[2].startTime.split(" ").pop().split(":")[0] + ":00 ~ " + dataTemp.records.location[0].weatherElement[0].time[2].endTime.split(" ").pop().split(":")[0] + ":00" == "06:00 ~ 18:00"){
            document.querySelector("#tomorrowNightWeatherIcon").src = dayWeatherList[dataTemp.records.location[0].weatherElement[0].time[2].parameter.parameterName];
        }
        else{
            document.querySelector("#tomorrowNightWeatherIcon").src = nightWeatherList[dataTemp.records.location[0].weatherElement[0].time[2].parameter.parameterName];
        };

        // Temperature on Web Initial Load (嘉義)
        document.querySelector("#tomorrowDayWeatherTemp").textContent = dataTemp.records.location[0].weatherElement[2].time[1].parameter.parameterName + " °C - " + dataTemp.records.location[0].weatherElement[4].time[1].parameter.parameterName + " °C";
        document.querySelector("#tomorrowNightWeatherTemp").textContent = dataTemp.records.location[0].weatherElement[2].time[2].parameter.parameterName + " °C - " + dataTemp.records.location[0].weatherElement[4].time[2].parameter.parameterName + " °C";
    
        // Rainfall on Web Initial Load (嘉義)
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