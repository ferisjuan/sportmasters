// @vendors
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

// @generated
import { usePlayersGridQuery, Field_Position, PlayersGridDocument, usePlayersQuery } from '~/generated/graphql'

// @interfaces
interface usePlayerFilter {
    isLoading: boolean
    playersGrid: Record<string, string>[] | undefined
    handleFilters: (e: any) => void | undefined
}

export const usePlayerFilters = (): void => {
    // const { data: players, isFetching, isLoading } = usePlayersGridQuery()

    const { data } = useQuery('playersGrid', async () => await usePlayersQuery())
    console.log('🚀 ~ file: usePlayers.ts ~ line 19 ~ usePlayerFilters ~ data', data)

    // const handleFilters = (fieldPosition: Field_Position): any => {
    //     const { data: playersFil } = usePlayersGridQuery({
    //         where: {
    //             playerSportData: {
    //                 is: {
    //                     fieldPosition: {
    //                         in: fieldPosition,
    //                     },
    //                 },
    //             },
    //         },
    //     })
    //     return playersFil
    // }

    // const playersGrid = players?.players

    // return { data, handleFilters, isLoading: isLoading || isFetching }
}
