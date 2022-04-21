import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql'

const gglClient = new GraphQLClient(import.meta.env.REACT_APP_GGL_CLIENT as string)
export const { Players, getSchoolById } = getSdk(gglClient)
