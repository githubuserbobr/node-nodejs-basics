import { rename as renameFile} from 'node:fs/promises';

const rename = async () => {
  await renameFile('./files/wrongFilename.txt', './files/properFilename.md')
};

await rename();