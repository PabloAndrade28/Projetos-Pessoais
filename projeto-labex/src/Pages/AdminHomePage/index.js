import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle, Container, ContainerListTrip } from './style';
import { goToAdminHomePage, goToCreateTripePage, goToLoginPage } from '../../Routes/coordinator';
import api from '../../Services/api';
import { goToDetailPage } from '../../Routes/coordinator';
import {MdDelete} from 'react-icons/md'
import { useProtectedPage } from '../../Hooks/useProtectedPage';
import { Loading } from '../../Components/Loading';






const AdminHomePage = () => {

  useProtectedPage () 

  const navigate = useNavigate()

  const [listTrips, setListTrips] = useState([])
  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    goToLoginPage(navigate)
  }

  const getTrips = async () => {
    setLoading(true)
    try {
      const response = await api.get('trips')
      setListTrips(response.data.trips)

    } catch (error) {
      console.log('Error', error.response)

    }finally {
      setLoading(false)
    }
  }

  const delTrip = async (id) => {

    const token = window.localStorage.getItem('token')


    try {
      const response = await api.delete(`trips/${id}`, {
        headers: {
          auth: token
        }
      })
      console.log(response.data.trips);
      alert('Viagem excluída com sucesso :)')
      getTrips()

    } catch (error) {
      console.log(error.response)
      alert('Erro na exclusão da viagem')

    }
  }

  const arrayListTrips = listTrips.map((trips) => {
    return (
      <ContainerListTrip key={trips.id}>

        <p onClick={() => goToDetailPage(navigate, trips.id)}><strong>Nome:</strong> {trips.name}</p>
        <ButtonStyle>
          <MdDelete className='MdDelete' size={25} onClick={() => delTrip(trips.id)}          
            variant="outlined"/>
        </ButtonStyle>

      </ContainerListTrip>
    )

  })

  useEffect(() => {
    getTrips()
    const token = window.localStorage.getItem('token')

    if (token) {
        goToAdminHomePage(navigate)
    }
  }, [])


  return (
    <Container>
      <h1>Painel Administrativo</h1>
     {loading ? (<Loading />) : arrayListTrips}
      <ButtonStyle>
        <Button onClick={() => goToLoginPage(navigate)} className='button1' variant="outlined" ><strong>Voltar</strong></Button>
        <Button onClick={() => goToCreateTripePage(navigate)} className='button2' variant="outlined"><strong>Criar Viagem</strong></Button>
        <Button onClick={() => handleLogout()} className='button2' variant="outlined"><strong>Logout</strong></Button>
      </ButtonStyle>


    </Container>
  )
}

export default AdminHomePage