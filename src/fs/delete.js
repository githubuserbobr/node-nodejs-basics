import { rm } from 'node:fs/promises';

const remove = async () => {
    try {
         await rm('./files/fileToRemove.txt');
    } catch (error) {
        console.log(error);
        throw new Error('fs operation failed');
    }
};

await remove();