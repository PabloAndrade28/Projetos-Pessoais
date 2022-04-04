import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  //itens dentro do carrinho
  p {
    margin: 0;
  }
`;
const Botao = styled.button`
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

export class ShoppingCartItem extends React.Component {
  render() {
    return (
      <ItemContainer>
        <p>{this.props.cartItem.quantity}x</p>
        <p>{this.props.cartItem.name}</p>
        <Botao
          onClick={() =>
            this.props.onRemoveProductFromCart(this.props.cartItem.id)
          }
        >
          Remover
        </Botao>
      </ItemContainer>
    );
  }
}
