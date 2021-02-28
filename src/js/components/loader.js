export default class Loader {
	constructor() {
		this.el = document.createElement('img');
		this.id = 'loader';
		this.className = 'loader';
		this.src = 'src/img/loader.svg';
	}

	addLoader(mountTarget = document.body) {
		const loader = this.el;
		loader.id = this.id;
		loader.src = this.src;
		loader.classList.add(this.className);

		mountTarget.appendChild(loader);
	}

	removeLoader() {
		this.el.remove();
	}
}