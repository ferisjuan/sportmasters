// @vendors
import { AiFillEye, AiFillEyeInvisible, AiTwotoneLock } from 'react-icons/ai'
import { Button, PasswordInput } from '@mantine/core'
import { useTranslation } from 'react-i18next'

// @components
import { SMContainer } from '~/components'
import { useChangePasswordForm } from './useChangePasswordForm'

export const ChangePasswordForm: React.FC = () => {
    const { t } = useTranslation('changePasswordForm')

    const { getInputProps, handleFormSubmit, isChangePasswordLoading } = useChangePasswordForm()

    return (
        <SMContainer isLoading={isChangePasswordLoading}>
            <form onSubmit={handleFormSubmit}>
                <PasswordInput
                    required
                    label={t('passwordLabel')}
                    placeholder={t('passwordPlaceholder')}
                    visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                    }
                    icon={<AiTwotoneLock />}
                    {...getInputProps('password')}
                />

                <PasswordInput
                    required
                    label={t('passwordConfirmLabel')}
                    placeholder={t('passwordConfirmPlaceholder')}
                    visibilityToggleIcon={({ reveal, size }) =>
                        reveal ? <AiFillEyeInvisible size={size} /> : <AiFillEye />
                    }
                    icon={<AiTwotoneLock />}
                    {...getInputProps('passwordConfirm')}
                />

                <Button sx={{ marginTop: '20px' }} type="submit">
                    {t('changePasswordButton')}
                </Button>
            </form>
        </SMContainer>
    )
}
