const model = {
    init: function(){
        const API_KEY = "CWB-DF2CB80E-CB70-453A-B35E-80356742388A";
        
        async function getWeatherData(url){
            const response = await fetch(url);
            const dataTemp = await response.json();
            return dataTemp;
        };
        
        getWeatherData("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=" + API_KEY)
        .then(dataTemp => {
            view.render(dataTemp);
            view.renderDescriptionAndIcon(dataTemp);
            view.renderWeatherTimeslot(dataTemp);
            view.renderTemperature(dataTemp);
            view.renderRainfall(dataTemp);
            view.renderMouseText(dataTemp);
        })
        .catch(err => {
            view.renderError(err);
        });
    }
};

const view = {
    render: function(){
        // Display the content on web initial load (嘉義)
        $("#tomorrowDayWeather").css("opacity", "1");
        $("#tomorrowNightWeather").css("opacity", "1");
    },
    renderDescriptionAndIcon: function(dataTemp){
        // Display (1) weather description, and (2) weather icon on web initial load (嘉義)
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

        // Weather Timeslots
        const weatherTimeslot1 = dataTemp.records.location[0].weatherElement[0].time[1];
        const weatherTimeslot2 = dataTemp.records.location[0].weatherElement[0].time[2];
        const dayTimeslot = weatherTimeslot2.startTime.split(" ").pop().split(":")[0] + ":00 ~ " + weatherTimeslot2.endTime.split(" ").pop().split(":")[0] + ":00";

        if(dayTimeslot == "06:00 ~ 18:00"){
            // Weather Description
            $("#tomorrowDayWeatherTitle").text("今晚明晨");
            $("#tomorrowNightWeatherTitle").text("明日白天");
            // Weather Icon
            $("#tomorrowDayWeatherIcon").attr("src", nightWeatherList[weatherTimeslot1.parameter.parameterName]);
            $("#tomorrowNightWeatherIcon").attr("src", dayWeatherList[weatherTimeslot2.parameter.parameterName]);
        }
        else{
            // Weather Description
            $("#tomorrowDayWeatherTitle").text("明日白天");
            $("#tomorrowNightWeatherTitle").text("明日晚上");
            // Weather Icon
            $("#tomorrowDayWeatherIcon").attr("src", dayWeatherList[weatherTimeslot1.parameter.parameterName]);
            $("#tomorrowNightWeatherIcon").attr("src", nightWeatherList[weatherTimeslot2.parameter.parameterName]);
        };
    },
    renderWeatherTimeslot: function(dataTemp){
        // Display weather timeslots on web initial load (嘉義)

        // Weather Timeslots
        const weatherTimeslot1 = dataTemp.records.location[0].weatherElement[0].time[1];
        const weatherTimeslot2 = dataTemp.records.location[0].weatherElement[0].time[2];
        // Day and Night Timeslots
        const dayTimeslot = weatherTimeslot2.startTime.split(" ").pop().split(":")[0] + ":00 ~ " + weatherTimeslot2.endTime.split(" ").pop().split(":")[0] + ":00";
        const nightTimeslot = weatherTimeslot1.startTime.split(" ").pop().split(":")[0] + ":00 ~ " + weatherTimeslot1.endTime.split(" ").pop().split(":")[0] + ":00";

        $("#tomorrowDayWeatherPeriod").text(nightTimeslot);
        $("#tomorrowNightWeatherPeriod").text(dayTimeslot);
    },
    renderMouseText: function(dataTemp){
        // Weather Timeslots
        const weatherTimeslot1 = dataTemp.records.location[0].weatherElement[0].time[1];
        const weatherTimeslot2 = dataTemp.records.location[0].weatherElement[0].time[2];

        // Weather mouse text on web initial load (嘉義)
        $("#tomorrowDayWeatherIcon").attr("title", weatherTimeslot1.parameter.parameterName);
        $("#tomorrowNightWeatherIcon").attr("title", weatherTimeslot2.parameter.parameterName);
    },
    renderTemperature: function(dataTemp){
        // Display temperatures on web initial load (嘉義)

        // Temperature and Rainfall Locations
        const tempRainfallLocation = dataTemp.records.location[0];
        // Tomorrow Day Minimum and Maximum Temperatures
        const tomorrowDayMinTemp = tempRainfallLocation.weatherElement[2].time[1].parameter.parameterName + " °C - ";
        const tomorrowDayMaxTemp = tempRainfallLocation.weatherElement[4].time[1].parameter.parameterName + " °C";
        // Tomorrow Night Minimum and Maximum Temperatures
        const tomorrowNightMinTemp = tempRainfallLocation.weatherElement[2].time[2].parameter.parameterName + " °C - ";
        const tomorrowNightMaxTemp = tempRainfallLocation.weatherElement[4].time[2].parameter.parameterName + " °C";

        $("#tomorrowDayWeatherTemp").text(tomorrowDayMinTemp + tomorrowDayMaxTemp);
        $("#tomorrowNightWeatherTemp").text(tomorrowNightMinTemp + tomorrowNightMaxTemp);
    },
    renderRainfall: function(dataTemp){
        // Display rainfall on web initial load (嘉義)
        const tempRainfallLocation = dataTemp.records.location[0];
        const tomorrowDayRainfall = tempRainfallLocation.weatherElement[1].time[1].parameter.parameterName + " %";
        const tomorrowNightRainfall = tempRainfallLocation.weatherElement[1].time[2].parameter.parameterName + " %";

        $("#tomorrowDayRainfallRate").text(tomorrowDayRainfall);
        $("#tomorrowNightRainFallRate").text(tomorrowNightRainfall);
    },
    renderError: function(err){
        console.log("Error: " + err);
    }
};

const controller = {
    init: function(){
        model.init();
    }
};
controller.init();