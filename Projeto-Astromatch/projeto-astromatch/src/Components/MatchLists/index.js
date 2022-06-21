import React, { useState, useEffect } from 'react'
import api from '../../Services/api'
import { ContainerList, WrapperPersons } from './style'

export default function MatchList() {
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
                <WrapperPersons>
                   
                    <img src={matchs.photo} />
                    <p><strong>{matchs.name}</strong></p>

                </WrapperPersons>
            )
        })

    return (
       
            <ContainerList>
                {arrayMatchList.length > 0 && (
                    <h4 className='title'>Deram match com você</h4>
                )}
                 
                <div className='circle'></div>
                {arrayMatchList}
            </ContainerList>
        
    )
}
