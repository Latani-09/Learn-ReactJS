This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# challenges in using redux for next js
Per-request safe Redux store creation:
SSR-friendly store hydration: Failure to render the same page contents on both the client and the server will result in a "hydration error". So the Redux store will have to be initialized on the server and then re-initialized on the client with the same data in order to avoid hydration issues.
SPA routing support: Next.js supports a hybrid model for client side routing. A customer's first page load will get an SSR result from the server. Subsequent page navigation will be handled by the client. This means that with a singleton store defined in the layout, route-specific data will need to be selectively reset on route navigation, while non-route-specific data will need to be retained in the store.
Server caching friendly: Recent versions of Next.js (specifically applications using the App Router architecture) support aggressive server caching. The ideal store architecture should be compatible with this caching.

# app router setup vs page router setup for redux
the Pages Router, Redux setup is primarily handled by using the next-redux-wrapper library, which integrates a Redux store with the Pages Router data fetching methods like getServerSideProps.
but approuter based app setup is different
--support for react server components  -only renders on the server, as opposed to "client" components that render on both the client and the server. 

# Based on the architecture of the App Router we have these general recommendations for appropriate use of Redux:

No global stores - Because the Redux store is shared across requests, it should not be defined as a global variable. Instead, the store should be created per request.
RSCs should not read or write the Redux store - RSCs cannot use hooks or context. They aren't meant to be stateful. Having an RSC read or write values from a global store violates the architecture of the Next.js App Router.
The store should only contain mutable data - We recommend that you use your Redux sparingly for data intended to be global and mutable.

# 1 move from defining store as a global or module-singleton variable, to defining a makeStore function that returns a new store for each request:

