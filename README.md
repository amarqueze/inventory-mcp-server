# Inventory MCP Server

Backend service designed to connect inventory management systems with AI assistants through API endpoints.

The goal of this project is to expose inventory operations so they can be used by a custom ChatGPT assistant, enabling natural language queries and operational workflows.

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Docker Compose

## How to Run

### 1. Create environment file

Create a `.env` file:

```env
PORT=3000

DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=inventory_db
```

### 3. Start the project

```bash
docker-compose up --build
```

The API should be available at:

```text
http://localhost:3000
```

### 4. Test endpoints

Health check:

```http
GET http://localhost:3000/api/health
```

Database test:

```http
GET http://localhost:3000/api/db-test
```

## Custom ChatGPT Setup

This project can be connected to a Custom GPT using Actions. GPT Actions allow a custom GPT to connect with external APIs using an OpenAPI schema and authentication configuration.

### 1. Create a Custom GPT

1. Open ChatGPT.
2. Go to Explore GPTs.
3. Select Create.
4. Configure the GPT name, description and instructions.

### 2. Add project instructions

Example instructions:

```text
You are an inventory assistant connected to an inventory management API.

Your job is to help users query inventory data, check product availability and support operational workflows using natural language.

When needed, call the available API actions to retrieve inventory information.
```

### 3. Configure Actions

In the GPT editor:

1. Go to Actions.
2. Select Create new action.
3. Add the API authentication settings.
4. Add the OpenAPI schema for this server.
5. Test the action from the GPT preview.

### 4. Expose local server

If running locally, expose the API with a tunnel tool such as ngrok:

```bash
ngrok http 3000
```

