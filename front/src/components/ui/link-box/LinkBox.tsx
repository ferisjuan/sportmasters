/* eslint-disable prettier/prettier */
// @vendors
import { Box } from '@mantine/core'
import { Link } from 'react-router-dom'

// @constants
import { ROUTES } from '~/constants/index'

interface ILinkBoxProps {
    icon?: string
    onClick?: () => void
    selected: ROUTES
    text: string
    to: ROUTES
}

export const LinkBox: React.VFC<ILinkBoxProps> = ({ onClick, selected, text, to }) => {
    const isSelected = selected === to

    return (
        <Box
            component={Link}
            onClick={onClick}
            to={to}
            sx={theme => ({
                display: 'flex',
                backgroundColor: isSelected
                    ? theme.colors.indigo[5]
                    : theme.colorScheme === 'dark'
                    ? theme.colors.gray[9]
                    : theme.colors.gray[1],
                borderRadius: theme.radius.lg,
                color: isSelected ? 'white' : theme.colorScheme === 'dark' ? 'white' : 'black',
                cursor: 'pointer',
                fontSize: theme.fontSizes.xl,
                fontWeight: isSelected ? 'bold' : 'normal',
                height: 40,
                marginBlock: theme.spacing.xs,
                padding: theme.spacing.xs,
                textAlign: 'left',
                textDecoration: 'none',
                textTransform: 'capitalize',
                transition: 'background-color, box-shadow 0.3s ease-in-out',

                '&:hover': {
                    backgroundColor: isSelected
                        ? theme.colors.indigo[7]
                        : theme.colorScheme === 'dark'
                        ? theme.colors.gray[8]
                        : theme.colors.gray[2],
                },
            })}
        >
            {text}
        </Box>
    )
}
