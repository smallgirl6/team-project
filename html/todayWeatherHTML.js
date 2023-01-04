// 請Yan負責這個文件

class TodayWeather extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div class="grid-container">
                <div class="grid-item">
                    <div class="space locationSize"><span id="location"></span><span id="date"></span></div>
                    <div class="icon-grid-container space">
                        <div class="icon-grid-item">
                            <div class="iconText-margin"><i class="fa fa-plus icon" aria-hidden="true"></i></div>更多
                        </div>
                        <div class="icon-grid-item">
                            <div class="iconText-margin"><i class="fa fa-map-marker icon" aria-hidden="true"></i></div>定位
                        </div>
                        <div class="icon-grid-item">
                            <div class="iconText-margin"><i class="fa fa-heart icon" aria-hidden="true"></i></div>最愛
                        </div>
                        <div class="icon-grid-item">
                            <div class="iconText-margin"><i class="fa fa-question icon" aria-hidden="true"></i></div>說明
                        </div>
                    </div>
                    <div>
                        <select id="locationSelect"></select>
                    </div>
                </div>
                <div class="grid-item">
                    <p id="today-desc" class="space"></p>
                    <p id="today-time-range" class="space"></p>
                    <p class="img-p"><img id="today-weather-img"></p>
                    <p id="today-temp" class="space"></p>
                    <p class="space todat-rainfall"><img class="icon_umbrella" src="/img/icon_umbrella.png">&ensp;<span id="today-rain"></span></p>
                </div>
            </div>
        `;
    };
    
};

customElements.define("today-weather", TodayWeather);