import fs from 'fs';

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  destinationPath?  : string;
  fileContent       : string;
  fileName?         : string;
}

export class SaveFile implements SaveFileUseCase {
  constructor(){}

  execute({ fileContent, destinationPath = 'outputs', fileName = 'table' }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(destinationPath, { recursive: true });
      fs.writeFileSync(`${destinationPath}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
