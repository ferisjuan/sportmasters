import { gglClient } from '~/query-client/gglClient'
import { getSdk } from '../generated/graphql'

export const { Players, getSchoolById } = getSdk(gglClient)
