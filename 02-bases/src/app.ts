// const { getAge, getUUID, http, buildLogger } = require('./plugins');
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow-functions');
// const { buildMakePerson } = require('./js-foundation/05-factory-functions');
// const getPokemonById = require('./js-foundation/06-promises');

import { getPokemonById } from "./js-foundation/06-promises";
import { buildLogger } from "./plugins/logger.plugin";

// console.log(emailTemplate);

/*
const ID = 2;
getUserById(ID, (error, user) => {
  if(error){
    throw new Error(error);
  }

  console.log({user});
});
*/

// Factory Functions
// const makePerson = buildMakePerson({ getUUID, getAge });
// const person = { name: 'Sandy', birthdate: '1987-07-31' };
// const sandy = makePerson(person);
// console.log({sandy});

// Promises
// getPokemonById(1)
//   .then( (pokemon) => console.log({pokemon}) )
//   .catch( (error) => console.error(error.message) )
//   .finally( () => console.log('END') );

// const logger = buildLogger('app.js');
// logger.log('Hola Mundo');
// logger.error('Una prueba de ERROR!');
