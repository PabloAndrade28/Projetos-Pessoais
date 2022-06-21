import { useState } from 'react'
import { MainContainer } from "./style"
import ImgLogo from '../../img/RedditLogo.png'
import api from "../../Services/api"
import { useNavigate } from "react-router-dom"
import { Button, TextField } from '@mui/material'
import { grey } from '@mui/material/colors'




const RegisterPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleName = (event) => {
        setName(event.target.value)

    }

    const handleEmail = (event) => {
        setEmail(event.target.value)

    }

    const handlePassword = (event) => {
        setPassword(event.target.value)

    }



    const postCreateRegister = async () => {
        const body = {
            username: name,
            email: email,
            password: password
        }

        try {
            await api.post(`users/signup`, body)
            alert('Cadastro criado com sucesso !')
            navigate('/')


        } catch (error) {

            alert('Erro ao criar cadastro. Confira se você digitou entre 8 e 30 caracteres na senha !')
        }
    }



    return (
        <MainContainer>
            <img src={ImgLogo} />

            <h2>Olá, boas vindas ao LabEddit ;)</h2>

            <TextField variant="standard" onChange={handleName} value={name} type='text' label="Nome de usuário" />
            <TextField variant="standard" onChange={handleEmail} value={email} type='email' label="E-mail" />
            <TextField variant="standard" onChange={handlePassword} value={password} type='password' label="Senha" />

            <p>Ao continuar, você concorda com o nosso contrato de usuário e nossa política de privacidade</p>
            <div>
                <input type="checkbox" />
                <label for="scales">Eu concordo em receber e-mails do LabeEddit</label>
            </div>

            <Button style={{ color: grey[900] }} onClick={postCreateRegister}><strong>Cadastrar</strong></Button>
            <Button style={{ color: grey[900] }} onClick={() => navigate('/')}><strong>Voltar</strong></Button>
        </MainContainer>
    )
}

export default RegisterPage