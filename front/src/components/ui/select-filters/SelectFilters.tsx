// @vendors
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Group, NativeSelect, Select } from '@mantine/core'

// @constants
import { CATEGORYFILTERS, FIELDPOSITIONS, MONTHLYSTATUS } from '~/constants'

export const SelectFilters: React.FC = () => {
    const { t } = useTranslation('fieldPosition')

    const category = FIELDPOSITIONS.map(value => t(value))

    const [value, setValue] = useState({ category: '', fieldPosition: '', status: '' })

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

            <Select
                value={value.fieldPosition}
                onChange={e => {
                    setValue({ ...value, fieldPosition: e || '' })
                }}
                searchable
                nothingFound="No se encontraron resultados"
                data={category}
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
