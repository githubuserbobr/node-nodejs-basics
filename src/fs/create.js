import { appendFile} from "node:fs/promises";
import { access } from "node:fs"
const create = async () => {
  try {
    access("./files/fresh.txt", (err) => {
      if (err) appendFile("./files/fresh.txt", "I am fresh and young");

      else {
        throw new Error('fs operation failed');
      }
    });
  } catch(error) {
    console.log(error)
  }
};

await create();
