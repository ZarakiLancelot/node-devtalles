// const getAgePlugin = require('get-age');

export const getAge = (birthdate: string): number => {
  // return getAgePlugin(birthdate);
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
