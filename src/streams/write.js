import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';

const write = async () => {
    const rs =  process.stdin;
    const ws = fs.createWriteStream('./files/fileToWrite.txt');
    await pipeline(rs, ws);
};

await write();