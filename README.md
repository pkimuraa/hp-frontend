# Accio Wizard Services

The _Accio Wizard Services_ is a React-based web application designed for browsing through
Harry Potter and Witchcraft world. This project exemplifies best practices in web architecture,
UI, and UX design. See the features sections for more details.

Built using Vite, it leverages the HP-API!: https://hp-api.onrender.com/.

## Features

- **URL as State Management**: Manages URLs and browser history to enhance user experience and
  simplify code maintenance. Using URL (query params etc) as a state tool simplifies client code and
  serves as a global application state, without the need to utilize many Contexts or other state
  management solutions.
- **Server State Management**: Utilizes React Query for caching, automatic refetching error
  handling, and managing queries with pagination and search params. Again, simplyfing the client
  code.
- **Type safety**: Everything is fully typed, including the server responses.
- **Global HTTP intercept**: Both Axios and React Query have global request and response
  interceptors which allows token attachment and global toast errors.
- **Loading States**: Displays loading skeleton indicators to inform
  users of the current app state.
- **Nested Routing**: Supports nested routes for organized and structured navigation.

## Tech Stack

- UI: [React](https://reactjs.org/)
- Routing: [react-router](https://reactrouter.com)
- State Management: [Context API](https://legacy.reactjs.org/docs/context.html) (for dark/light
  theme toggle) and URL state and [Zustand](https://github.com/pmndrs/zustand/tree/main) (for favorite, set favorite house and some filter states)
- Styling: [Tailwindcss](https://tailwindcss.com/) and [Shadcn-ui](https://ui.shadcn.com/) powered
  by [RadixUI](https://www.radix-ui.com/)
- HTTP Client: [Axios](https://github.com/axios/axios) and
  [React Query](https://tanstack.com/query/v3/)
- Unit tests with [Vitest](https://vitest.dev/) and
  [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

## Local Setup

1. Clone this repository

2. Install dependencies:

   ```bash
       npm install
   ```

3. **Important**: Create a `.env` file. There's a .env.example to follow:

   ```
       VITE_API_URL=https://hp-api.onrender.com/api/
   ```

4. Run the server:

   ```bash
       npm run dev
   ```

5. Run tests:

   ```bash
       npm run test
   ```
