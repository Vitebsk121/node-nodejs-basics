import { readFile } from 'node:fs/promises';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files', 'fileToRead.txt']);

const read = async () => {
    try {
      console.log(await readFile(sourcePath, "utf-8"));
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

await read();
