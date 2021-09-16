import { ReactElement } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

export const Dogs = (): ReactElement => {
    const { data, error, isLoading } = useQuery('dogs', () => axios('https://dog.ceo/api/breeds/image/random'))

    if (error) return <h1>Error: {error}, try again</h1>
    if (isLoading) return <h1>Loading...</h1>

    return (
        <div>
            <img src={data?.data.message} />
        </div>
    )
}
