/* 
 * meross cloud API Implmentation.
 */
import { HAP, Logging } from "homebridge";
import {
  MEROSS_URL,
  LOGIN_URL,
  DEVICE_LIST,
  SUB_DEVICE_LIST,
  LOGOUT_URL
} from "./settings";
import fetch, { FetchError, Headers, RequestInfo, RequestInit, Response } from "node-fetch";
import util from "util";

export class merossApi {
    private username: string;
    private password: string;
    private headers: Headers;

    constructor(platform: merossCloudPlatform) {
        this.username = 'dhippley@gmail.com';
        this.password = 'Anti7514';

    }
}