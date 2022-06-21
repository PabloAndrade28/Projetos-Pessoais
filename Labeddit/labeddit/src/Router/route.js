import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from '../Pages/LoginPage'
import FeedPage from '../Pages/FeedPage'
import PostPage from '../Pages/PostPage'
import RegisterPage from '../Pages/RegisterPage'
import styled from 'styled-components'
import { useState } from 'react'


const GlobalStyled = styled.div`
margin: 0px;
padding: 0px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`


export const Router = () => {
    const [currentPost, setCurrentPost] = useState({})
    return (

        

        <GlobalStyled>
            <BrowserRouter>

                <Routes>

                    <Route index element={<LoginPage />} />
                    <Route path='FeedPage' element={<FeedPage setCurrentPost = {setCurrentPost} />} />
                    <Route path='PostPage/:id' element={<PostPage currentPost = {currentPost} />} />
                    <Route path='RegisterPage' element={<RegisterPage />} />

                </Routes>

            </BrowserRouter>

        </GlobalStyled>
    )




}



