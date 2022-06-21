import React from 'react'
import { Container } from './style'


const CardMatch = (props) => {

    

    return (

        <Container>
        <p><strong>Meu nome é {props.profile.name}</strong></p>   
        <p><strong>Tenho {props.profile.age} anos</strong></p> 
        <p><strong>Descrição: {props.profile.bio}</strong></p> 
        <img className='PhotoProfile' src={props.profile.photo}/>      
        </Container>
    )
}

export default CardMatch