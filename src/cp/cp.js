import { spawn } from 'node:child_process'
import { getPath } from "../helpers/helpers.js";

const childProcessFuncPath = getPath(import.meta.url, ['files', 'script.js']);

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [childProcessFuncPath, ...args]);

    process.stdin.on('data', (chunk) => {
        childProcess.stdin.write(chunk);
    });

    childProcess.stdout.on('data', (data) => console.log(data.toString()));
};

spawnChildProcess(process.argv);
