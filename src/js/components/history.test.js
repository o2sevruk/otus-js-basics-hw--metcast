import History from './history';

describe('History component', () => {
	const history = new History();

	it('Add history to the page', () => {
		history.addHistory();

		expect(document.querySelector('.history')).toBeDefined();
	});

	it('Clear history', () => {
		history.clearHistory();

		expect(document.querySelector('.history').textContent).toBe('');
	});

	it('Add item to the history', () => {
		history.addItemToHistory('Moscow');

		expect(document.querySelector('.history li')).toBeDefined();
	});

	it('Add placeholder text if history is empty', () => {
		history.addEmpty();

		expect(document.querySelector('.empty')).toBeDefined();
	});

	it('Add placeholder text from the page', () => {
		history.removeEmpty();

		expect(document.querySelector('.empty')).toBeNull();
	});
});