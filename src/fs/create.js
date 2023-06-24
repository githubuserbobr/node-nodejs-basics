import { appendFile, access } from "node:fs/promises";

const create = async () => {
  try {
  await  access("./files/fresh.txt");
//   throw new Error('fs operation failed');
  console.log('exist')
  } catch {
    appendFile("./files/fresh.txt", "I am fresh and young");
  }
};

await create();
