
// componentes
import '../components/export'
import CardVinilo from '../components/Cardvinilo/cardVinilo';
import MenuBar from '../components/menu/menuBar';

class Home extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
    }

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML += ``;
		}

		const menuBar = this.ownerDocument.createElement('menu-bar') as MenuBar;
		menuBar.className = 'menubar';

		const container = this.ownerDocument.createElement('section');
		container.className = 'container';

		const CardVinilo = this.ownerDocument.createElement('div');
        CardVinilo.appendChild(CardVinilo);
		;
		container.appendChild(CardVinilo);

		this.shadowRoot?.appendChild(container);
	}
}

customElements.define('app-home', Home);
export default Home;