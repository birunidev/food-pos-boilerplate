import axios, { AxiosRequestConfig } from "axios";
import { toast } from "sonner";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const ignoredUrls = ["/auth/local"];

const ignoredPaths = ["/auth/fp-login"];

AxiosInstance.interceptors.request.use((config) => {
  const JWT_TOKEN = localStorage.getItem("FP__JWT_AUTH");

  if (JWT_TOKEN && !ignoredUrls.some((url) => config.url?.includes(url))) {
    config.headers.Authorization = `Bearer ${JSON.parse(JWT_TOKEN)}`;
  }

  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 403) {
      toast.error("Forbidden access");
      window.location.href = "/";
    }
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login

      if (
        !ignoredPaths.some((path) => window.location.pathname.includes(path))
      ) {
        window.location.href = "/auth/fp-login";
      }
    }
    return Promise.reject(error);
  }
);

const ApiClient = <T>(requestConfig: AxiosRequestConfig): Promise<T> =>
  AxiosInstance.request(requestConfig);

export interface ErrorResponse {
  data: null;
  error: {
    details: object;
    message: string;
    name: string;
    status: number;
  };
}

export { ApiClient };
