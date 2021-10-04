import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Athletes } from '../athletes'

test('loads and displays Athletes', async () => {
    render(
        <Athletes
            id={1}
            name="Alejandro"
            sex="M"
            date="01/04/1992"
            description="prueba"
            weight="80kg"
            sport="Surf"
            specialty="Swimming"
            level="100"
        />,
    )
})
