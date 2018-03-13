import React from 'react'

import { storiesOf } from '@storybook/react'

import AppHeader from '../src/components/AppHeader'

storiesOf('AppHeader', module)
  .add('default', () => (
    <AppHeader />
  ))
