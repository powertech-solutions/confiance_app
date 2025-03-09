import axios from "./axios";

export interface ApiErrorResponse {
  statusCode: number,
  timestamp: number,
  message: string,
  description: string
}

interface ApiResponse<T> {
  data?: T;
  error?: ApiErrorResponse;
}

export const getRequest = async <T>(path: string, params = {}): Promise<ApiResponse<T>> => {
  try {
    const res = await axios.get(path, { params });
    return {data: res.data as T};
  } catch (error: any) {
    console.error('Error making GET request:', error);
    return { error: error.response?.data.message || 'An error occurred' };
  };
};

export const postRequest = async <T>(path:string, data = {}, params = {}): Promise<ApiResponse<T>> => {
  try {
    const res = await axios.post(path, data, { params });
    return { data: res.data as T};
  } catch (error: any) {
    console.error('Error making POST request:', error);
    return { error: error.response.data.message || 'An error occurred' };
  };
};

export const postFormDataRequest = async <T>(path:string, data = {}, params = {}): Promise<ApiResponse<T>> => {
  try {
    const res = await axios.post(path, data, {
      params,
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
    return { data: res.data as T};
  } catch (error: any) {
    return { error: error.response.data.message || 'An error occurred' };
  };
};

export const patchRequest = async <T>(path:string, data = {}, params = {}): Promise<ApiResponse<T>> => {
  try {
    const res = await axios.patch(path, data, { 
      params 
    });
    return { data: res.data as T};
  } catch (error: any) {    
    return { error: error.response.data.message || 'An error occured' };
  };
};

export const patchFormDataRequest = async <T>(path:string, data = {}, params = {}): Promise<ApiResponse<T>> => {
  try {
    const res = await axios.patch(path, data, {
      params,
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
    return { data: res.data as T};
  } catch (error: any) {
    return { error: error.response.data.message || 'An error occured' };
  };
};

export const putRequest = async <T>(path:string, data = {}, params = {}): Promise<ApiResponse<T>> => {
  try {
    const res = await axios.put(path, data, { params });
    return { data: res.data as T};
  } catch (error: any) {
    return { error: error.response.data.message || 'An error occured' };
  };
};

export const deleteRequest = async <T>(path:string, params = {}): Promise<ApiResponse<T>> => {
  try {
    const res = await axios.delete(path, { params });
    return { data: res.data as T};
  } catch (error: any) {
    return { error: error.response.data.message || 'An error occured' };
  };
};