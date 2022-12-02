import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'node:stream';
import { getPath } from "../helpers/helpers.js";

const sourcePath = getPath(import.meta.url, ['files', 'archive.gz']);
const targetPath = getPath(import.meta.url, ['files', 'fileToCompress.txt']);

const decompress = async () => {
    const readStream = createReadStream(sourcePath);
    const writeStream = createWriteStream(targetPath);
    const gzip = createUnzip();

    pipeline(readStream, gzip, writeStream, err => {if (err) console.log(err)});
};

await decompress();
