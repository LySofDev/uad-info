import React from 'react'
import styled from 'styled-components'
import withData from '../withData'
import List from '../List'

const Laws = ({ data }) => data.laws ? (
  <List
    title={data.laws.title}
    items={data.laws.items}
  />
) : null

export default withData(Laws)
