export default class Message {
	constructor() {
		this.el = document.createElement('div');
		this.id = 'error';
		this.className = 'error';
	}

	addError(text, mountTarget = document.body) {
		const error = this.el;
		error.id = this.id;
		error.innerText = `${text} city doesn't exist, please try again ;)`;
		error.classList.add(this.className);

		mountTarget.appendChild(error);
	}

	removeError() {
		this.el.remove();
	}
}