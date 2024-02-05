"use strict";
// const { getUUID } = require('../plugins/get-uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPersonOptions = void 0;
const buildPersonOptions = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildPersonOptions = buildPersonOptions;
// const Sandy = buildPerson( person );
// console.log(Sandy);
