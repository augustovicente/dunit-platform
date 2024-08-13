# Dunit

**Dunit** is an app designed to connect startups with potential venture capitalists and investors. It streamlines the process of matching startups with investors based on their interests and needs, creating a seamless experience for both parties.

## Features

- **Two User Flows**:
  - **Startup User**: Startups can create a profile by filling in detailed information about their business, goals, and funding needs.
  - **Investor User**: Investors can create a profile by specifying the types of investments and sectors they are interested in.

- **Personalized Matches**:
  - Startups and investors are matched based on the information provided, allowing for targeted and relevant connections.
  - The home screen for each user displays their matches, making it easy to explore potential partnerships.

## Usage

### Backend

1. Clone the repository and navigate to the `backend` directory:

```bash
git clone https://github.com/augustovicente/dunit-platform.git
```

```bash
cd backcend
```

2. Install the dependencies:

```bash
yarn # or npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
SENDGRID_API_KEY=your_sendgrid_api_key
FRONTEND_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

4. Start the server:

```bash
yarn dev # or npm run dev
```

### Frontend

1. Navigate to the `client` directory:

```bash
cd frontend
```

2. Install the dependencies:

```bash
yarn # or npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
VITE_APP_API_URL=http://localhost:4000
```

4. Start the development server:

```bash
yarn dev # or npm run dev
```
