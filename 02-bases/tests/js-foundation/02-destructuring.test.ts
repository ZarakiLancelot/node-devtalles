import { dcHeroes } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/destructuring.ts', () => {
  it('should contains an array of strings', () => {
    expect(dcHeroes).toEqual(expect.any(Array));
  });

  it('should contains Flash, Superman', () => {
    expect(dcHeroes).toEqual(expect.arrayContaining(['Flash', 'Superman']));
  });

  it('first character should be Flash', () => {
    expect(dcHeroes[0]).toBe('Flash');
  });

  it('last character should be Aquaman', () => {
    expect(dcHeroes[dcHeroes.length - 1]).toBe('Aquaman');
  });

  it('should contains 6 elements', () => {
    expect(dcHeroes.length).toBe(6);
  });

  it('second character should be Superman', () => {
    const [, hero] = dcHeroes;
    expect(hero).toBe('Superman');
  });
});
