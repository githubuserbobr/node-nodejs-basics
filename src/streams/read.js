import { pipeline } from 'node:stream/promises';
import fs from 'node:fs';

const read = async () => {
    const rs = fs.createReadStream('./files/fileToRead.txt');
    const ws = process.stdout;
    await pipeline(rs, ws);
};

await read();