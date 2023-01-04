// 請Yan負責這個文件
const model1 = {
    constructor: function(){
        async function getWeatherData(url){
            const response = await fetch(url);
            const data = await response.json();
            return data;
        };
        
        const weatherDataTempPromise = getWeatherData("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-25142137-EFE4-4F9E-9B46-D41BF5BD73D5");
        const weatherDataRainfallPromise = getWeatherData("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0002-001?Authorization=CWB-25142137-EFE4-4F9E-9B46-D41BF5BD73D5");
        
        Promise.all([weatherDataTempPromise, weatherDataRainfallPromise])
        .then(([dataTemp, dataRainfall]) => {
            view1.render(dataTemp, dataRainfall);
        });
    }
};

const view1 = {
    render: function(dataTemp, dataRainfall){
        const moment = {
            'TD':{'Desc':'今日白天','12HrsTimeRange':'06:00 ~ 18:00','6HrsTimeRange':'12:00 ~ 18:00'},
            'TN':{'Desc':'今晚明晨','12HrsTimeRange':'18:00 ~ 06:00','6HrsTimeRange':'00:00 ~ 06:00'},
            'TM':{'Desc':'明日白天','12HrsTimeRange':'06:00 ~ 18:00','6HrsTimeRange':'12:00 ~ 18:00'},
            'TMN':{'Desc':'明日晚上','12HrsTimeRange':'18:00 ~ 06:00','6HrsTimeRange':'00:00 ~ 06:00'}
        };

        const dayWeatherList = {
            "陰時多雲": "/img/day_cloudy_shade.png",
            "陰天": "/img/day_overcast.png",
            "多雲": "/img/day_cloudy.png",
            "晴時多雲": "/img/day_cloudy_sunny_period.png",
            "陰短暫雨": "/img/day_short_rain_shade.png",
            "多雲時陰": "/img/day_most_cloudy_shade.png",
            "陰有雨": "/img/day_rain_shade.png",
            "多雲時晴": "/img/day_cloudy_sunny.png",
            "多雲短暫雨": "/img/day_short_rain_shade.png",
            "陰時多雲有雨": "/img/day_short_rain_shade.png",
            "陰時多雲短暫雨": "/img/day_short_rain_shade.png"
        };

        const nightWeatherList = {
            "陰時多雲": "/img/night_cloudy_shade.png",
            "陰天": "/img/night_overcast.png",
            "多雲": "/img/night_cloudy.png",
            "晴時多雲": "/img/night_cloudy_sunny_period.png",
            "陰短暫雨": "/img/night_short_rain_shade.png",
            "多雲時陰": "/img/night_most_cloudy_shade.png",
            "陰有雨": "/img/night_rain_shade.png",
            "多雲時晴": "/img/night_cloudy_sunny.png",
            "多雲短暫雨": "/img/day_short_rain_shade.png",
            "陰時多雲有雨": "/img/day_short_rain_shade.png",
            "陰時多雲短暫雨": "/img/day_short_rain_shade.png"
        };
        // Set Date, Description and Time Range
        let date = new Date();
        document.querySelector("#date").textContent = date.getMonth()+1 + "/" + date.getDate();

        if(date.getHours() >= 0 && date.getHours() < 6){
            document.querySelector("#today-desc").textContent = moment.TN.Desc;
            document.querySelector("#today-time-range").textContent =  moment.TN["6HrsTimeRange"];
        }else if(date.getHours() && date.getHours() < 18){
            document.querySelector("#today-desc").textContent = moment.TD.Desc;
            if(date.getHours() >= 12)
                document.querySelector("#today-time-range").textContent =  moment.TD["6HrsTimeRange"];
            else
                document.querySelector("#today-time-range").textContent =  moment.TD["12HrsTimeRange"];
        }else{
            document.querySelector("#today-desc").textContent = moment.TN.Desc;
            document.querySelector("#today-time-range").textContent =  moment.TN["12HrsTimeRange"];
        }

        // Set Locatoin items
        for(let i=0; i<dataTemp.records.location.length; i++){
            let locationItems = document.createElement("option");
            locationItems.setAttribute("value", i);
            let name = document.createTextNode(dataTemp.records.location[i].locationName);
            locationItems.appendChild(name);
            document.querySelector("#locationSelect").appendChild(locationItems);
        }

        document.querySelector("#locationSelect").addEventListener('change', (event)=>{

            document.querySelector("#location").textContent = dataTemp.records.location[event.target.value].locationName + " ";

            // Weather Icon
            document.querySelector("#today-weather-img").src = dayWeatherList[dataTemp.records.location[event.target.value].weatherElement[0].time[0].parameter.parameterName];
            
            // Temperature
            document.querySelector("#today-temp").textContent = dataTemp.records.location[event.target.value].weatherElement[2].time[0].parameter.parameterName + " °C - " + dataTemp.records.location[event.target.value].weatherElement[4].time[0].parameter.parameterName + " °C";
        })

        // Set Default Value
        document.querySelector("#location").textContent = dataTemp.records.location[0].locationName + " ";

        // Weather Icon
        document.querySelector("#today-weather-img").src = dayWeatherList[dataTemp.records.location[0].weatherElement[0].time[0].parameter.parameterName];
        
        // Temperature
        document.querySelector("#today-temp").textContent = dataTemp.records.location[0].weatherElement[2].time[0].parameter.parameterName + " °C - " + dataTemp.records.location[0].weatherElement[4].time[0].parameter.parameterName + " °C";
    
        // Rainfall
        document.querySelector("#today-rain").textContent = dataRainfall.records.location[4].weatherElement[6].elementValue + " mm";
    }
};

const control = {
    constructor : function(){
        model1.constructor();
    }
};
control.constructor();