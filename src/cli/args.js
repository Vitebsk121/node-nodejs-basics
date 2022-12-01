import { argv } from 'node:process';


const parseArgs = () => {
    const resultArgs = [];

    const cliArgs = argv.slice(2);

    cliArgs.forEach((arg, index) => {
      const valueIndex = index + 1;

      if (arg.startsWith('--')) {
        resultArgs.push(arg + ' is ' + cliArgs[valueIndex]);
      }
    });

    console.log(resultArgs.join(', '));
};

parseArgs();
