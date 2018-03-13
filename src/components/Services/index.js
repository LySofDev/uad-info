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
  return (
    <ServicesContainer>
      <Title>{data.services.title}</Title>
      <ServicesList>
        {data.services.items.map((item, index) => (
          <Service key={`service-${index}`}>{item}</Service>
        ))}
      </ServicesList>
    </ServicesContainer>
  )
}

export default withData(Services)
