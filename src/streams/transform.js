import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const readable = process.stdin;
    const writeable = process.stdout;

    const transform = new Transform({
        transform(chunk, enc, cb) {
            const chunkStringifued = chunk.toString().trim();

            const revesredChunk = chunkStringifued.split('').reverse().join('');

            this.push(revesredChunk + '\n');

            cb();
        }
    });
    pipeline(
        readable,
        transform,
        writeable,
        err => {
            console.log(err);
        }
    ) 
};

await transform();