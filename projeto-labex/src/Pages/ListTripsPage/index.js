import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { ButtonStyle, Container, ContainerListTrip } from './style'
import { goToHomePage, goToApplicationFormPage } from '../../Routes/coordinator'
import api from '../../Services/api'
import { Loading } from '../../Components/Loading'




const ListTripsPage = () => {
    const navigate = useNavigate()

    const [listTrips, setListTrips] = useState([])
    const [loading, setLoading] = useState(false)

    const getTrips = async () => {
        setLoading(true)
        try {
            const response = await api.get('trips')
            setListTrips(response.data.trips)

        } catch (error) {
            console.log(error.response)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getTrips()
    }, [])

    const arrayListTrips = listTrips.map((trips) => {
        return (

            <ContainerListTrip key={trips.id}>

                <p><strong>Nome:</strong> {trips.name}</p>
                <p><strong>Descrição:</strong> {trips.description}</p>
                <p><strong>Planeta:</strong> {trips.planet}</p>
                <p><strong>Duração: </strong>{trips.durationInDays} dias</p>
                <p><strong>Data: </strong>{trips.date}</p>
                <br />

            </ContainerListTrip>
        )

    })



    return (
        <Container>
            <ButtonStyle>
                <Button onClick={() => goToHomePage(navigate)} className='button1' variant="outlined"><strong>Voltar</strong></Button>
                <Button onClick={() => goToApplicationFormPage(navigate)} className='button2' variant="outlined"> <strong>Inscrever-se</strong></Button>
            </ButtonStyle>
            <h1>Lista de Viagens</h1>

            <div>
                {loading ? (<Loading />) : arrayListTrips}

            </div>






        </Container>
    )
}

export default ListTripsPage