export const getContentTypeFromHeaders = (headers: Headers): string => {
  return headers.get("Content-Type") || "";
};

export const isJsonContentType = (contentType: string) => {
  return contentType.toLowerCase().includes("application/json");
};

export const isTextContentType = (contentType: string) => {
  return contentType.toLowerCase().includes("text/plain");
};

export const resolveDataByContentType = async (response: Response) => {
  const { headers } = response;
  const contentType = getContentTypeFromHeaders(headers);

  if (isJsonContentType(contentType)) {
    return response.json();
  } else if (isTextContentType(contentType)) {
    return response.text();
  } else {
    return response.blob();
  }
};

export const parseResponse = async <T>(
  response: Response
): Promise<T | Error> => {
  const data = await resolveDataByContentType(response);
  return (data as unknown) as T;
};
