import { Container, Loader } from '@mantine/core'

interface SMContainerProps {
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'initial' | 'inherit'
    children?: React.ReactNode
    full?: boolean
    isLoading?: boolean
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'stretch'
        | 'initial'
        | 'inherit'
}

export const SMContainer: React.FC<SMContainerProps> = ({
    align = 'flex-start',
    children,
    isLoading,
    justify = 'flex-start',
}) => (
    <>
        {isLoading ? (
            <Container
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    height: '100%',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Loader color="indigo" variant="bars" />
            </Container>
        ) : (
            <Container
                sx={{
                    alignItems: align,
                    display: 'flex',
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    justifyContent: justify,
                }}
            >
                {children}
            </Container>
        )}
    </>
)
