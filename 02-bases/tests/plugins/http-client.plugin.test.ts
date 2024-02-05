import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin.ts', () => {
  describe('httpClientPlugin().get', () => {
    it('should return a pokemon', async () => {
      expect(httpClientPlugin.get).toBeInstanceOf(Function);
      const pokemon = await httpClientPlugin.get('https://pokeapi.co/api/v2/pokemon/1');
      expect(pokemon.name).toBe('bulbasaur');
    });
  });

  describe('httpClientPlugin().post', () => {
    it('should throw an error', async () => {
      expect(httpClientPlugin.post).toBeInstanceOf(Function);
      await expect(httpClientPlugin.post('https://pokeapi.co/api/v2/pokemon/1', {}))
        .rejects.toThrow('Not implemented');
    });
  });

  describe('httpClientPlugin().put', () => {
    it('should throw an error', async () => {
      expect(httpClientPlugin.put).toBeInstanceOf(Function);
      await expect(httpClientPlugin.put('https://pokeapi.co/api/v2/pokemon/1', {}))
        .rejects.toThrow('Not implemented');
    });
  });

  describe('httpClientPlugin().delete', () => {
    it('should throw an error', async () => {
      expect(httpClientPlugin.delete).toBeInstanceOf(Function);
      await expect(httpClientPlugin.delete('https://pokeapi.co/api/v2/pokemon/1'))
        .rejects.toThrow('Not implemented');
    });
  });
});
