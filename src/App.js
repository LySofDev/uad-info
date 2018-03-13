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
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

`

const AppStyles = styled.div`
  margin: 0;
  padding: 0;
`

export default () => (
  <Router>
    <AppStyles>
      <Routes />
    </AppStyles>
  </Router>
)
