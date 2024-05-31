import { Cardvinilo } from '../../types/index';
import { getMusic } from '../../services/index';


const FormData: Omit<Cardvinilo, 'id'> = {
	image: '',
	Title: '',
	Artist: '',
	Price: '',
	Stock: '',
};

class Vinilo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	async render() {
		

		const vinilo = await getMusic();
		vinilo.forEach((song: Cardvinilo) => {
			const container = this.ownerDocument.createElement('section');
			const image = this.ownerDocument.createElement('img');
			image.innerText = song.image;
			container.appendChild(image);

			const Title = this.ownerDocument.createElement('H1');
			Title.innerText = song.Title;
			container.appendChild(Title);

			const Author = this.ownerDocument.createElement('p');
			Author.innerText = song.Artist;
			container.appendChild(Author);

			const Album = this.ownerDocument.createElement('p');
			Album.innerText = song.Price;
			container.appendChild(Album);

			const DateAdded = this.ownerDocument.createElement('p');
			DateAdded.innerText = song.Stock;
			container.appendChild(DateAdded);

			this.shadowRoot?.appendChild(container);
		});
	}
}

customElements.define('custom-vinilo', Vinilo);
export default Vinilo;