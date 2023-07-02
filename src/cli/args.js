const parseArgs = () => {
    try {
        if (process.argv.length > 2) {
            const args = process.argv.slice(2);
            for (let i = 0; i < args.length; i +=2) {
                process.stdout.write(`${args[i]} is ${args[i + 1]}, `);
            }
        }
        else {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        console.log(error);
        throw new Error('FS operation failed');
    }
};

parseArgs();