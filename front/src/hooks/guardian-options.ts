// @vendors
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// @enums
import { Guardian_Type } from '../generated/graphql'

const rawGuardianOptions = Object.entries(Guardian_Type).map(([key, value]) => ({
    key,
    value,
}))

type TRecord = Record<string, string>[]

interface IGuardianOptions {
    guardianOptions: TRecord
}

export function useGuardianOptions(): IGuardianOptions {
    const { t } = useTranslation('familySupport')

    const [guardianOptions, setParsedGuardianOptions] = useState<TRecord>([])

    useEffect(() => {
        const _guardianOptions = rawGuardianOptions.map(({ key, value }) => ({
            value: key,
            label: t(`${value}`),
        }))

        const sortedGuardianOptions = _guardianOptions
            .sort((a, b) => a.label.localeCompare(b.label))
            .filter(({ value }) => value !== Guardian_Type.None)

        sortedGuardianOptions.unshift({
            value: Guardian_Type.None,
            label: t(`${Guardian_Type.None}`),
        })

        setParsedGuardianOptions(sortedGuardianOptions)
    }, [t])

    return { guardianOptions }
}
