import React, { useState, useEffect } from 'react'
import { Container, ContainerWrapperButton } from './style'
import imglogo from '../../imglogo/transferir.png'
import { BiSpreadsheet } from 'react-icons/bi'
import CardMatch from '../CardMatch/index'
import api from '../../Services/api'
import MatchList from '../MatchLists'
import { AiFillHome, AiFillLike, AiFillDislike } from 'react-icons/ai'
import { MdOutlineCleaningServices } from 'react-icons/md'


export default function BoxMatch(props) {

  const [profile, setProfile] = useState({})
  const [showList, setShowList] = useState(false)


  const getProfile = async () => {
    try {
      const response = await api.get('person')
      setProfile(response.data.profile)
      console.log(response);

    } catch (error) {
      console.log('Error', error)

    }
  }

  const choosePerson = async (choice) => {
    try {
      const response = await api.post('choose-person',
        {
          id: profile.id,
          choice: choice
        }
      )

      console.log(response);

      getProfile()

    } catch (error) {
      console.log('Error', error)

    }
  }

  const ClearList = async () => {
    try {
      await api.put('clear')

      setShowList(false)

    } catch (error) {
      console.log('Error', error)

    }
  }


  const GoToList = () => {
    setShowList(true)
  }

  const GoToCards = () => {
    setShowList(false)
  }

  useEffect(() => {
    getProfile()   

  }, [])



  return (
    <Container>
      <div className='header'>
        <img className='logo' src={imglogo} />
        {showList ? (
          <>
            <button
              onClick={GoToCards}
              className='button-list cards'> <AiFillHome size={30} />
            </button>
            <button
              onClick={ClearList}
              className='button-list match'> <MdOutlineCleaningServices size={30} />
            </button>
          </>
        ) : (
          <button
            onClick={GoToList}
            className='button-list match'> <BiSpreadsheet size={30} /></button>


        )}



      </div>

      {showList ? (
        <MatchList />
      ) : (
        <>
          <div className='content'>

            <CardMatch profile={profile} />

          </div>


          <ContainerWrapperButton>

            <button className='buttonMatch'
              onClick={() => choosePerson(true)}> <AiFillLike size={50} /></button>
            <button className='buttonMatch'
              onClick={() => choosePerson(false)}><AiFillDislike size={50} /></button>
          </ContainerWrapperButton>
        </>
      )}


    </Container>


  )
}
