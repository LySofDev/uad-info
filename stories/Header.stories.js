import React from 'react'

import { storiesOf } from '@storybook/react'

import AppHeader from '../src/components/Header'

storiesOf('AppHeader', module)
  .add('default', () => (
    <AppHeader />
  ))
