import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GUARDIAN_OPTIONS } from 'enums'

const rawGuardianOptions = Object.entries(GUARDIAN_OPTIONS).map(([key, value]) => ({
    key,
    value,
}))

type TRecord = Record<string, string>[]

interface IGuardianOptions {
    guardianOptions: TRecord
}

export function useGuardianOptions(): IGuardianOptions {
    const { t } = useTranslation()

    const [guardianOptions, setParsedGuardianOptions] = useState<TRecord>([])

    useEffect(() => {
        const _guardianOptions = rawGuardianOptions.map(({ key, value }) => ({
            value: key,
            label: t(`familySupport.${value}`),
        }))

        const sortedGuardianOptions = _guardianOptions
            .sort((a, b) => a.label.localeCompare(b.label))
            .filter(({ value }) => value !== GUARDIAN_OPTIONS.NONE)

        sortedGuardianOptions.unshift({
            value: GUARDIAN_OPTIONS.NONE,
            label: t(`familySupport.${GUARDIAN_OPTIONS.NONE}`),
        })

        setParsedGuardianOptions(sortedGuardianOptions)
    }, [t])

    return { guardianOptions }
}
