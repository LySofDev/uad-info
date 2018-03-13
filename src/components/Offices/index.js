import React from 'react'
import styled from 'styled-components'
import withData from '../withData'
import List, { randomHash } from '../List'

const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
`

const Line = styled.div`
  display: inline-block;
`

const buildAddress = lines => {
  const listHash = randomHash()

  return (
    <Address>
      {lines.map((line, id) => (
        <Line key={`${listHash}-${id}`}>{line}</Line>
      ))}
    </Address>
  )
}

const Offices = ({ data }) => data.offices ? (
  <List
    title={data.offices.title}
    items={data.offices.items.map(buildAddress)}
  />
) : null

export default withData(Offices)
