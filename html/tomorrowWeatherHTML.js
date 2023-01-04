class TomorrowWeather extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div class="tomorrow-weather-container">

                <div id="tomorrowDayWeather" class="tomorrow-day-weather border">
                    <div class="tomorrow-day-weather-title">明日白天</div>
                    <div class="tomorrow-day-weather-period">06:00 ~ 18:00</div>
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

                <div id="tomorrowNightWeather" class="tomorrow-night-weather">
                    <div class="tomorrow-night-weather-title">明日晚上</div>
                    <div class="tomorrow-night-weather-period">18:00 ~ 06:00</div>
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