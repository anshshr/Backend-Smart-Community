backend/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── app.ts
│   ├── server.ts
│
│   ├── config/
│   │   ├── env.ts
│   │   ├── prisma.ts
│   │   └── constants.ts
│
│   ├── modules/                👈 CORE
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.routes.ts
│   │   │   └── auth.types.ts
│   │   │
│   │   ├── users/
│   │   │   ├── user.controller.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.routes.ts
│   │   │   └── user.types.ts
│   │   │
│   │   ├── products/
│   │   │   ├── product.controller.ts
│   │   │   ├── product.service.ts
│   │   │   ├── product.routes.ts
│   │   │   └── product.types.ts
│   │   │
│   │   ├── purchases/
│   │   │   ├── purchase.controller.ts
│   │   │   ├── purchase.service.ts
│   │   │   ├── purchase.routes.ts
│   │   │   └── purchase.types.ts
│   │   │
│   │   ├── requests/
│   │   │   ├── request.controller.ts
│   │   │   ├── request.service.ts
│   │   │   ├── request.routes.ts
│   │   │   └── request.types.ts
│   │   │
│   │   ├── chats/
│   │   │   ├── chat.controller.ts
│   │   │   ├── chat.service.ts
│   │   │   ├── chat.routes.ts
│   │   │   └── chat.types.ts
│   │   │
│   │   └── notifications/
│   │       ├── notification.controller.ts
│   │       ├── notification.service.ts
│   │       ├── notification.routes.ts
│   │       └── notification.types.ts
│
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│
│   ├── utils/
│   │   ├── hash.ts
│   │   ├── jwt.ts
│   │   ├── distance.ts
│   │   └── response.ts
│
│   ├── routes.ts
│   └── index.ts
│
├── tests/
│   ├── auth.test.ts
│   └── product.test.ts
│
├── .env
├── tsconfig.json
├── package.json
└── README.md