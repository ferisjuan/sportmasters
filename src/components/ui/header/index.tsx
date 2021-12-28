import { ActionIcon, Group, Header, ThemeIcon, Title, useMantineColorScheme } from '@mantine/core'
import { FcSportsMode } from 'react-icons/fc'
import { BsFillMoonStarsFill as MoonIcon, BsFillSunFill as SunIcon } from 'react-icons/bs'

export const SMHeader: React.VFC = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'

    return (
        <Header fixed height={70} padding="sm">
            <Group align="center" position="apart" ml={10}>
                <Group>
                    <ThemeIcon>
                        <FcSportsMode />
                    </ThemeIcon>
                    <Title order={1}>Sports Master</Title>
                </Group>
                <Group
                    mr={40}
                    sx={{
                        borderRadius: '8px',
                        padding: '10px',
                    }}
                >
                    <ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'gray'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? (
                            <SunIcon style={{ height: 18, width: 18 }} />
                        ) : (
                            <MoonIcon style={{ width: 18, height: 18 }} />
                        )}
                    </ActionIcon>
                </Group>
            </Group>
        </Header>
    )
}
