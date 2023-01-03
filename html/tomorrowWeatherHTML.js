class TomorrowWeather extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div class="tomorrow-weather-container">

                <div id="todayNightWeather" class="today-night-weather border">
                    <div class="today-night-weather-title">今晚明晨</div>
                    <div class="today-night-weather-period">18:00 ~ 06:00</div>
                    <div class="today-night-weather-icon-frame">
                        <img id="todayNightWeatherIcon" class="today-night-weather-icon" src="">
                    </div>
                    <div id="todayNightWeatherTemp" class="today-night-weather-temp"><!--今晚明晨溫度DIV-->></div>
                    <div class="today-night-rainfall">
                        <div class="today-night-rainfall-icon">
                            <img src="/img/icon_umbrella.png" src="">
                        </div>
                        <div id="todayNightRainfallRate" class="today-night-rainfall-rate"><!--今晚明晨降雨量DIV--></div>
                    </div>
                </div>

                <div id="tomorrowDayWeather" class="tomorrow-day-weather">
                    <div class="tomorrow-day-weather-title">明日白天</div>
                    <div class="tomorrow-day-weather-period">06:00 ~ 18:00</div>
                    <div class="tomorrow-day-weather-icon-frame">
                        <img id="todayDayWeatherIcon" class="tomorrow-day-weather-icon" src="">
                    </div>
                    <div id="tomorrowDayWeatherTemp" class="tomorrow-day-weather-temp"><!--明日白天溫度DIV--></div>
                    <div class="tomorrow-day-rainfall">
                        <div class="tomorrow-day-rainfall-icon">
                            <img src="/img/icon_umbrella.png">
                        </div>
                        <div id="tomorrowDayRainFallRate" class="tomorrow-day-rainfall-rate"><!--今明日白天降雨量DIV--></div>
                    </div>
                </div>

            </div>
        `;
    };
    
};

customElements.define("tomorrow-weather", TomorrowWeather);