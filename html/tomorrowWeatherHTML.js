class TomorrowWeather extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div class="tomorrow-weather-container">
                <!--明日白天-->
                <div id="tomorrowDayWeather" class="tomorrow-day-weather border">
                    <div id="tomorrowDayWeatherTitle" class="tomorrow-day-weather-title"></div>
                    <div id="tomorrowDayWeatherPeriod" class="tomorrow-day-weather-period"></div>
                    <div class="tomorrow-day-weather-icon-frame">
                        <img id="tomorrowDayWeatherIcon" class="tomorrow-day-weather-icon"><!--明日白天圖片-->
                    </div>
                    <div id="tomorrowDayWeatherTemp" class="tomorrow-day-weather-temp"><!--明日白天溫度DIV-->></div>
                    <div class="tomorrow-day-rainfall">
                        <div class="tomorrow-day-rainfall-icon">
                            <img src="img/icon_umbrella.png">
                        </div>
                        <div id="tomorrowDayRainfallRate" class="tomorrow-day-rainfall-rate"><!--明日白天降雨量DIV--></div>
                    </div>
                </div>

                <!--明日晚上-->
                <div id="tomorrowNightWeather" class="tomorrow-night-weather">
                    <div id="tomorrowNightWeatherTitle" class="tomorrow-night-weather-title"></div>
                    <div id="tomorrowNightWeatherPeriod" class="tomorrow-night-weather-period"></div>
                    <div class="tomorrow-night-weather-icon-frame">
                        <img id="tomorrowNightWeatherIcon" class="tomorrow-night-weather-icon"><!--明日晚上圖片-->
                    </div>
                    <div id="tomorrowNightWeatherTemp" class="tomorrow-night-weather-temp"><!--明日晚上溫度DIV--></div>
                    <div class="tomorrow-night-rainfall">
                        <div class="tomorrow-night-rainfall-icon">
                            <img src="img/icon_umbrella.png">
                        </div>
                        <div id="tomorrowNightRainFallRate" class="tomorrow-night-rainfall-rate"><!--明日晚上降雨量DIV--></div>
                    </div>
                </div>
            </div>
        `;
    };
    
};

customElements.define("tomorrow-weather", TomorrowWeather);