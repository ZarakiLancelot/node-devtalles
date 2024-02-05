import fs from 'fs';
import { yargPlugin as yarg } from './config/plugins/yargs.plugin';

function tablaMultiplicar(base:number, limite:number):string {
  let outputMessage:string = '';
  const headerMessage:string = `
  ======================================
               Tabla del ${base}
  ======================================
  `;
  for(let i = 1; i <= limite; i++) {
    outputMessage += `
    ${base} x ${i} = ${base * i}
    `;
  }

  const response:string = `${headerMessage} ${outputMessage}`

  if(yarg.s) {
    escribirArchivo(`tabla-${base}.txt`, response);
    return response;
  }

  escribirArchivo(`tabla-${base}.txt`, response);
  return '';
}

function escribirArchivo(nombreArchivo:string, contenido:string):void {
  const path:string = './outputs';

  fs.mkdir(path, { recursive: true }, (error) => {
    if(error) throw error;
    console.log('Directory created successfully!');
  });
  fs.writeFile(`${path}/${nombreArchivo}`, contenido, (error) => {
    if(error) throw error;
    console.log('File created successfully!');
  });
}

const base:number = yarg.b;
const limite:number = yarg.l;
console.log(tablaMultiplicar(base, limite));
