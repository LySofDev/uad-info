import React from 'react'
import styled from 'styled-components'

const ListContainer = styled.div`
  margin: 1rem;
  width: 100%;
  margin: 0;
  padding: 1rem;
`

const Title = styled.div`
  font-size: 1.25rem;
  color: gray;
`

const List = styled.ul`
  color: lightslategrey;
  list-style: circle;
  margin: 0;
  padding: 0 1rem;
`

const Item = styled.li`
  font-size: 1rem;
  margin: 0.5rem 0;
`

export default ({ title, items }) => {
  const listHash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

  return (
    <ListContainer>
      <Title>{title}</Title>
      <List>
        {items.map((item, index) => (
          <Item key={`${listHash}-${index}`}>{item}</Item>
        ))}
      </List>
    </ListContainer>
  )
}
