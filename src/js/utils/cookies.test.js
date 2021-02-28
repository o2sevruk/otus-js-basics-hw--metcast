import { setCookies, getCookies } from './cookies';

describe('Set and get data from localstorage', () => {
  const KEY = 'weatherHistory';
  const VALUE = 'Moscow';

  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    localStorage.setItem.mockRestore();
  });

  it('Set data to localstorage', () => {
    setCookies(VALUE);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      KEY,
      JSON.stringify([VALUE]),
    );
  });

  it('Get data from localstorage', () => {
    expect(getCookies()).toEqual([VALUE]);
  });
});
