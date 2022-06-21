import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Container, ButtonStyle, ContainerListTrip, ButtonStyle2 } from './style'
import api from '../../Services/api'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { goToAdminHomePage } from '../../Routes/coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '../../Components/Loading'




const TripDetailsPage = () => {
  useProtectedPage()




  const [listTripDetail, setListTripDetail] = useState({})
  const [listCandidates, setListCandidates] = useState([{}])
  const [candidatesAproved, setCandidatesAproved] = useState([{}])
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const params = useParams()



  const getTripDetail = async () => {
    setLoading(true)


    const token = window.localStorage.getItem('token')


    try {
      const response = await api.get(`trip/${params.id}`, {
        headers: {
          auth: token
        }
      })
      setListTripDetail(response.data.trip)

    } catch (error) {
      console.log(error.response)

    } finally{
      setLoading(false)
    }
  }

  const getListCandidates = async () => {
    setLoading(true)


    const token = window.localStorage.getItem('token')


    try {
      const response = await api.get(`trip/${params.id}`, {
        headers: {
          auth: token
        }
      })
      setListCandidates(response.data.trip.candidates)


    } catch (error) {
      console.log(error.response)

    }finally{
      setLoading(false)
    }
  }

  const getListAproved = async () => {


    const token = window.localStorage.getItem('token')


    try {
      const response = await api.get(`trip/${params.id}`, {
        headers: {
          auth: token
        }
      })
      setCandidatesAproved(response.data.trip.approved)


    } catch (error) {
      console.log(error.response)

    }
  }



  const aproveCandidate = async (id) => {


    const token = window.localStorage.getItem('token')

    const body = {
      approve: true
    }


    try {
      await api.put(`trips/${params.id}/candidates/${id}/decide`, body, {
        headers: {
          auth: token
        }
      })
      alert('Usuário aprovado com sucesso !')
      getListAproved()
      getListCandidates()

    } catch (error) {
      console.log(error.response.data.message)

    }
  }

  const reproveCandidate = async (id) => {


    const token = window.localStorage.getItem('token')

    const body = {
      approve: false
    }


    try {
      await api.put(`trips/${params.id}/candidates/${id}/decide`, body, {
        headers: {
          auth: token
        }
      })

      alert('Usuário rejeitado com sucesso !')
      getListAproved()
      getListCandidates()





    } catch (error) {
      console.log(error.response.data.message)

    }
  }

  useEffect(() => {
    getTripDetail()
    getListCandidates()
    getListAproved()
  }, [])

  const arrayListApproved = candidatesAproved.map((trip) => {
    return (
      <div key={trip.id}>
        <p><strong>Nome: {trip.name}</strong></p>
      </div>
    )
  })

  const arrayListCandidates = listCandidates.map((trip) => {
    return (
      <div key={trip.id}>
        <p><b>Nome:</b> {trip.name}</p>
        <p><b>Profissão:</b> {trip.profession}</p>
        <p><b>Idade:</b> {trip.age}</p>
        <p><b>País:</b> {trip.country}</p>
        <p><b>Texto de Candidatura:</b> {trip.applicationText}</p>

        <div>

          < ButtonStyle2>
            <Button onClick={() => aproveCandidate(trip.id)} className='button1' variant="outlined"><strong>Aprovar</strong></Button>
            <Button onClick={() => reproveCandidate(trip.id)} className='button' variant="outlined"><strong>Reprovar</strong></Button>
          </ ButtonStyle2>

        </div>

      </div>
    )
  })


  return (
    <div>
      <Container>

        <ContainerListTrip>
          <p><strong>Nome:</strong> {listTripDetail.name}</p>
          <p><strong>Descrição:</strong> {listTripDetail.description}</p>
          <p><strong>Planeta:</strong> {listTripDetail.planet}</p>
          <p><strong>Duração: </strong>{listTripDetail.durationInDays} dias</p>
          <p><strong>Data: </strong>{listTripDetail.date}</p>
          <br />
        </ContainerListTrip>

        { loading ? (<Loading/>) : arrayListCandidates}
        <h3>Candidatos aprovados</h3>
        { loading ? (<Loading/>) : arrayListApproved}


      </Container>

      <ButtonStyle>
        <Button onClick={() => goToAdminHomePage(navigate)}
          variant="outlined">
          <strong>Voltar</strong>
        </Button>
      </ButtonStyle>

    </div>
  )
}

export default TripDetailsPage