import { api } from './api';

describe('Test API key', () => {
  it('returns API Key', () => {
    expect(api('123')).toBe('123');
  });
});
