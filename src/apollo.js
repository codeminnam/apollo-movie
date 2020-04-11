import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://movieql.now.sh/",
    fetchOptions: {
        mode: 'no-cors'
    }
});

export default client;