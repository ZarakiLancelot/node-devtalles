import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
  it('should return a pokemon by id', async () => {
    const pokemonID = 1;
    const pokemonName = await getPokemonById(pokemonID);
    expect(pokemonName).toBe('bulbasaur');
  });

  it('should throw an error if pokemon is not found', async () => {
    const pokemonID = 99999;
    await expect(getPokemonById(pokemonID)).rejects.toThrow(
      `Pokemon NOT found with id: ${pokemonID}`
    );
    // try {
    //   await getPokemonById(pokemonID);
    //   expect(true).toBeFalsy();
    // } catch (error) {
    //   expect(error).toBe(`Pokemon NOT found with id: ${pokemonID}`);
    // }
  });
});
