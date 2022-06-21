import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle, Container } from './style';
import { goToListTripPage, goToLoginPage } from '../../Routes/coordinator';





const HomePage = () => {

  const navigate = useNavigate()


  return (
    <Container>

      <h1>LabeX</h1>
      <ButtonStyle>
        <Button onClick={() => goToListTripPage(navigate)} className='button1' variant="outlined" ><strong>Ver Viagens</strong></Button>
        <Button onClick={() => goToLoginPage(navigate)} className='button2' variant="outlined"><strong>Area do Admin</strong></Button>
      </ButtonStyle>

    </Container>
  )
}

export default HomePage