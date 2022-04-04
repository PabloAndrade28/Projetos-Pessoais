import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #cee3f6;
  box-shadow: grey 1px 1px 2px 2px;
  background-color: #CEE3F6;
  img {
    width: 15rem;
    height: 10rem;
    border-radius: 0.5rem;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  
  p {
    margin: 4px 0;
  }
`;

const AddToCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  font-family: Verdana;
  font-weight: bold;
  font-size: 13px;
  padding: 6px 10px;
  text-decoration: none;
`;

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <CardContainer>
        <img src={product.photo} />
        <CardInfo>
          <p>
            <b>{product.name}</b>
          </p>
          <p>R${product.price},00</p>
          <AddToCartButton
            onClick={() => this.props.onAddProductToCart(product.id)}
          >
            Adicionar ao carrinho
          </AddToCartButton>
        </CardInfo>
      </CardContainer>
    );
  }
}
