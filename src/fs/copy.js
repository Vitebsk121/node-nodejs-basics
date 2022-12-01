import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files']);
const targetPath = getPath(import.meta.url, ['files_copy']);

const copy = async () => {
    try {
      const sourceFiles = await readdir(sourcePath);
      await mkdir(targetPath);
      sourceFiles.forEach((fileNm) => {
        const source = sourcePath + '/' + fileNm;
        const target = targetPath + '/' + fileNm
        copyFile(source, target);
      })
    } catch (e) {
      throw new Error('FS operation failed');
    }
};

copy();
