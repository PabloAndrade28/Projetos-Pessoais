import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
border: solid 2px;
border-radius: 20px;
background-color: white;
height: 700px;
width: 400px;

.logo{    
    width: 250px;

}

.header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    border-bottom: 1px solid gray;

    .button-list{
        &.cards{
            margin-left: 10px;
            left: 0;
        }

        &.match{
            right: 0;   
    margin-right: 10px;

        }
    position: absolute;    
    border: 0;
    background: transparent;
    cursor: pointer;        
    }  

    
}
`

export const ContainerWrapperButton = styled.div`
display: flex;
width: 100%;
justify-content: center;

.buttonMatch{    
right: 0;   
margin-right: 10px;
border: 0;
background: transparent;
cursor: pointer; 
}

`
