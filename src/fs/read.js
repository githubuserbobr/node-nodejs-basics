import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const content = await readFile("./files/fileToRead.txt", {encoding: 'utf-8'});
    console.log(content);
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};

await read();
