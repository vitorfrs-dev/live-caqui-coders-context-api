import React from 'react';

import IProduct from '../../models/product';

import { Container, Title, Price, Button } from './styles';

interface IProductCard extends IProduct {
  addToBasket: (id: string) => void
}

const ProductCard = ({ id, title, price, imageUrl, addToBasket }: IProductCard) => {
  return (
    <Container>
      <img src={imageUrl} alt={title} />
      <Title>{title}</Title>
      <Price>{price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Price>
      <Button 
        onClick={() => addToBasket(id)}
        data-cy='add-to-cart-btn'
      >
        Add ao carrinho
      </Button>
    </Container>
  )
}

export default ProductCard;