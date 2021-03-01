import Message from './error';

describe('Error component', () => {
  const message = new Message();

  it('Add error to the page', () => {
    message.addError('Some City');

    expect(document.querySelector('.error').innerText).toBe(
      "Some City city doesn't exist, please try again ;)",
    );
  });

  it('Removes error from the page', () => {
    message.removeError();

    expect(document.querySelector('.error')).toBeNull();
  });
});
