import React, { useState, useEffect } from 'react'
import api from '../../Services/api'
import { Container, ContainerDiv } from './style'

const PageMatchList = () => {

    const [matchList, setMatchList] = useState([])


    const getMatchList = async () => {
        try {
            const response = await api.get('matches')
            setMatchList(response.data.matches)
            console.log(response);

        } catch (error) {
            console.log('Error', error)

        }
    }

    useEffect(() => {
        getMatchList()

    }, [])

    const arrayMatchList =
        matchList.map(matchs => {
            return (
                <div>
                    <p>{matchs.name}</p>
                    <p>{matchs.age}</p>
                    <p>{matchs.bio}</p>
                    <img src={matchs.photo} />

                </div>



            )

        })




    return (
        <Container>

            <ContainerDiv>
                {arrayMatchList}
            </ContainerDiv>

        </Container>
    )
}



export default PageMatchList