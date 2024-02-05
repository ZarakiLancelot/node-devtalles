"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
// const { httpClient } = require('../plugins');
// import { httpClientPlugin as httpClient } from '../plugins/http-client.plugin';
const plugins_1 = require("../plugins");
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield plugins_1.httpClient.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw new Error(`Pokemon NOT found with id: ${id}`);
    }
    // const response = await fetch(url);
    // const pokemon = await response.json();
    // throw new Error('Pokemon NOT found');
    // return fetch( url )
    //   .then( (response) => response.json())
    //   // .then( () => { throw new Error('Pokemon not found') })
    //   .then( (pokemon) => pokemon.name );
});
exports.getPokemonById = getPokemonById;
