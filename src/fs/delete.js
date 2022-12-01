import { rm } from 'node:fs/promises';
import { getPath } from "../helpers/helpers.js";

const target = getPath(import.meta.url, ['files', 'fileToRemove.txt']);

const remove = async () => {
    try {
      await rm(target);
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

await remove();
