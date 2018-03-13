import React from 'react'
import styled from 'styled-components'
import DataProvider from '../components/DataProvider'
import AppHeader from '../components/AppHeader'
import Services from '../components/Services'
import Causes from '../components/Causes'
import Laws from '../components/Laws'
import Offices from '../components/Offices'

const HomeStyles = styled.div`
  margin: 0;
  padding: 0;
`

export default () => (
  <HomeStyles>
    <AppHeader />
    <Services />
    <Causes />
    <Laws />
    <Offices />
  </HomeStyles>
)
