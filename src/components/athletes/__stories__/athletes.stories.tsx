import React, { ReactElement } from 'react'
import { storiesOf } from '@storybook/react'

import { Athletes } from '../athletes'

storiesOf('Atoms', module).add(
    'Race Card Info',
    (): ReactElement => (
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
        />
    ),
)
