
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient(
    {
        uri: '/api/graphql',
        cache: new InMemoryCache(),
        connectToDevTools: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
);

export default client;
