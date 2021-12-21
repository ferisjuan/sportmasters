import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        es: {
            translation: {
                familySupport: {
                    NONE: 'Ninguno',
                    BOTH_GRANDFATHERS: 'Ambos abuelos',
                    BOTH_PARENTS: 'Ambos padres',
                    FATHER: 'Padre',
                    GRANDFATHER: 'Abuelo',
                    GRANDMOTHER: 'Abuela',
                    MOTHER: 'Madre',
                },
                fieldPosition: {
                    NONE: 'Ninguno',
                    ATTACKING_MIDFIELDER: 'Mediocampista ofensivo',
                    CENTER_BACK: 'Centro-Pivote',
                    CENTER_FORWARD: 'Centro-Delantero',
                    CENTER_MIDDLEFIELDER: 'Mediocampista central',
                    DEFENSIVE_MIDFIELDER: 'Mediocampista defensivo',
                    GOAL_KEEPER: 'Portero',
                    LEFT_FULLBACK: 'Lateral-Pivote',
                    LEFT_MIDDLEFIELDER: 'Mediocampista lateral',
                    RIGHT_FULLBACK: 'Lateral-Pivote',
                    RIGHT_MIDDLEFIELDER: 'Mediocampista lateral',
                    SWEEPER: 'Rematador',
                },
                personalQualities: {
                    NONE: 'Ninguno',
                    FELLOWSHIP: 'Compañerismo',
                    PUNTUALITY: 'Puntualidad',
                    RESPONSABILITY: 'Responsabilidad',
                    SOLIDARITY: 'Solidaridad',
                },
                physicalCapabilities: {
                    NONE: 'Ninguno',
                    BALANCE: 'Balance',
                    COORDINATION: 'Coordinación',
                    FLEXIBILITY: 'Flexibilidad',
                    RESISTANCE: 'Resistencia',
                    SPEED: 'Velocidad',
                    STRENGTH: 'Fuerza',
                },
                physicalQualities: {
                    NONE: 'Ninguno',
                    AGILITY: 'Agilidad',
                    DIRBLING: 'Dribling',
                    JUMPING: 'Salto',
                },
                playerCategory: {
                    NONE: 'Ninguno',
                    FIRST: 'Huevito',
                    SECOND: 'Teterito',
                    THIRD: 'Pre pollito',
                    FOURTH: 'Pollito',
                    FIFTH: 'Pre infantil',
                    SIXTH: 'Infantil',
                    SEVENTH: 'Pre juvenil',
                    EIGHTH: 'Juvenil',
                },
                playerData: {
                    birthday: 'Fecha de nacimiento',
                    cancel: 'Cancelar',
                    email: 'Correo electrónico',
                    formTitle: 'Crea un nuevo jugador',
                    formTitleStudentData: 'Datos del estudiante',
                    formTitleGuardianData: 'Datos del acudiente',
                    guardian: 'Acudiente',
                    guardianPlaceholder: 'Selecciona un acudiente',
                    height: 'Altura',
                    lastName: 'Apellido (s)',
                    name: 'Nombre (s)',
                    phone: 'Teléfono',
                    save: 'Guardar',
                    weight: 'Peso',
                    errors: {
                        email: 'Correo electrónico inválido',
                        max: 'Este campo no puede tener más de 10 caracteres',
                        min: 'Este campo debe tener al menos 3 caracteres',
                        phone: 'Teléfono inválido',
                        minPhone: 'Este campo debe tener al menos 10 caracteres',
                        maxPhone: 'Este campo no puede tener más de 10 caracteres',
                        required: 'Este campo es obligatorio',
                    },
                },
                stats: {
                    weight: 'Peso',
                },
            },
        },
    },
})

export default i18n
