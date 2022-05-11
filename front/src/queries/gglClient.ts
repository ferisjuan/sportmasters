import { GraphQLClient } from 'graphql-request'

export const gglClient = new GraphQLClient(import.meta.env.REACT_APP_GGL_CLIENT as string)
