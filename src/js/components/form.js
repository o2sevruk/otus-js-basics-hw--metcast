export default class Form {
  constructor() {
    this.form = {
      el: document.createElement('form'),
      id: 'form',
      className: 'form',
    };
    this.input = {
      el: document.createElement('input'),
      id: 'input',
      className: 'input',
    };
    this.btn = {
      el: document.createElement('button'),
      id: 'btn',
      className: 'btn',
    };
  }

  addForm(mountTarget = document.body) {
    const form = this.form.el;
    form.id = this.form.id;
    form.classList.add(this.form.className);

    const input = this.input.el;
    input.type = 'text';
    input.id = this.input.id;
    input.classList.add(this.input.className);

    const btn = this.btn.el;
    btn.id = this.btn.id;
    btn.type = 'submit';
    btn.innerText = 'Search';
    btn.classList.add(this.btn.className);

    form.appendChild(input);
    form.appendChild(btn);
    mountTarget.appendChild(form);
  }

  get getForm() {
    return this.form.el;
  }

  get getValue() {
    return this.input.el.value;
  }

  setValue(newVal) {
    this.input.el.value = newVal;
  }
}
