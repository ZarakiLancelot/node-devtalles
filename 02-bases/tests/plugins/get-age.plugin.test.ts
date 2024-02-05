import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {
  const birthdate = '1987-07-31';
  const age = getAge(birthdate);

  it('getAge() should return 37', () => {
    expect(age).toBe(37);
  });

  it('getAge() should return a number as age', () => {
    expect(typeof age).toBe('number');
  });

  it('getAge() should return 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1987);
    const birthdate = '1987-07-31';
    const age = getAge(birthdate);
    expect(age).toBe(0);
  });
});
