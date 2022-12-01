import { writeFile } from 'node:fs/promises';
import { getPath } from "../helpers/helpers.js";

const freshMsg = 'I am fresh and young';
const freshFile = getPath(import.meta.url, ['files', 'fresh.txt']);


const create = async () => {
    try {
      await writeFile(freshFile, freshMsg, {flag: 'wx'});
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

await create();
