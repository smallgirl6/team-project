// 請俐蓉負責這個文件

class AirQuality extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div>Air Quality</div>
        `;
    };
    
};

customElements.define("air-quality", AirQuality);