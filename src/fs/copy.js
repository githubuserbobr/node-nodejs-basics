import { mkdir, readdir, copyFile } from "node:fs/promises";

const copy = async () => {
    try {
        async function copyFolder(path, dest) {
            const files = await readdir(path);
            await mkdir(`${dest}/${path}`, {recursive: true});
            for (let file of files) {
                await copyFile(`${path}/${file}`, `${dest}/${file}`);
            }
        }
        copyFolder('./files', './files_copy');
    }
    catch(err) {
        if(err) console.log(err);
        throw new Error('FS operation failed');
    }
};

await copy();
