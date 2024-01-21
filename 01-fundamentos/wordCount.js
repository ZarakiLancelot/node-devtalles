const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const reactWordCount = content.match(/react/gi ?? []).length;

console.log(`The word 'React' appears ${reactWordCount} times in the README.md file.`);
