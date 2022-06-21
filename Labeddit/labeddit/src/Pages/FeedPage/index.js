import ImgLogo from '../../img/RedditLogo.png'
import { MainContainer, ContainerLogo, CardPosts } from './style'
import api from '../../Services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { grey } from "@mui/material/colors"
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { IoMdChatboxes } from 'react-icons/io'
import { Loading } from '../../Components/Loading'


const FeedPage = (props) => {
    useProtectedPage()

    const [posts, setPosts] = useState([])
    const [post, setPost] = useState('')
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handlePost = (event) => {
        setPost(event.target.value)
    }

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }


    const getPosts = async () => {
        setLoading(true)
        const token = window.localStorage.getItem('token')

        try {
            const response = await api.get(`posts`, {
                headers: {
                    Authorization: token
                }
            }
            )
            setPosts(response.data)
            setTitle('')
            setPost('')

        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const postPosts = async () => {
        const token = window.localStorage.getItem('token')
        const body = {
            title: title,
            body: post
        }

        try {
            await api.post(`posts`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            getPosts()
            alert('Seu post foi criado com sucesso !')

        } catch (error) {
            alert('Erro ao criar post')
        }
    }

    const postVotePost = async (id) => {
        const token = window.localStorage.getItem('token')
        const body = {
            direction: 1
        }
        try {
            await api.post(`posts/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto computado')
            getPosts()

        } catch (error) {
            alert('Erro ao votar')
        }
    }

    const putVotePost = async (id) => {
        const token = window.localStorage.getItem('token')
        const body = {
            direction: -1
        }
        try {
            await api.put(`posts/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto computado')
            getPosts()

        } catch (error) {
            alert('Erro ao votar')
        }
    }

    const buttonLike = (id, vote) => {
      if(vote == 1){
          delVotePost(id)

      }else {
          postVotePost(id)
      }

    }

    const buttonDislike = (id, vote) => {
        if(vote == -1){
            delVotePost(id)
  
        }else {
            putVotePost(id)
        }
  
      }


    const delVotePost = async (id) => {
        const token = window.localStorage.getItem('token')

        try {
            await api.delete(`posts/${id}/votes`,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto excluído !')
            getPosts()

        } catch (error) {
            alert('Erro excluir voto !')
        }
    }

    useEffect(() => {
        getPosts()

    }, [])

    const goToCommentPage = (item) => {
        props.setCurrentPost(item)
        navigate(`/PostPage/${item.id}`)
    }


    const arrayPosts = posts.map((item) => {
        return (
            <CardPosts key={item.id}>
                <p className='fontSize'>Enviado por: <strong>{item.username}</strong></p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>

                <div>
                    <AiOutlineArrowUp color={item.userVote == 1 ? 'orange' : 'black'} onClick={() => buttonLike( item.id, item.userVote)} size={30} />
                    <strong>{item.voteSum}</strong>
                    <AiOutlineArrowDown color={item.userVote == -1 ? 'orange' : 'black'} onClick={() =>  buttonDislike(item.id, item.userVote)} size={30} />

                    <IoMdChatboxes onClick={() => goToCommentPage(item)} className='MarginChatBox' size={30} />
                    <strong>{item.commentCount}</strong>
                </div>
            </CardPosts>
        )
    })



    return (
        <MainContainer>
            <ContainerLogo>

                <Button style={{ color: grey[900] }} onClick={handleLogout}><strong>Logout</strong></Button>
                <img src={ImgLogo} />

            </ContainerLogo>
            <TextField onChange={handleTitle} value={title} placeholder='Digite o título do seu post' />
            <TextField className='InputPost' multiline onChange={handlePost} value={post} placeholder='Digite seu post...' />
            <Button style={{ color: grey[900] }} onClick={postPosts} className="button1"><strong>Enviar post</strong></Button>
            {loading ? (<Loading />) : arrayPosts}

        </MainContainer>
    )
}

export default FeedPage