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
    const cb = jest.fn(() => true);

    history.addItemToHistory('Moscow', cb);

    const historyEl = document.querySelector('.history li');

    historyEl.click();

    expect(cb).toHaveBeenCalledTimes(1);
    expect(historyEl).toBeDefined();
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
