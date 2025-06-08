# StyleVerse - System Design Document

## 1. System Architecture

### 1.1 High-Level Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Client Layer  │     │  Application    │     │   Data Layer    │
│   (Frontend)    │◄───►│    Layer        │◄───►│   (Backend)     │
└─────────────────┘     │   (Backend)     │     └─────────────────┘
                        └─────────────────┘
```

### 1.2 Technology Stack

1. Frontend

   - React.js with TypeScript
   - Redux for state management
   - Material-UI for components
   - Axios for API calls

2. Backend

   - Node.js with Express
   - TypeScript
   - MongoDB with Mongoose
   - Redis for caching

## 2. Project Structure

### 2.1 Frontend Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── product/
│   │   ├── cart/
│   │   └── checkout/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Product/
│   │   ├── Cart/
│   │   └── Checkout/
│   ├── services/
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── cart.ts
│   ├── store/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── types/
│   ├── utils/
│   │   ├── helpers.ts
│   │   └── constants.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── themes/
│   └── App.tsx
├── package.json
└── tsconfig.json
```

### 2.2 Backend Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── redis.ts
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── product.controller.ts
│   │   └── order.controller.ts
│   ├── models/
│   │   ├── user.model.ts
│   │   ├── product.model.ts
│   │   └── order.model.ts
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── product.routes.ts
│   │   └── order.routes.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── product.service.ts
│   │   └── order.service.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── validation.middleware.ts
│   ├── utils/
│   │   ├── logger.ts
│   │   └── helpers.ts
│   └── app.ts
├── tests/
│   ├── unit/
│   └── integration/
├── package.json
└── tsconfig.json
```

### 7.1 AWS Infrastructure

```
┌─────────────────┐
│   Route 53      │
└────────┬────────┘
         │
┌────────▼────────┐
│   CloudFront    │
└────────┬────────┘
         │
┌────────▼────────┐
│   Load Balancer │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌───▼───┐
│ EC2-1 │ │ EC2-2 │
└───┬───┘ └───┬───┘
    │         │
┌───▼─────────▼───┐
│   MongoDB       │
└─────────────────┘
```

### 7.2 Container Architecture

```
┌─────────────────┐
│   Nginx         │
└────────┬────────┘
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌───▼───┐
│Frontend│ │Backend│
└───────┘ └───┬───┘
              │
         ┌────▼────┐
         │ MongoDB │
         └─────────┘
```
