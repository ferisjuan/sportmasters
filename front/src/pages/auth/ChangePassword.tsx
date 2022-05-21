// @vendors
import { Router, useNavigate, useParams } from 'react-router-dom'

// @components
import { ChangePasswordForm } from '~/components'

const ChangePassword: React.FC = () => {
    const { token } = useParams()
    console.log('🚀🚀🚀 ~ file: ChangePassword.tsx ~ line 9 ~ token', token)

    return <ChangePasswordForm />
}

export default ChangePassword
