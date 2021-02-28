import Loader from './loader';

describe('Loader component', () => {
	const loader = new Loader();

	it('Add loader to the page', () => {
		loader.addLoader();

		expect(document.querySelector('.loader')).toBeDefined();
	});

	it('Removes loader from the page', () => {
		loader.removeLoader();

		expect(document.querySelector('.loader')).toBeNull();
	});
});