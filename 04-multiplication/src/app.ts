import { yargPlugin as argv, yargPlugin } from './config/plugins/yargs.plugin';
import { ServerApp } from './presentation/server-app';

// console.log(argv);

// Función anónima autoejecutable
(async () => {
  await main();
})();

async function main() {
  const { b:base, l:limit, s:showTable, n:fileName, d:destinationPath } = argv;
  ServerApp.run({ base, limit, showTable, fileName, destinationPath });
}
