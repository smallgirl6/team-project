// 請KM負責這個文件

class TomorrowWeather extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div>Tomorrow's Weather</div>
        `;
    };
    
};

customElements.define("tomorrow-weather", TomorrowWeather);