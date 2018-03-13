import React from 'react'
import styled from 'styled-components'
import withData from '../withData'

const ServicesContainer = styled.div`
  margin: 1rem;
  width: 100%;
  margin: 0;
  padding: 1rem;
`

const Title = styled.div`
  font-size: 1.25rem;
  color: gray;
`

const ServicesList = styled.ul`
  color: lightslategrey;
  list-style: circle;
  margin: 0;
  padding: 0 1rem;
`

const Service = styled.li`
  font-size: 1rem;
  margin: 0.5rem 0;
`

const Services = ({ data }) => {
  if (!data.services) return null
  const { items, title } = data.services
  const services = items.map(item => <Service>{item}</Service>)
  return (
    <ServicesContainer>
      <Title>{title}</Title>
      <ServicesList>{services}</ServicesList>
    </ServicesContainer>
  )
}

export default withData(Services)
