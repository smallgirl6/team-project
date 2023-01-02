// 請俐蓉負責這個文件

class UVIndex extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div>UV Index</div>
        `;
    };
    
};

customElements.define("uv-index", UVIndex);