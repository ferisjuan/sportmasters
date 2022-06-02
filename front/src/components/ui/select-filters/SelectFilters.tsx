// @vendors
import { useState } from 'react'
// import { useTranslation } from 'react-i18next'
import { Group, NativeSelect } from '@mantine/core'

// @constants
import { CATEGORYFILTERS, FIELDPOSITIONS, MONTHLYSTATUS } from '~/constants'

// @hooks
import { usePlayerFilters } from '../player/player-grid/hooks/usePlayers'

export const SelectFilters: React.FC = () => {
    // const { t } = useTranslation('fieldPosition')
    const { handleFilters } = usePlayerFilters()

    // const category = FIELDPOSITIONS.map(value => t(value))

    const [value, setValue] = useState({ category: '', fieldPosition: '', status: '' })

    handleFilters(value.fieldPosition)

    return (
        <Group grow>
            <NativeSelect
                value={value.category}
                onChange={e => {
                    setValue({ ...value, category: e.target.value })
                }}
                data={CATEGORYFILTERS}
                placeholder="Elige una opción"
                label="Categoria"
                variant="filled"
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
            />

            <NativeSelect
                value={value.fieldPosition}
                onChange={e => {
                    setValue({ ...value, fieldPosition: e.target.value })
                }}
                data={FIELDPOSITIONS}
                placeholder="Elige una opción"
                label="Posicion"
                variant="filled"
                style={{ marginTop: '1rem', marginBottom: '1rem' }}
            />

            <NativeSelect
                value={value.status}
                onChange={e => {
                    setValue({ ...value, status: e.target.value })
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
