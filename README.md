# How to run

## Prerequisites

Ensure you have the following installed:

- **Node.js** (version 20 or higher): [Download Node.js](https://nodejs.org/)
- **Yarn** (version 1.x): Install globally with `npm install -g yarn`
- A code editor like [Visual Studio Code](https://code.visualstudio.com/)

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**
   Run the following command to install all project dependencies:
   ```bash
   yarn install
   ```

## Running the Project

### 1. **Create .env file**

Create `.env` file like `.env.example`, change `VITE_HOST` to yours.

```
VITE_HOST=http://localhost:5000
```

### 2. **Start the Development Server**

To start the Vite development server with hot module replacement (HMR):

```bash
yarn dev
```

Open your browser and navigate to `http://localhost:5173` (or the port specified in the terminal).

### 3. **Build for Production**

To create an optimized production build:

```bash
yarn build
```

The output will be in the `dist` folder.

### 4. **Preview the Production Build**

To locally preview the production build:

```bash
yarn preview
```

This serves the `dist` folder at `http://localhost:4173`.

## Project Structure

```plaintext
GREENSENSE-FE/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Static assets like images, fonts, etc.
│   ├── components/      # Reusable UI compenents
│   ├── consts/          # Const of the system
│   ├── external/        # External services (e.g: WebSocket)
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layout components (Header, Footer, etc.)
│   ├── lib/             # External libraries or wrappers (e.g., axios instance)
│   ├── pages/           # Route-based pages
│   ├── styles/          # Tailwind config and custom CSS files
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
├── .gitignore
├── eslint.config.js
├── index.html           # HTML template
├── package.json
├── README.md
├── vite.config.js       # Vite configuration
└── yarn.lock
```

## Available Scripts

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the project for production.
- `yarn preview`: Previews the production build locally.
- `yarn lint`: Runs linting (if configured).

## Troubleshooting

- **Dependencies Issues**: If you encounter errors, try deleting `node_modules` and `yarn.lock`, then run `yarn install` again.
- **Port Conflicts**: If port `5173` is in use, Vite will prompt to use another port or you can specify one in `vite.config.js`.
- **Node Version**: Ensure you're using a compatible Node.js version (`node -v` to check).

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [ReactJS Documentation](https://react.dev/)
- [Yarn Documentation](https://yarnpkg.com/)

For further assistance, feel free to open an issue in the repository or contact the project maintainer.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
