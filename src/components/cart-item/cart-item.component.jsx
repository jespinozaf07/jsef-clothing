import React from 'react';

import {
  CardItemContainer,
  CartItemDetails,
  Name,
  Price,
} from './cart-item.styles';

export const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CardItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </CartItemDetails>
    </CardItemContainer>
  );
};
