import Form from './form';

describe('Form component', () => {
  const form = new Form();

  it('Add form to the page', () => {
    form.addForm();

    expect(document.querySelector('.form')).toBeDefined();
    expect(document.querySelector('.input')).toBeDefined();
    expect(document.querySelector('.btn')).toBeDefined();
  });

  it('Get form element', () => {
    const formEL = form.getForm;

    expect(formEL).toBeDefined();
  });

  it('Set value to the input', () => {
    form.setValue('Moscow');

    expect(document.querySelector('.input').value).toBe('Moscow');
  });

  it('Get value of the input', () => {
    expect(form.getValue).toBe('Moscow');
  });
});
