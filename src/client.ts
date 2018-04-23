import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://ja8ibi4phg.execute-api.us-west-2.amazonaws.com/api/graphql'
})

export default client
