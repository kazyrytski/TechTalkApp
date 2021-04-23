import { parseResponse } from "utils/fetch";

interface Config {}

export const HttpService = {
  async get<T>(url: string, config: Config = {}): Promise<T | Error> {
    try {
      const response = await fetch(url, {
        method: "GET",
        ...config,
      });
      return await parseResponse(response);
    } catch (error) {
      return error;
    }
  },

  async post<T>(url: string, config: Config = {}): Promise<T | Error> {
    try {
      const response = await fetch(url, {
        method: "POST",
        ...config,
      });
      return await parseResponse(response);
    } catch (error) {
      return error;
    }
  },

  async put<T>(url: string, config: Config = {}): Promise<T | Error> {
    try {
      const response = await fetch(url, {
        method: "PUT",
        ...config,
      });
      return await parseResponse(response);
    } catch (error) {
      return error;
    }
  },

  async delete<T>(url: string, config: Config = {}): Promise<T | Error> {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        ...config,
      });
      return await parseResponse(response);
    } catch (error) {
      return error;
    }
  },
};
