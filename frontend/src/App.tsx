import type { FormEvent } from 'react';
import { useState } from 'react';
import './App.css';
import { apiConfig, backendApi } from './lib/api';

const productStatuses = ['AVAILABLE', 'REQUESTED', 'SOLD'] as const;
const requestStatuses = ['PENDING', 'ACCEPTED', 'REJECTED'] as const;
const paymentStatuses = ['PENDING', 'PAID', 'FAILED'] as const;

const getField = (form: HTMLFormElement, key: string): string => {
  const value = new FormData(form).get(key);
  return typeof value === 'string' ? value.trim() : '';
};

const parseNumber = (value: string): number => Number(value);

const parseOptionalNumber = (value: string): number | undefined =>
  value ? Number(value) : undefined;

const parseCsv = (value: string): string[] =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const ensureToken = (token: string): string => {
  if (!token) {
    throw new Error('Access token is required for product and chat endpoints.');
  }
  return token;
};

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [response, setResponse] = useState('No request made yet.');

  const handleAction = async (
    label: string,
    action: () => Promise<unknown>,
  ): Promise<void> => {
    try {
      const result = await action();
      setResponse(
        `${label}\n${JSON.stringify(result, null, 2)}`,
      );
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unexpected error occurred';
      setResponse(`${label}\n${message}`);
    }
  };

  const onRegister = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('POST /auth/register', () =>
      backendApi.register({
        email: getField(form, 'email'),
        password: getField(form, 'password'),
        username: getField(form, 'username'),
        token: getField(form, 'token'),
      }),
    );
  };

  const onLogin = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('POST /auth/login', async () => {
      const result = await backendApi.login({
        email: getField(form, 'email'),
        password: getField(form, 'password'),
        username: getField(form, 'username'),
      });

      if (result.status === 1 && result.data) {
        setAccessToken(result.data.accessToken);
        setRefreshToken(result.data.refreshToken);
      }

      return result;
    });
  };

  const onLogout = (): void => {
    void handleAction('POST /auth/logout', () => backendApi.logout(accessToken));
  };

  const onRefreshToken = (): void => {
    void handleAction('POST /auth/refreshToken', async () => {
      const result = await backendApi.refreshToken(refreshToken);

      if (result.status === 1 && result.data) {
        setAccessToken(result.data.accessToken);
        setRefreshToken(result.data.refreshToken);
      }

      return result;
    });
  };

  const onCreateProduct = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('POST /product/create', () =>
      backendApi.createProduct(ensureToken(accessToken), {
        name: getField(form, 'name'),
        description: getField(form, 'description'),
        images: parseCsv(getField(form, 'images')),
        latitude: parseNumber(getField(form, 'latitude')),
        longitude: parseNumber(getField(form, 'longitude')),
        address: getField(form, 'address'),
        price: parseNumber(getField(form, 'price')),
      }),
    );
  };

  const onRequestPurchase = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('POST /product/request', () =>
      backendApi.requestPurchase(ensureToken(accessToken), {
        productId: parseNumber(getField(form, 'productId')),
        requesterId: parseNumber(getField(form, 'requesterId')),
        amount: parseOptionalNumber(getField(form, 'amount')),
        message: getField(form, 'message') || undefined,
      }),
    );
  };

  const onUpdatePurchase = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('PATCH /product/update', () =>
      backendApi.updatePurchase(ensureToken(accessToken), {
        UpdatedStatus: getField(form, 'UpdatedStatus'),
        productId: parseNumber(getField(form, 'productId')),
      }),
    );
  };

  const onPurchaseProduct = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('POST /product/purchase', () =>
      backendApi.purchaseProduct(ensureToken(accessToken), {
        productId: parseNumber(getField(form, 'productId')),
        purchaserId: parseNumber(getField(form, 'purchaserId')),
        ownerId: parseNumber(getField(form, 'ownerId')),
        paymentAmount: parseNumber(getField(form, 'paymentAmount')),
        paymentMethod: getField(form, 'paymentMethod'),
        paymentStatus: getField(form, 'paymentStatus'),
      }),
    );
  };

  const onDeleteOwnerProducts = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('DELETE /product/owner/:ownerId', () =>
      backendApi.deleteOwnerProducts(
        ensureToken(accessToken),
        parseNumber(getField(form, 'ownerId')),
      ),
    );
  };

  const onDeleteProduct = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('DELETE /product/:productId', () =>
      backendApi.deleteProduct(
        ensureToken(accessToken),
        parseNumber(getField(form, 'productId')),
      ),
    );
  };

  const onSendMessage = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('POST /chat/send', () =>
      backendApi.sendChatMessage(ensureToken(accessToken), {
        productId: parseNumber(getField(form, 'productId')),
        senderId: parseNumber(getField(form, 'senderId')),
        receiverId: parseNumber(getField(form, 'receiverId')),
        messages: getField(form, 'messages'),
        images: parseCsv(getField(form, 'images')),
      }),
    );
  };

  const onGetMessages = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;

    void handleAction('GET /chat/get', () =>
      backendApi.getChatMessages(
        ensureToken(accessToken),
        parseNumber(getField(form, 'productId')),
        parseNumber(getField(form, 'senderId')),
        parseNumber(getField(form, 'receiverId')),
      ),
    );
  };

  return (
    <main className="app">
      <header>
        <h1>Smart Community Frontend</h1>
        <p>
          Minimal React client for backend modules at{' '}
          <code>{apiConfig.apiBaseUrl}</code>
        </p>
      </header>

      <section className="panel">
        <h2>Session</h2>
        <div className="grid two-col">
          <label>
            Access Token
            <textarea
              value={accessToken}
              onChange={(event) => setAccessToken(event.target.value.trim())}
              rows={2}
              placeholder="****** from login"
            />
          </label>
          <label>
            Refresh Token
            <textarea
              value={refreshToken}
              onChange={(event) => setRefreshToken(event.target.value.trim())}
              rows={2}
              placeholder="Refresh token from login"
            />
          </label>
        </div>
      </section>

      <section className="panel">
        <h2>System</h2>
        <div className="actions">
          <button onClick={() => void handleAction('GET /', backendApi.rootStatus)}>
            Server Status
          </button>
          <button
            onClick={() => void handleAction('GET /health', backendApi.healthStatus)}
          >
            Health
          </button>
          <button onClick={() => void handleAction('GET /metrics', backendApi.metrics)}>
            Metrics
          </button>
        </div>
      </section>

      <section className="panel">
        <h2>Auth Module</h2>
        <div className="grid two-col">
          <form onSubmit={onRegister}>
            <h3>Register</h3>
            <input name="username" placeholder="username" required />
            <input name="email" type="email" placeholder="email" required />
            <input name="password" type="password" placeholder="password" required />
            <input name="token" placeholder="FCM token" required />
            <button type="submit">Register</button>
          </form>

          <form onSubmit={onLogin}>
            <h3>Login</h3>
            <input name="username" placeholder="username" required />
            <input name="email" type="email" placeholder="email" required />
            <input name="password" type="password" placeholder="password" required />
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="actions">
          <button onClick={onLogout}>Logout</button>
          <button onClick={onRefreshToken}>Refresh Token</button>
        </div>
      </section>

      <section className="panel">
        <h2>Product Module</h2>
        <div className="actions">
          <button
            onClick={() =>
              void handleAction('GET /product', () =>
                backendApi.getAllProducts(ensureToken(accessToken)),
              )
            }
          >
            Get All Products
          </button>
        </div>

        <div className="grid three-col">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              void handleAction('GET /product/:id', () =>
                backendApi.getProductById(
                  ensureToken(accessToken),
                  parseNumber(getField(form, 'id')),
                ),
              );
            }}
          >
            <h3>Get Product By ID</h3>
            <input name="id" type="number" placeholder="product id" required />
            <button type="submit">Fetch</button>
          </form>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              void handleAction('GET /product/nearest', () =>
                backendApi.getNearbyProducts(
                  ensureToken(accessToken),
                  parseNumber(getField(form, 'latitude')),
                  parseNumber(getField(form, 'longitude')),
                ),
              );
            }}
          >
            <h3>Get Nearby Products</h3>
            <input name="latitude" type="number" step="any" placeholder="latitude" required />
            <input
              name="longitude"
              type="number"
              step="any"
              placeholder="longitude"
              required
            />
            <button type="submit">Fetch</button>
          </form>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              void handleAction('GET /product/filter', () =>
                backendApi.getFilteredProducts(
                  ensureToken(accessToken),
                  parseOptionalNumber(getField(form, 'minPrice')),
                  parseOptionalNumber(getField(form, 'maxPrice')),
                  getField(form, 'status') || undefined,
                ),
              );
            }}
          >
            <h3>Filter Products</h3>
            <input name="minPrice" type="number" placeholder="min price" />
            <input name="maxPrice" type="number" placeholder="max price" />
            <select name="status" defaultValue="">
              <option value="">Any status</option>
              {productStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <button type="submit">Filter</button>
          </form>
        </div>

        <div className="grid two-col">
          <form onSubmit={onCreateProduct}>
            <h3>Create Product</h3>
            <input name="name" placeholder="name" required />
            <input name="description" placeholder="description" required />
            <input name="images" placeholder="image URLs (comma separated)" />
            <input name="latitude" type="number" step="any" placeholder="latitude" required />
            <input
              name="longitude"
              type="number"
              step="any"
              placeholder="longitude"
              required
            />
            <input name="address" placeholder="address" required />
            <input name="price" type="number" placeholder="price" required />
            <button type="submit">Create</button>
          </form>

          <form onSubmit={onRequestPurchase}>
            <h3>Request Purchase</h3>
            <input name="productId" type="number" placeholder="product id" required />
            <input name="requesterId" type="number" placeholder="requester id" required />
            <input name="amount" type="number" placeholder="amount (optional)" />
            <input name="message" placeholder="message (optional)" />
            <button type="submit">Request</button>
          </form>

          <form onSubmit={onUpdatePurchase}>
            <h3>Update Purchase Request</h3>
            <input name="productId" type="number" placeholder="product id" required />
            <select name="UpdatedStatus" defaultValue={requestStatuses[0]}>
              {requestStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <button type="submit">Update</button>
          </form>

          <form onSubmit={onPurchaseProduct}>
            <h3>Purchase Product</h3>
            <input name="productId" type="number" placeholder="product id" required />
            <input name="purchaserId" type="number" placeholder="purchaser id" required />
            <input name="ownerId" type="number" placeholder="owner id" required />
            <input
              name="paymentAmount"
              type="number"
              placeholder="payment amount"
              required
            />
            <input name="paymentMethod" placeholder="payment method" required />
            <select name="paymentStatus" defaultValue={paymentStatuses[0]}>
              {paymentStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <button type="submit">Purchase</button>
          </form>

          <form onSubmit={onDeleteOwnerProducts}>
            <h3>Delete Owner Products</h3>
            <input name="ownerId" type="number" placeholder="owner id" required />
            <button type="submit">Delete Owner Products</button>
          </form>

          <form onSubmit={onDeleteProduct}>
            <h3>Delete Product By ID</h3>
            <input name="productId" type="number" placeholder="product id" required />
            <button type="submit">Delete Product</button>
          </form>
        </div>
      </section>

      <section className="panel">
        <h2>Chat Module</h2>
        <div className="grid two-col">
          <form onSubmit={onSendMessage}>
            <h3>Send Message</h3>
            <input name="productId" type="number" placeholder="product id" required />
            <input name="senderId" type="number" placeholder="sender id" required />
            <input name="receiverId" type="number" placeholder="receiver id" required />
            <input name="messages" placeholder="message" required />
            <input name="images" placeholder="image URLs (comma separated)" />
            <button type="submit">Send</button>
          </form>

          <form onSubmit={onGetMessages}>
            <h3>Get Messages</h3>
            <input name="productId" type="number" placeholder="product id" required />
            <input name="senderId" type="number" placeholder="sender id" required />
            <input name="receiverId" type="number" placeholder="receiver id" required />
            <button type="submit">Fetch Messages</button>
          </form>
        </div>
      </section>

      <section className="panel">
        <h2>Response</h2>
        <pre>{response}</pre>
      </section>
    </main>
  );
}

export default App;
