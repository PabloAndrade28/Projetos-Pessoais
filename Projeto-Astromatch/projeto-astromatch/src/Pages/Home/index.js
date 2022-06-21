import React from 'react'
import { Container } from './style'
import BoxMatch from '../../Components/BoxMatch'


export default function Home(props) {
  return (
    <Container>
      <BoxMatch matchPage={props.matchPage} />
    </Container>

  )
}
