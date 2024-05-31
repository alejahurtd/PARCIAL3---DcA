import cardStyles from  './cardVinilo.css';
import { Cardvinilo } from '../../types/index';
import { addMusic } from '../../services/index';
const FormData: Omit<Cardvinilo, 'id'> = {
	image: '',
	Title: '',
	Artist: '',
	Price: '',
	Stock: '',
};

class CardVinilo extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}
	changeimage(e: any) {
		FormData.Title = e?.target?.value;
	}
	changeTitle(e: any) {
		FormData.image = e?.target?.value;
	}
	changeArtist(e: any) {
		FormData.Artist = e?.target?.value;
	}
	changePrice(e: any) {
		FormData.Price= e?.target?.value;
	}
	changeStock(e: any) {
		FormData.Stock = e?.target?.value;
	}

	submitForm() {
		addMusic(FormData);
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const css = this.ownerDocument.createElement('style');
			css.innerHTML = cardStyles;
			this.shadowRoot?.appendChild(css);

			const title = this.ownerDocument.createElement('h1');
			title.innerText = 'Add a new product';
			this.shadowRoot?.appendChild(title);

			const image = this.ownerDocument.createElement('input');
			image.type = 'file';
			image.addEventListener('change', this.changeimage);
			this.shadowRoot?.appendChild(image);

			const Title = this.ownerDocument.createElement('input');
			Title.placeholder = 'Title';
			Title.addEventListener('change', this.changeTitle);
			this.shadowRoot?.appendChild(Title);

			const Author = this.ownerDocument.createElement('input');
			Author.placeholder = 'Artist';
			Author.addEventListener('change', this.changeArtist);
			this.shadowRoot?.appendChild(Author);

			const Album = this.ownerDocument.createElement('input');
			Album.placeholder = 'Price';
			Album.addEventListener('change', this.changePrice);
			this.shadowRoot?.appendChild(Album);

			const DateAdded = this.ownerDocument.createElement('input');
			DateAdded.placeholder = 'Stock';
			DateAdded.addEventListener('change', this.changeStock);
			this.shadowRoot?.appendChild(DateAdded);

			const save = this.ownerDocument.createElement('button');
			save.innerText = 'ADD';
			save.addEventListener('click', this.submitForm);
			this.shadowRoot?.appendChild(save);

			const songs = this.ownerDocument.createElement('custom-songs');
			this.shadowRoot?.appendChild(songs);
		}
	}
}

customElements.define('vinilo-card', CardVinilo);
export default CardVinilo;












