import { gglClient } from '~/constants/gglClient'
import { getSdk } from '../generated/graphql'

export const { Players, getSchoolById } = getSdk(gglClient)
