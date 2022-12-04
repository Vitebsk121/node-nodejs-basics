import { readdir } from 'node:fs/promises';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files']);

const list = async () => {
    try {
      console.log(await readdir(sourcePath));
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

await list();
