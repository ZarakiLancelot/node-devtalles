// console.log(process.env);

const { SHELL, PWD, USER, RUBY_VERSION } = process.env;
// console.table({ SHELL, PWD, USER, RUBY_VERSION });

export const dcHeroes = ['Flash', 'Superman', 'Batman', 'Wonder Woman', 'Green Lantern', 'Aquaman'];
const [ fastest, strongest, smartest ] = dcHeroes;
// console.table({ fastest, strongest, smartest });
