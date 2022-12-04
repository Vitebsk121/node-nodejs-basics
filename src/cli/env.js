const { env } = process;

const parseEnv = () => {
    const rssEnvVariables = [];

    for(const [envNm, envValue] of Object.entries(env)) {
      if (envNm.startsWith('RSS_')) {
        rssEnvVariables.push(envNm + '=' + envValue);
      }
    }

    console.log(rssEnvVariables.join('; '));
};

parseEnv();
