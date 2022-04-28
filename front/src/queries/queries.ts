import { gglClient } from '~/queries/gglClient'
import { getSdk } from '../generated/graphql'

export const { Players, getSchoolById } = getSdk(gglClient)
