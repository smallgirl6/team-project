class UVIndex extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <div id="div-uv-index">
                <div id="UVIndexContent" style="opacity:0">
                    <p>UV紫外線指數</p>

                    <div id="dropdown-station-name">
                        <label for="station-names">選擇測站：</label>
                        <select name="station-names" id="select-station-names">
                        </select>
                    </div>

                    <div id="icon-and-bar">
                        <div id="uv-index-emoji">&#9728</div>
                        <div id="uv-index-bar">
                        </div>
                    </div>

                    <p id="uv-index-datatime"></p>
                </div>
            </div>
        `;
    };

};

customElements.define("uv-index", UVIndex);