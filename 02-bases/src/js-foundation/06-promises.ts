// const { httpClient } = require('../plugins');
// import { httpClientPlugin as httpClient } from '../plugins/http-client.plugin';
import { httpClient } from '../plugins';

export const getPokemonById = async(id: string | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);
    return pokemon.name;    
  } catch (error) {
    throw new Error(`Pokemon NOT found with id: ${id}`);
  }


  // const response = await fetch(url);
  // const pokemon = await response.json();

  // throw new Error('Pokemon NOT found');


  // return fetch( url )
  //   .then( (response) => response.json())
  //   // .then( () => { throw new Error('Pokemon not found') })
  //   .then( (pokemon) => pokemon.name );
}
