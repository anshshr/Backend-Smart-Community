export interface ApiResponse<T = unknown> {
  message: string;
  status: number;
  data?: T;
}

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

interface RequestOptions {
  method?: HttpMethod;
  token?: string;
  useApiPrefix?: boolean;
  body?: unknown;
  query?: Record<string, string | number | undefined>;
}

const serverBaseUrl =
  import.meta.env.VITE_SERVER_BASE_URL?.trim() || 'http://localhost:3000';
const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL?.trim() || `${serverBaseUrl}/api/v1`;

const toQueryString = (query: RequestOptions['query']): string => {
  if (!query) return '';

  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      params.set(key, String(value));
    }
  });

  const queryString = params.toString();
  return queryString ? `?${queryString}` : '';
};

const request = async <T>(
  path: string,
  { method = 'GET', token, useApiPrefix = true, body, query }: RequestOptions = {},
): Promise<ApiResponse<T>> => {
  const base = useApiPrefix ? apiBaseUrl : serverBaseUrl;
  const url = `${base}${path}${toQueryString(query)}`;

  const authorizationHeader = token ? 'Token ' + token : undefined;

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(authorizationHeader ? { Authorization: authorizationHeader } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  const payload = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok && payload) {
    return payload;
  }

  if (!payload) {
    return {
      message: `Request failed with status ${response.status}`,
      status: 0,
    };
  }

  return payload;
};

export const apiConfig = {
  serverBaseUrl,
  apiBaseUrl,
};

export const backendApi = {
  rootStatus: () => request('/', { useApiPrefix: false }),
  healthStatus: () => request('/health', { useApiPrefix: false }),
  metrics: () => request('/metrics', { useApiPrefix: false }),

  register: (body: {
    email: string;
    password: string;
    username: string;
    token: string;
  }) => request('/auth/register', { method: 'POST', body }),

  login: (body: { email: string; password: string; username: string }) =>
    request<{ accessToken: string; refreshToken: string }>('/auth/login', {
      method: 'POST',
      body,
    }),

  logout: (token: string) =>
    request('/auth/logout', { method: 'POST', body: { token } }),

  refreshToken: (token: string) =>
    request<{ email: string; accessToken: string; refreshToken: string }>(
      '/auth/refreshToken',
      {
        method: 'POST',
        body: { token },
      },
    ),

  getAllProducts: (token: string) => request('/product', { token }),
  getProductById: (token: string, id: number) => request(`/product/${id}`, { token }),
  getNearbyProducts: (token: string, latitude: number, longitude: number) =>
    request('/product/nearest', {
      token,
      query: { latitude, longitude },
    }),
  getFilteredProducts: (
    token: string,
    minPrice?: number,
    maxPrice?: number,
    status?: string,
  ) =>
    request('/product/filter', {
      token,
      query: { minPrice, maxPrice, status },
    }),
  createProduct: (token: string, body: unknown) =>
    request('/product/create', { method: 'POST', token, body }),
  requestPurchase: (token: string, body: unknown) =>
    request('/product/request', { method: 'POST', token, body }),
  updatePurchase: (token: string, body: unknown) =>
    request('/product/update', { method: 'PATCH', token, body }),
  purchaseProduct: (token: string, body: unknown) =>
    request('/product/purchase', { method: 'POST', token, body }),
  deleteOwnerProducts: (token: string, ownerId: number) =>
    request(`/product/owner/${ownerId}`, { method: 'DELETE', token }),
  deleteProduct: (token: string, productId: number) =>
    request(`/product/${productId}`, { method: 'DELETE', token }),

  sendChatMessage: (token: string, body: unknown) =>
    request('/chat/send', { method: 'POST', token, body }),
  getChatMessages: (
    token: string,
    productId: number,
    senderId: number,
    receiverId: number,
  ) =>
    request('/chat/get', {
      token,
      query: { productId, senderId, receiverId },
    }),
};
