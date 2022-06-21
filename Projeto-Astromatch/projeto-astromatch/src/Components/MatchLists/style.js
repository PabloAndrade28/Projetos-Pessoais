import styled from "styled-components"

export const WrapperPersons = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: oblique;
font-size: larger;
display: flex;
flex-direction: row;
align-items: center;
margin: 20px;
img{
    width: 50px;
    border-radius: 25px;
    height: 50px;
    margin-right: 10px;
}
`

export const ContainerList = styled.div`
height: 100%;
border-radius: 13px;
overflow-y: auto;
position: relative;
.title {
    margin-left: 20px;
}
::-webkit-scrollbar {
	width: 5px;
	height: 5px;
} 

::-webkit-scrollbar-track-piece  {
	background-color: #3b3b3b;
	-webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
	background-color: #666;
	-webkit-border-radius: 6px;
}
`