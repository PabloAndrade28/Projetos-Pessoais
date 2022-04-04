import React from 'react'
import { ShoppingCartItem } from './ProdutosEscolhidos'
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
  padding: 8px;
  background-color:#CEE3F6; 
  border-radius: 8px;
  
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`

const Logo = styled.img`
  width: 8rem;
  height: 8.5rem;
  border-radius: 2rem;
  display: grid;
  justify-items: end;
  padding-top:35rem ;
  padding-left: 1.8rem;
`;

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
      <Logo src="https://img.icons8.com/ios/344/launched-rocket.png"/>
    </ShoppingCartContainer>
  }
}