import { ReactElement } from 'react'
import { useQuery } from 'react-query'

import { getUser } from 'src/queries/user'

export const User = (): ReactElement => {
    const { data, error, isLoading } = useQuery('user', getUser)
    if (error) return <h1>Error: {error}, try again</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            <img src={data?.data.message} />
        </div>
    )
}
