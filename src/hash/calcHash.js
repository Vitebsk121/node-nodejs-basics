import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files', 'fileToCalculateHashFor.txt']);

const calculateHash = async () => {
    try {
      const fileData = await readFile(sourcePath);
      const hash = createHash('sha256').update(fileData).digest('hex');
      console.log(hash);
    } catch (e) {
      throw new Error(e);
    }
};

await calculateHash();
