import { Container, Loader } from '@mantine/core'

interface SMContainerProps {
    children?: React.ReactNode
    isLoading?: boolean
}

export const SMContainer: React.FC<SMContainerProps> = ({ children, isLoading }) => (
    <Container
        sx={{
            alignItems: 'flex-start',
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
        }}
    >
        {isLoading ? <Loader color="indigo" variant="bars" /> : <>{children}</>}
    </Container>
)
