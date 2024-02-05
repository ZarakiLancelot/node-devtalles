import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base            : number;
  limit           : number;
  showTable       : boolean;
  fileName        : string;
  destinationPath : string;
}

export class ServerApp {
  static run({ base, limit, showTable, fileName, destinationPath }: RunOptions) {
    console.log('ServerApp running...');
    
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({ fileContent: table, fileName: fileName, destinationPath: destinationPath });

    if(showTable) console.log(table);

    (wasCreated) ? console.log('Directory and File created successfully!') : console.log('Error creating file!');
  }
}
