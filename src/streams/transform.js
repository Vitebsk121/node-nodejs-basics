import { Transform, pipeline } from 'node:stream';
import { stdin, stdout } from 'node:process';
import { EOL } from 'os';

class textTransform extends Transform {
  _transform(chunk, encoding, callback) {
    try {
      const data = chunk.toString()
      const reversedData = data.replace(EOL, '').split('').reverse().join('');

      callback(null, reversedData + EOL);
    } catch (e) {
      callback(e);
    }
  }
}

const transform = async () => {
    const reversesText = new textTransform();

    pipeline(
      stdin,
      reversesText,
      stdout,
      err => {
        console.log(err);
      },
    );
};

await transform();
