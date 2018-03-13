import React from 'react'
import styled from 'styled-components'
import DataProvider from '../components/DataProvider'
import AppHeader from '../components/AppHeader'
import Services from '../components/Services'

const HomeStyles = styled.div`
  margin: 0;
  padding: 0;
`

export default () => (
  <HomeStyles>
    <AppHeader />
    <Services />
  </HomeStyles>
)
