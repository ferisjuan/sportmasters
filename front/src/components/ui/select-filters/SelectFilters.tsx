// @vendors
import { useEffect, useState } from 'react'
// import { useTranslation } from 'react-i18next'
import { Group, NativeSelect } from '@mantine/core'

// @constants
import { CATEGORYFILTERS, FIELDPOSITIONS, MONTHLYSTATUS } from '~/constants'

// @hooks
import { usePlayerFilters } from '../player/player-grid/hooks/usePlayers'

export const SelectFilters: React.FC = () => {
    // const { t } = useTranslation('fieldPosition')
    // const category = FIELDPOSITIONS.map(value => t(value))

    const [category, setCategory] = useState('')
    const [fieldPosition, setFieldPosition] = useState('')
    const [status, setStatus] = useState('')

    return (
        <Group grow>
            <NativeSelect
                value={category}
                onChange={e => {
                    setCategory(e.target.value)
                }}
                data={CATEGORYFILTERS}
                placeholder="Elige una opción"
                label="Categoria"
                variant="filled"
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
            />

            <NativeSelect
                value={fieldPosition}
                onChange={e => {
                    setFieldPosition(e.target.value)
                }}
                data={FIELDPOSITIONS}
                placeholder="Elige una opción"
                label="Posicion"
                variant="filled"
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
            />

            <NativeSelect
                value={status}
                onChange={e => {
                    setStatus(e.target.value)
                }}
                data={MONTHLYSTATUS}
                placeholder="Elige una opción"
                label="Estado mensual"
                variant="filled"
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
            />
        </Group>
    )
}
