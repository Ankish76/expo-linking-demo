import activeEnv from "./environment.active";
const ENV = {
  root: {
    scheme: "mydemo.app",
  },
  development: {
    github_clinetId: "your client id here",
  },
  staging: {
    github_clinetId: "your client id here",
  },
  production: {
    github_clinetId: "your client id here",
  },
};
const getEnvVars = (env) => {
  let envVars = ENV.development;
  let environment = env || activeEnv;

  if (environment === "staging") {
    envVars = ENV.staging;
    environment = "staging";
  } else if (environment === "production") {
    envVars = ENV.production;
    environment = "production";
  }
  return {
    ...envVars,
    environment,
    ...ENV.root,
  };
};

export default getEnvVars;
