class WeatherMap extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `

        `;
    };
    
};

customElements.define("weather-map", WeatherMap);