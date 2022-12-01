import { createWriteStream } from 'fs';
import { stdin } from 'node:process';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files', 'fileToWrite.txt']);

const write = async () => {
    const stream = createWriteStream(sourcePath);
    stdin.pipe(stream);
};

await write();
