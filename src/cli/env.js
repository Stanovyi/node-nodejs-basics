const parseEnv = () => {
  const rssVars = [];

  for (let key in process.env) {
    if (key.startsWith("RSS_")) {
      rssVars.push(`${key}=${process.env[key]}`);
    }
  }

  console.log(rssVars.join("; "));
};

parseEnv();
