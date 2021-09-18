const proConfig = {
  apiHost: "/api/screen",
  routerBase: "/screen",
};

const devConfig = {
  apiHost: "/api",
  routerBase: "/",
};

const config = process.env.VUE_APP_ENV === "production" ? proConfig : devConfig;

export default config;