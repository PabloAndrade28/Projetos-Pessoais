import React from "react";
import { ProductCard } from "./CarrinhoProdutos";
import styled from "styled-components";

const Titulo = styled.div`
  display: flex;

  p {
    font-size: 1.2rem;
  }
`;

const ProductsContainer = styled.div``;

const LogoImagem = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
`;

const Logo = styled.a`
font-size: 1.5rem;
font-style: oblique ;

`

const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background-color: #cee3f6;
  font-weight: bold;
  border-radius: 20px;
  select {
    border-radius: 2rem;
    width: 7.5rem;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
  background-color: #fff;
  border-radius: 50px;
`;

export class Products extends React.Component {
  state = {
    sort: "DECRESCENTE",
  };

  getFilteredAndOrderedList = () => {
    return this.props.products
      .filter((product) =>
        this.props.maxFilter ? product.price < this.props.maxFilter : true
      )
      .filter((product) =>
        this.props.minFilter ? product.price > this.props.minFilter : true
      )
      .filter((product) =>
        this.props.nameFilter
          ? product.name.includes(this.props.nameFilter)
          : true
      )
      .sort((a, b) =>
        this.state.sort === "CRESCENTE" ? a.price - b.price : b.price - a.price
      );
  };

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  render() {
    const filteredAndOrderedList = this.getFilteredAndOrderedList();
    return (
      <ProductsContainer>
          <LogoImagem src="https://img.icons8.com/ios/344/planet.png" />
          <Logo>C.E.U</Logo>
        <Titulo>
          <h2>Gostaria de viajar no tempo ou espaço?</h2>
          <p>
            <br />
            <br />
            Vá com C.E.U!
          </p>
        </Titulo>
        <ProductsHeader>
          <p>Quantidade de produtos: {filteredAndOrderedList.length}</p>
          <label>
            Ordenação:
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </label>
        </ProductsHeader>
        <ProductsGrid>
          {filteredAndOrderedList.map((product) => {
            return (
              <ProductCard
                product={product}
                onAddProductToCart={this.props.onAddProductToCart}
              />
            );
          })}
        </ProductsGrid>
      </ProductsContainer>
    );
  }
}
