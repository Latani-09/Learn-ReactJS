import React from 'react';
import { createRoot } from 'react-dom/client';
import 'graphiql/graphiql.css';

const fetcher = createGraphiQLFetcher({ url: 'http://localhost:4000/graphql' });
const rootReact = createRoot(document.getElementById('root'));
rootReact.render(<GraphiQL fetcher={fetcher} />);