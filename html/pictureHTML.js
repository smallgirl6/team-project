// 請Yan負責這個文件

class pictures extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <div>
                <div id="layout" class="layout">
                    <div class="split3">
                        <div id="leftButton" class="leftButton">
                            <img class="right" src="img/left.png">
                        </div>

                        <div class="middle">
                            <div></div>
                            <div id="dotCount">
                                <!-- <img src="img/whiteDot.png">
                                <img src="img/whiteDot.png">
                                <img src="img/whiteDot.png">
                                <img src="img/whiteDot.png"> -->
                            </div>
                        </div>
                        <div id="rightButton" class="rightButton">
                            <img class="right" src="img/right.png">
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
    };
    
};

customElements.define("picture-1", pictures);