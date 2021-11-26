This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and pre-loaded with [Material UI](https://mui.com/) components.

## Create a new starter project 

To create a new starter project run

`npx create-next-materialui-ts-starter <your project name>`

## Starting NextJS

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Testing

Testing is provided via [Just/](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library)

Support for testing with Material UI components and themes is enabled through the use of the `src/test-utils.tsx` component.  This component creates a wrapper around the React Testing Library render method, and re-exports all of the React Testing Library methods.

Testing components withn this should import commands as below:

```js
import { render, screen } from 'test-utils';
```

