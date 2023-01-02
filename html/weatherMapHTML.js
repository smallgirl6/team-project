// 請(1)Nina和(2)緯宸負責這個文件。為避免文件有衝突，請你們只有其中一位發PR給我

class WeatherMap extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div>Weather Map</div>
        `;
    };
    
};

customElements.define("weather-map", WeatherMap);