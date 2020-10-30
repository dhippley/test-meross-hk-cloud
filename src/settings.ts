/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export const PLATFORM_NAME = 'MerossCloudPlugin';

/**
 * This must match the name of your plugin as defined the package.json
 */
export const PLUGIN_NAME = 'homebridge-meross-cloud';

/**
 * CONST URLs
 */
export const MEROSS_URL = 'https://iot.meross.com';

export const LOGIN_URL = MEROSS_URL.concat('/v1/Auth/Login');

export const LOG_URL = MEROSS_URL.concat('/v1/log/user');

export const DEVICE_LIST = MEROSS_URL.concat('/v1/Device/devList');

export const SUB_DEVICE_LIST = MEROSS_URL.concat('/v1/Hub/getSubDevices');

export const LOGOUT_URL = MEROSS_URL.concat('/v1/Profile/logout');
