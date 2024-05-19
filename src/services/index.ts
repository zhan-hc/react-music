import axios from "axios";

import {
  handleChangeRequestHeader,
  handleNetworkError,
} from "./tools";

type Fn = (data: FcResponse<any>) => unknown;

interface IAnyObj {
  [index: string]: unknown;
}

// 返回格式
export interface FcResponse<T> {
  code: string | number;
  msg: string;
  data: T;
}

// 创建axios实例
const service = axios.create({
  baseURL: 'https://netease-cloud-music-api-eight-bice.vercel.app', // api 的 base_url
  timeout: 60000, // 请求超时时间
  withCredentials: true,
})

service.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config);
  // config = handleConfigureAuth(config);
  return config;
});

service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    // handleAuthError(response.data.errno);
    // handleGeneralError(response.data.errno, response.data.errmsg);
    return response;
  },
  (err) => {
    handleNetworkError(err.response.status);
    Promise.reject(err.response);
  }
);

export const Get = <T,>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn
): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    service
      .get(url, { params })
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        resolve([null, res as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });

export const Post = <T,>(
  url: string,
  data: IAnyObj,
  params: IAnyObj = {}
): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    service
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};