import React from 'react'
import styled from 'styled-components'
import withData from '../withData'
import List from '../List'

const Causes = ({ data }) => data.causes ? (
  <List
    title={data.causes.title}
    items={data.causes.items}
  />
) : null

export default withData(Causes)
