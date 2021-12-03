/* eslint-disable prettier/prettier */
// @vendors
import { Box } from '@mantine/core'
import { Link } from 'react-router-dom'

// @constants
import { ROUTES } from 'constants/index'
import { useEffect, useState } from 'react'

interface ILinkBoxProps {
    icon?: string
    onClick?: () => void
    selected: ROUTES
    text: string
    to: ROUTES
}

export const LinkBox = ({ onClick, selected, text, to }: ILinkBoxProps): JSX.Element => {
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        setIsSelected(selected === to)
    }, [selected, to])

    return (
        <Box
            component={Link}
            onClick={onClick}
            to={to}
            sx={(theme) => ({
                display: 'block',
                backgroundColor: isSelected
                    ? theme.colors.indigo[5] : theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[3],
                borderRadius: theme.radius.sm,
                color: isSelected ? 'white' :theme.colorScheme === 'dark' ? 'white' : 'black',
                cursor: 'pointer',
                fontSize: theme.fontSizes.xl,
                fontWeight: isSelected ? 'bold' : 'normal',
                padding: theme.spacing.lg,
                marginBlock: theme.spacing.md,
                textAlign: 'left',
                textDecoration: 'none',
                textTransform: 'capitalize',
                transition: 'background-color, box-shadow 0.3s ease-in-out',

                '&:hover': {
                    backgroundColor: isSelected ? theme.colors.indigo[7] : theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[1],
                    boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.25)',
                },
            })}
        >
            {text}
        </Box>
    )
}
