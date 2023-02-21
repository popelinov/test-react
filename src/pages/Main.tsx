import React from 'react'
import { MainTable } from '../layouts'
import { Container } from 'reactstrap'

const Main = () => {
  return (
    <Container>
      <MainTable />
    </Container>
  )
}

export default React.memo(Main)
