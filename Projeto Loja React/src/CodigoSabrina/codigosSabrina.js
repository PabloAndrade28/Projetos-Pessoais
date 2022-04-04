
// =================== CODIGO APP.JS =========================

//import React from 'react';
// import './App.css';
// import botas from "./img/botas.webp";
// import capacete from "./img/capacete.jpg";
// import camiseta from "./img/camiseta.jpg";
// import Home from "./components/Home"
// import productList from "./data/products.json"
// import { Carrinho } from './components/Carrinho';
// import styled from 'styled-components';
// import { Filtro } from './components/Filtros';

// const Container = styled.div`
// display: grid;
// grid-template-columns:  1fr 30fr 1fr 1fr;
// column-gap: 3.5rem;
// padding-left: 2rem;
// padding-top: 2rem;

// `

// const ContainerFiltro = styled.div`
// border: 1px solid black;
// width: 12rem;
// padding: 1rem;

// h3{
//     padding-bottom: 1rem;
//     text-align: center;
// }

// `
// const Input = styled.input`
// width: 8.5rem;

// `

// class App extends React.Component {
//   state = {
//     produtos: productList,
//     query: ""
//   };

//   updateQuery=(ev)=>{
//     this.setState({
//       query: ev.target.value
//     })
//   }

//   render() {
//     return (
//       <Container>

//          <ContainerFiltro>
//         <h3>Filtros</h3>

//         <div>
//           <p>Valor mínimo:</p>
//           <Input value={this.state.query}
//           onChange={this.updateQuery}/>
//         </div>
        
//         <div>
//           <p>Valor máximo:</p>
//           <Input value={this.state.query}
//           onChange={this.updateQuery}/>
//         </div>
        
//         <div>
//           <p>Buscar por nome:</p>
//           <Input value={this.state.query}
//           onChange={this.updateQuery}/>
//         </div>
//       </ContainerFiltro>

//       {/* <Filtro /> */}


//       <div >
//         {this.state.produtos
//         .filter(produto =>{
//           return produto.name.toLowerCase().incluedes(this.state.query.toLowerCase())
//         })
//         .map(produto => {
//         return <Home key={produto.id} produto = {produto}/>
//       })} 
//       </div>


//       {/* <Home produtos = {this.state.produtos} >
//       </Home> */}
//       <Carrinho/>
//       </Container>
//     )
//   }
// }
// export default App;




// ================== COMPONENTES ======================

//import React from "react";
// import styled from "styled-components";
// import produto from "./data/products.json"

// const ItensDentroCarrinho = styled.div`
// border: 1px solid black;
// width: 12rem;
// padding: 1rem;

// h3{
//     padding-bottom: 1rem;
//     text-align: center;
// }
// `;

// export class Carrinho extends React.Component {

//   // state = {
//   //   produtos: productList,
//   // }

//  AdicionaProduto = (produtoId) => {
//     const produtosCarrinho = this.state.produtos.find(
//       (produtos) => produtoId === produtos.id
//     );
//     if (produtosCarrinho) {
//       const novoProduto = this.state.produtos.map((produtos) => {
//         if (produtoId === produtos.id) {
//           return {
//             quantidade: produtos.quantidade + 1,
//             ...produtos,
//           };
//         }
//         return produtos;
//       });
//       this.setState({ produtosCarrinho: novoProduto });
//     } else {
//     }
//   };

//   onClickRemoveProduto = (produtoId) => {
//     const novoProduto = this.state.produto.map((produto) => {

//     })
//   }


//   render() {
//     return (
//       <ItensDentroCarrinho>
//         <h3>Carrinho</h3>
//         <div >Produdo no carrinho!</div>
//         <button onClick={this.onClickRemoveProduto}> Remover </button>
//         <div>valor da compra</div>
//       </ItensDentroCarrinho>
//     );
//   }
// }
