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
                auth: {
                    resetPassword: 'Revisa tu correo para resetear tu contraseña',
                    wrongCredentials: 'Usuario o contraseña incorrectos',
                },
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
                    dateDescription: 'dd/mm/yy',
                    email: 'Correo electrónico',
                    errors: {
                        date: 'Fecha inválida',
                        email: 'Correo electrónico inválido',
                        max: 'Este campo no puede tener más de 10 caracteres',
                        phoneLenght: 'Este campo debe tener 10 dígitos',
                        number: 'Este campo debe ser un número',
                        phone: 'Teléfono inválido',
                        required: 'Este campo es obligatorio',
                    },
                    formTitle: 'Crea un nuevo jugador',
                    formTitleGuardianData: 'Datos del acudiente',
                    formTitleStudentData: 'Datos del estudiante',
                    guardian: 'Acudiente',
                    guardianPlaceholder: 'Selecciona un acudiente',
                    height: 'Altura',
                    heightUnit: '(cm)',
                    idSelect: {
                        dni: 'Cedula de ciudadania',
                        passport: 'Pasaporte',
                        placeholder: 'Tipo de documento',
                    },
                    lastName: 'Apellido (s)',
                    name: 'Nombre (s)',
                    phone: 'Teléfono',
                    playerIdPlaceholder: 'ID del estudiante',
                    guardianIdPlaceholder: 'ID del acudiente',
                    save: 'Guardar',
                    weight: 'Peso',
                    weightUnit: '(kg)',
                },
                playersPage: {
                    loadingPlayers: 'Cargando jugadores',
                },
                stats: {
                    weight: 'Peso',
                },
            },
        },
    },
})

export default i18n
