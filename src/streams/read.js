import { createReadStream } from 'fs';
import { stdout } from 'node:process';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files', 'fileToRead.txt']);

const read = async () => {
    const stream = createReadStream(sourcePath);
    stream.pipe(stdout);
};

await read();
