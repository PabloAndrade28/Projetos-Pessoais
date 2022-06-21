import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonStyle, Container } from './style';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Select, MenuItem } from '@mui/material';
import {goToBack} from '../../Routes/coordinator';
import api from '../../Services/api';
import { useProtectedPage } from '../../Hooks/useProtectedPage';




const CreateTripPage = () => {
    useProtectedPage () 

    const [name, setName] = useState('')
    const [planet, setPlanet] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState()

    
    const onChangeNameValue = (event) => {
        setName(event.target.value)
    }

    const onChangePlanetValue = (event) => {
        setPlanet(event.target.value)
    }

    const onChangeDateValue = (event) => {
        setDate(event.target.value)
    }

    const onChangeDescriptionValue = (event) => {
        setDescription(event.target.value)
    }

    const onChangeDurationValue = (event) => {
        setDuration(event.target.value)
    }


    const navigate = useNavigate()

    const createTrip = async () => {
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: duration
        }              

        const token = window.localStorage.getItem('token')


        try {
             await api.post('trips', body, {
                headers: {
                    auth: token
                }
            })
            
            alert('Uhuulll, parabéns, viagem criada com sucesso ! :)')        
           



        } catch (error) {
            console.log(error.response)
            alert('Erro ao criar viagem')
        }
    }

    

    
    return (
        <Container>
            <h1>Criar Viagem</h1>
            <TextField onChange={onChangeNameValue} value={name} id="standard-basic" label="Nome" variant="standard" />

            <Select value={planet}
                displayEmpty
                onChange={onChangePlanetValue}>

                <MenuItem value='' disabled>Escolha um planeta</MenuItem>
                
                <MenuItem value='Mercúrio'>Mercúrio</MenuItem>
                <MenuItem value='Sol'>Sol</MenuItem>
                <MenuItem value='Venus'>Venus</MenuItem>
                <MenuItem value='Plutão'>Plutão</MenuItem>
                <MenuItem value='Saturno'>Saturno</MenuItem>
                <MenuItem value='Urano'>Urano</MenuItem>
                <MenuItem value='Marte'>Marte</MenuItem>


            </Select>

            <TextField onChange={onChangeDateValue} value={date} type='date' id="standard-basic" variant="standard" />

            <TextField onChange={onChangeDescriptionValue} value={description} id="standard-basic" label="Descrição" variant="standard" />

            <TextField onChange={onChangeDurationValue} value={duration} id="standard-basic" label="Duração em dias" variant="standard" />

            <ButtonStyle>
                <Button onClick={() => goToBack(navigate)} className='button1' variant="outlined"><strong>Voltar</strong></Button>
                <Button onClick={createTrip} className='button2' variant="outlined"><strong>Criar</strong></Button>
            </ButtonStyle>
        </Container>
    )
}

export default CreateTripPage


