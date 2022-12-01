import { env } from 'node:process';

const parseEnv = () => {
    const rssEnvVariables = [];

    for(const [key, envVariables] of Object.entries(env)) {
      if (key.startsWith('RSS_')) {
        rssEnvVariables.push(key + '=' + envVariables);
      }
    }

    console.log(rssEnvVariables.join('; '));
};

parseEnv();
