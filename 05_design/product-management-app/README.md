# Product Management App

This Nuxt 3 web application connects to the FastAPI backend in `03_python_fastapi_project` to manage products. It supports listing, viewing details, creating, editing, and deleting products. The UI is based on the provided Figma designs.

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm run dev
   ```
3. Ensure the FastAPI backend is running at `http://localhost:8000`.

## Features
- Product list
- Product details dialog
- Add new product
- Edit product
- Delete product confirmation

## Figma Designs
- [Product List](https://www.figma.com/design/Cep7R0EjWIdbO4GEzcAkti/Product-Management-Mockup---Codespring-LLM-Training?node-id=6-9&t=KH5IR1KbBdZiNKQN-4)
- [Add Product](https://www.figma.com/design/Cep7R0EjWIdbO4GEzcAkti/Product-Management-Mockup---Codespring-LLM-Training?node-id=11-158&t=KH5IR1KbBdZiNKQN-4)
- [Edit Product](https://www.figma.com/design/Cep7R0EjWIdbO4GEzcAkti/Product-Management-Mockup---Codespring-LLM-Training?node-id=11-193&t=KH5IR1KbBdZiNKQN-4)
- [Product Details Dialog](https://www.figma.com/design/Cep7R0EjWIdbO4GEzcAkti/Product-Management-Mockup---Codespring-LLM-Training?node-id=11-219&t=KH5IR1KbBdZiNKQN-4)
- [Delete Product](https://www.figma.com/design/Cep7R0EjWIdbO4GEzcAkti/Product-Management-Mockup---Codespring-LLM-Training?node-id=11-237&t=KH5IR1KbBdZiNKQN-4)

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
