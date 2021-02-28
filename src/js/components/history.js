export default class History {
	constructor() {
		this.history = {
			el: document.createElement('ul'),
			id: 'history',
			className: 'history'
		};
		this.empty = {
			el: document.createElement('h4'),
			id: 'empty',
			className: 'empty'
		};
	}

	addHistory(mountTarget = document.body) {
		const history = this.history.el;
		history.id = this.history.id;
		history.classList.add(this.history.className);

		mountTarget.appendChild(history);
	}

	clearHistory() {
		this.history.el.innerHTML = '';
	}

	addItemToHistory(city, cb = undefined) {
		const historyItem = document.createElement('li');
		historyItem.innerText = city;

		if(cb) {
			historyItem.addEventListener('click', cb);
		}

		this.history.el.appendChild(historyItem);
	}

	addEmpty(mountTarget = document.body) {
		const empty = this.empty.el;
		empty.id = this.empty.id;
		empty.innerText = 'Search history is empty :(';
		empty.classList.add(this.empty.className);

		mountTarget.appendChild(empty);
	}

	removeEmpty() {
		this.empty.el.remove();
	}
}