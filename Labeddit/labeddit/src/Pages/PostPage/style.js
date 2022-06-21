import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img {
    width: 150px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}
`

export const CardComment = styled.div`
display: flex;
align-items: center;
flex-direction: column;
border: solid 1px;
margin: 10px;
border-radius: 10px;
background-image: linear-gradient(DarkOrange, white);
width: 350px ;

.fontSize {
    font-size: 13px;
    margin-right: 130px;
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
.fontSize {
    font-size: 13px;
    margin-right: 130px;
}
`