import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.InputPost {
    margin-top: 30px;
    width: 400px;
}

`

export const ContainerLogo = styled.div`
display: flex;
flex-direction: row-reverse;
flex-direction: column;

img {
    width: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}

`

export const CardPosts = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border: solid 1px;
margin: 10px;
border-radius: 10px;
background-image: linear-gradient(OrangeRed, white);   
position: static;
width: 350px;
.fontSize {
    font-size: 13px;
    margin-right: 130px;
}

.MarginChatBox{
    margin-left: 100px;
    
}


`