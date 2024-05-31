import menuStyles from  './menuBar.css';

class MenuBar extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.shadowRoot.innerHTML += `
              <style>${menuStyles}</style>
              <nav class="menu-bar">
                  <div class="bar">
                  <p> Home <p/>
                  <p> Add new product <p/>
                  <p> Madofy products <p/>
                  </div>

              </nav>
            
          `;
		}
	}
}

customElements.define('menu-bar', MenuBar);
export default MenuBar;