import { rename as renameNode } from 'node:fs/promises';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files', 'wrongFilename.txt']);
const targetPath = getPath(import.meta.url, ['files', 'properFilename.md']);

const rename = async () => {
    try {
      await renameNode(sourcePath, targetPath);
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

await rename();
