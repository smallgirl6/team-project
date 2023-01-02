// 請Yan負責這個文件

class TodayWeather extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div>Today's Weather</div>
        `;
    };
    
};

customElements.define("today-weather", TodayWeather);