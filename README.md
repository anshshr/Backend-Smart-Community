# Smart Community Backend

TypeScript + Express based backend for a smart local marketplace/community platform.
It includes authentication, product listing and purchase flow, location-based product discovery, chat between users, and notification queue integration.

## Highlights

- Modular architecture (`auth`, `products`, `chats`) with clear controller/service split.
- JWT based authentication and route protection middleware.
- Product lifecycle support: `AVAILABLE -> REQUESTED -> SOLD`.
- Purchase request and purchase completion workflow.
- Nearby product search using latitude/longitude bounding box logic.
- Chat messaging between buyer/seller for a product.
- Prisma ORM with PostgreSQL and generated client.
- Redis + Bull queue integration for async notifications.
- Zod validation for request payloads and query params.
- Monitoring stack configured with Prometheus + Grafana via Docker Compose.

## Tech Stack

- Runtime: Node.js
- Language: TypeScript (ESM / NodeNext)
- Server: Express 5
- Database: PostgreSQL
- ORM: Prisma
- Auth: JSON Web Token (`jsonwebtoken`)
- Validation: Zod
- Queue: Bull
- Redis: redis
- Monitoring: Prometheus + Grafana
- Logging: pino + pino-http
- Notifications: firebase-admin (notification utility scaffolded)

## Project Structure

```text
backend/
|- prisma/
|  |- schema.prisma
|  |- migrations/
|- src/
|  |- app.ts
|  |- server.ts
|  |- routes.ts
|  |- prisma.config.ts
|  |- config/
|  |  |- prisma.ts
|  |  |- redis.ts
|  |- middlewares/
|  |  |- app.middleware.ts
|  |- modules/
|  |  |- auth/
|  |  |- products/
|  |  |- chats/
|  |- core/
|  |  |- services/
|  |  |- utility/
|  |  |- errors/
|  |- utils/
|- package.json
|- tsconfig.json
|- README.md
```

## API Base URL

- Local base URL: `http://localhost:3000`
- Versioned API prefix: `/api/v1`

## Health Endpoints

- `GET /` -> server status JSON
- `GET /health` -> `healthy`

## Monitoring and Observability

This project includes a basic monitoring setup using Prometheus and Grafana.

- Prometheus runs on port `9090` and scrapes application metrics.
- Grafana runs on port `3001` (mapped to Grafana internal port `3000`).
- Both services are orchestrated through `docker-compose.yaml`.

Monitoring files:

- `docker-compose.yaml` -> starts Prometheus and Grafana containers.
- `prometheus.yaml` -> scrape configuration for the Node.js backend target.

Start monitoring services:

```bash
docker-compose up -d
```

Open dashboards and metrics:

- Grafana UI: `http://localhost:3001`
- Prometheus UI: `http://localhost:9090`

## Feature Modules

### 1. Authentication (`/api/v1/auth`)

- `POST /register`
  - Registers a user with email, password and FCM token.
  - Password policy is validated via regex + Zod.
- `POST /login`
  - Authenticates user and returns JWT.
- `POST /logout`
  - JWT verification based logout flow.

### 2. Products (`/api/v1/product`)

- `GET /` -> fetch all products.
- `GET /:id` -> fetch product by id.
- `GET /nearest?latitude=&longitude=` -> nearby products within radius logic.
- `GET /filter?minPrice=&maxPrice=&status=` -> filter by price/status.
- `POST /create` -> create product.
- `POST /request` -> create purchase request.
- `PATCH /update` -> update purchase request status.
- `POST /purchase` -> complete purchase with payment details.
- `DELETE /owner/:ownerId` -> delete all products by owner.
- `DELETE /:id` -> delete product by id.

Product related business flows supported:

- purchase requests (`PENDING`, `ACCEPTED`, `REJECTED`)
- purchase entries with payment status (`PENDING`, `PAID`, `FAILED`)
- product availability status handling (`AVAILABLE`, `REQUESTED`, `SOLD`)

### 3. Chat (`/api/v1/chat`)

- `POST /send` -> send product-specific message between users.
- `GET /get` -> fetch messages for product + sender + receiver.

### 4. Notification Pipeline

- Notification queue is created via Bull in `src/config/redis.ts`.
- Product creation flow pushes jobs for nearby users.
- Firebase notification sender utility is scaffolded in `src/core/utility/notification.ts`.
- Notification records are also written to database (`Notification` model).

## Database Models (Prisma)

Main entities:

- `User`
- `Product`
- `Purchase`
- `PurchaseRequest`
- `Chat`
- `Notification`

Enums:

- `UserVisibility`
- `ProductStatus`
- `RequestStatus`
- `PaymentStatus`

## Environment Variables

Create a `.env` file in project root.

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DB_NAME"
JWT_SECRET="your_jwt_secret"
```

Optional/infra:

- Redis is expected at `127.0.0.1:6379` (current config in code).
- For Firebase notifications, add service account config in notification utility.

## Setup and Run

1. Install dependencies

```bash
npm install
```

2. Run Prisma migrations

```bash
npx prisma migrate dev --name init
```

3. Generate Prisma client

```bash
npx prisma generate
```

4. Start server

```bash
npm run dev
```

5. (Optional) Start monitoring stack

```bash
docker-compose up -d
```

Server starts on port `3000`.

## Useful Commands

```bash
npm run dev
npx prisma migrate dev --name <migration_name>
npx prisma generate
docker-compose up -d
```

## Notes

- Auth middleware is applied after `/auth` routes, so product/chat routes require valid bearer token.
- Logging currently uses `pino-http` with `level: silent`.
- This codebase already includes Prisma migrations in `prisma/migrations`.
- Monitoring setup is containerized and can be started independently using Docker Compose.
