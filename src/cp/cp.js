import cp from "child_process";

const spawnChildProcess = async (args) => {
    const worker = cp.fork('./files/script.js');
    worker.send({ args });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg#1', 'arg#2', 'arg#3']);
