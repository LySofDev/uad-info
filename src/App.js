import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const AppStyles = styled.div`

`

export default () => (
  <Router>
    <AppStyles>
      <Routes />
    </AppStyles>
  </Router>
)
