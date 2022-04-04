import React from "react";
import styled from "styled-components";

const Estilizacao = styled.div`
  max-width: 600px;
  border: 3px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-image: url(https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg);
`
const EstiloMain = styled.main`
display: flex;
justify-content: center;
align-items: center;

`

const DivPai = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
height: 100vh;
`
const Global = styled.input`
outline: none;
`






class App extends React.Component {
  state = {

    pessoas: [],

    mostrarAviso: false,
    valorInputNome: "",
    valorInputMensagem: ""
  };

  adicionaPessoa = () => {  
    const Nome = this.state.valorInputNome
    const Mensagem = this.state.valorInputMensagem
    if(Nome === "" || Mensagem === ""){  
      this.setState({mostrarAviso: true})    
      return 

    }else{
      this.setState({mostrarAviso: false})
    }

    const novaPessoa = {     

      Nome,
      Mensagem

    };


    const novoPessoas = [...this.state.pessoas, novaPessoa];


    this.setState({
      pessoas: novoPessoas,
      valorInputMensagem: "",
      valorInputNome: "",

    });
  };





  onChangeInputNome = (event) => {

    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {

    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {

    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          <strong>{pessoa.Nome}</strong>: {pessoa.Mensagem}
        </p>
      );
    });

    return (
      <DivPai>
        <Estilizacao>

          <h1>WhatsLab</h1>

          <EstiloMain >

            <Global             

              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
              onKeyPress={event => {
                if(event.key === 'Enter') {
                  this.adicionaPessoa()
                }
              }
            }

            />
            <Global            

              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
              onKeyPress={event => {
                if(event.key === 'Enter') {
                  this.adicionaPessoa()
                }
              }
            }

            />

            <button

              onClick={this.adicionaPessoa}><strong>Enviar Mensagem</strong>
                         
      

            </button>

          </EstiloMain>
          {this.state.mostrarAviso && (
            <p>Campo obrigatório</p>
          )} 
          <div>{listaDeComponentes}</div>
        </Estilizacao>
      </DivPai>
    );
  }
}

export default App;
