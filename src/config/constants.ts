const APP_VERSION = __APP_VERSION__;

const DEV_MODE = import.meta.env.MODE === "development";

export { APP_VERSION, DEV_MODE };
