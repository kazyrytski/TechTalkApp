import { parseResponse } from "utils/fetch";

interface Config {}

export const HttpService = {
  async getData<T>(url: string, config: Config = {}): Promise<T | Error> {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "GET",
        ...config,
      });
      return await response.json();
    } catch (error) {
      return error;
    }
  },

  async post<T>(url: string, config: Config = {}): Promise<T | Error> {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        ...config,
      });
      return await parseResponse(response);
    } catch (error) {
      return error;
    }
  },

  async patch<T>(url: string, config: Config = {}): Promise<T | Error> {
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "PATCH",
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
        headers: {
          'Content-Type': 'application/json'
        },
        method: "DELETE",
        ...config,
      });
      return await parseResponse(response);
    } catch (error) {
      return error;
    }
  },
};
