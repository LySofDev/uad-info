import React from 'react'
import styled from 'styled-components'
import withData from '../withData'
import List from '../List'

const Services = ({ data }) => data.services ? (
  <List
    title={data.services.title}
    items={data.services.items}
  />
) : null

export default withData(Services)
