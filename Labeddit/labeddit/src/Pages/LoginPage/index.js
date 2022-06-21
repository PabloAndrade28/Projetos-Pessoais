import { MainContainer } from "./style"
import ImgLogo from '../../img/RedditLogo.png'
import { useState } from "react"
import api from "../../Services/api"
import { useNavigate } from "react-router-dom"
import { Button, InputAdornment, TextField } from "@mui/material"
import { grey } from "@mui/material/colors"
import { AccountCircle } from "@mui/icons-material"
import KeyIcon from '@mui/icons-material/Key'


const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }




    const navigate = useNavigate()

    const postLogin = async () => {
        const body = {
            email: email,
            password: password
        }

        try {
            const response = await api.post(`users/login`, body)
            alert('Seja bem vindo !')
            window.localStorage.setItem("token", response.data.token)
            navigate('/FeedPage')            
            setEmail('')
            setPassword('')

        } catch (error) {            
            alert('Usuário e/ou senha incorretas')
        }
    }



    return (

        <MainContainer>
            <img src={ImgLogo} />
            <h1>LabEddit</h1>
            <p>O projeto de rede social da Labenu</p>
            <TextField
                onChange={handleEmail}
                className="InputEmail"
                id="input-with-icon-textfield"
                label="E-mail"
                variant="standard"
                type="email"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
            />

            <TextField
                onChange={handlePassword}
                className="InputPassword"
                id="input-with-icon-textfield"
                label="Senha"
                variant="standard"
                type="password"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
            />

            <Button style={{ color: grey[900] }} onClick={postLogin} className="button1">Continuar</Button>
            <Button style={{ color: grey[900] }} onClick={() => navigate('/RegisterPage')} className="button2">Crie uma conta!</Button>
        </MainContainer>
    )


}

export default LoginPage