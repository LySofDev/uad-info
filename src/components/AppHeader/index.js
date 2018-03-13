import React from 'react'
import styled from 'styled-components'
import getBoxShadow from 'dead-simple-box-shadow'
import logo from '../../assets/logo.gif'

const AppHeader = styled.div`
  display: inline-block;
  background: #d3cce3;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  box-shadow: ${getBoxShadow(1)};
`

const AppLogo = styled.img`
  height: 50px;
  width: 50px;
  box-shadow: ${getBoxShadow(1)};
  border-radius: 25px;
`

const AppTitle = styled.div`
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
`

export default props => (
  <AppHeader>
    <AppLogo src={logo} />
    <div style={{ width: "0.75rem" }} />
    <AppTitle>Unidad Antidiscrimen</AppTitle>
  </AppHeader>
)
