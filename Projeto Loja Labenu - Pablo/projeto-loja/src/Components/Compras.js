import React from 'react'
import { ShoppingCartItem } from './ProdutosEscolhidos'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  border: 8px solid black;
  padding: 8px;
  background-color: #d3d3d3;
  border-radius: 8px;
  
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0

    for(let product of this.props.productsInCart) {
      totalValue += product.price * product.quantity
    }

    return totalValue
  }

  render() {
    return <ShoppingCartContainer>
      <h3>Carrinho:</h3>
      <CartListContainer>
        {this.props.productsInCart.map((product) => {
          return <ShoppingCartItem 
                    cartItem={product} 
                    onRemoveProductFromCart={this.props.onRemoveProductFromCart}
                  />
        })}
      </CartListContainer>
      <p>Valor total: R${this.getTotalValue()},00</p>
    </ShoppingCartContainer>
  }
}