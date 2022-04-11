import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createPrismicLink } from "apollo-link-prismic";

export const client = new ApolloClient({
  link: createPrismicLink({
    repositoryName: "ignitenws",
    accessToken: "MC5ZbENYRlJjQUFDWUEyQllI.Ihwveu-_ve-_ve-_ve-_vTfvv73vv71F77-9Eu-_vWLvv73vv73vv73vv70JPDDvv73vv71Qaw5DXWAu"
  }),
  cache: new InMemoryCache()
})