const parseEnv = () => {
try {
    let names = Object.getOwnPropertyNames(process.env);
    let result = names.filter(item => item.startsWith('RSS_'));
    if (result.length !== 0) {
        result.forEach((item) => process.stdout.write(`${item}=${process.env[item]}; `));
    }
    else {
        throw new Error('FS operation failed');
    }
} catch (error) {
    console.log(error);
    throw new Error('FS operation failed');
}};

parseEnv();