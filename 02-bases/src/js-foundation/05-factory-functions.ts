// const { getUUID } = require('../plugins/get-uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');

// const person = { name: 'Sandy', birthdate: '1987-07-31' };

interface BuildPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildPersonOptions = ({ getUUID, getAge }: BuildPersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate)
    }
  }
}

// const Sandy = buildPerson( person );
// console.log(Sandy);
