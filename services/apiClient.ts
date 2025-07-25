
const getAuthToken = () => localStorage.getItem('token');

const request = async <T>(method: string, endpoint: string, body?: any): Promise<T> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  const token = getAuthToken();

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  // The proxy in client/package.json handles forwarding this to the backend
  const response = await fetch(endpoint, config);

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || `HTTP error! status: ${response.status}`);
  }

  // The backend wraps successful responses in a `data` object
  return responseData.data;
};

const apiClient = {
  get: <T>(endpoint: string) => request<T>('GET', endpoint),
  post: <T>(endpoint: string, body: any) => request<T>('POST', endpoint, body),
  put: <T>(endpoint: string, body: any) => request<T>('PUT', endpoint, body),
  delete: <T>(endpoint: string) => request<T>('DELETE', endpoint),
};

export default apiClient;
