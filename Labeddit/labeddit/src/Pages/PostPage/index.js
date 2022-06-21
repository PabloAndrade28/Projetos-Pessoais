import { useEffect, useState } from "react"
import ImgLogo from '../../img/RedditLogo.png'
import { MainContainer, CardComment, CardPosts } from "./style"
import api from "../../Services/api"
import { useNavigate, useParams } from "react-router-dom"
import { useProtectedPage } from "../../Hooks/useProtectedPage"
import { Button, TextField } from "@mui/material"
import { grey } from "@mui/material/colors"
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { Loading } from '../../Components/Loading'

const PostPage = (props) => {
    useProtectedPage()

    const [commentPosts, setCommentPosts] = useState([])
    const [comment, setComment] = useState('')
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()

    const handleComment = (event) => {
        setComment(event.target.value)
    }

    const handleLogout = () => {
        window.localStorage.removeItem('token')
        navigate('/')
    }


    const getComments = async () => {
        setLoading(true)

        const token = window.localStorage.getItem('token')

        try {
            const response = await api.get(`posts/${params.id}/comments`, {
                headers: {
                    Authorization: token
                }
            }
            )
            setCommentPosts(response.data)


        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const postComment = async () => {
        const body = {
            body: comment
        }
        const token = window.localStorage.getItem('token')

        try {
            await api.post(`posts/${params.id}/comments`, body,
                {
                    headers: {
                        Authorization: token

                    }
                }

            )
            alert('Comentário enviado!')
            getComments()

        } catch (error) {
            alert('Erro ao enviar post')
            getComments()
        }
    }

    const postVotePost = async (id) => {
        const token = window.localStorage.getItem('token')
        const body = {
            direction: 1
        }
        try {
            await api.post(`comments/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto computado')
            getComments()

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
            await api.put(`comments/${id}/votes`, body,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto computado')
            getComments()

        } catch (error) {
            alert('Erro ao votar')
        }
    }

    const delVoteComments = async (id) => {
        const token = window.localStorage.getItem('token')

        try {
            await api.delete(`comments/${id}/votes`,
                {
                    headers: {
                        Authorization: token
                    }
                }

            )
            alert('Voto excluído !')
            getComments()

        } catch (error) {
            alert('Erro excluir voto !')
        }
    }

    const buttonLike = (id, vote) => {
        if (vote == 1) {
            delVoteComments(id)

        } else {
            postVotePost(id)
        }

    }

    const buttonDislike = (id, vote) => {
        if (vote == -1) {
            delVoteComments(id)

        } else {
            putVotePost(id)
        }

    }



    useEffect(() => {
        getComments()

    }, [])


    const arrayCommentPosts = commentPosts.map((item) => {
        return (
            <CardComment key={item.id}>
                <p className="fontSize">Enviado por: <strong>{item.username}</strong></p>
                <p>{item.body}</p>
                <div>
                    <AiOutlineArrowUp color={item.userVote == 1 ? 'orange' : 'black'} onClick={() => buttonLike(item.id, item.userVote)} size={30} />
                    <strong>{item.voteSum}</strong>
                    <AiOutlineArrowDown color={item.userVote == -1 ? 'orange' : 'black'} onClick={() => buttonDislike(item.id, item.userVote)} size={30} />
                </div>

            </CardComment>
        )
    })



    return (
        <MainContainer>
            <Button style={{ color: grey[900] }} onClick={handleLogout}><strong>Logout</strong></Button>
            <Button style={{ color: grey[900] }} onClick={() => navigate(-1)}><strong>Voltar</strong></Button>
            <img src={ImgLogo} />
            <CardPosts key={props.currentPost.id}>
                <p className='fontSize'>Enviado por: <strong>{props.currentPost.username}</strong></p>
                <h3>{props.currentPost.title}</h3>
                <p>{props.currentPost.body}</p>
            </CardPosts>

            <TextField multiline onChange={handleComment} value={comment} placeholder="Adicionar comentário..." />
            <Button style={{ color: grey[900] }} onClick={postComment}><strong>Enviar comentário</strong></Button>

            {loading ? (<Loading />) : arrayCommentPosts}


        </MainContainer>
    )
}

export default PostPage