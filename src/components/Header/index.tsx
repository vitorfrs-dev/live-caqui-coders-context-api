import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Logo,
  BasketArea,
  BasketCounter,
  BasketItem,
  Divider,
  BtnSignIn,
  UserArea
} from './styles';

import AuthAside from '../AuthAside';

import { FaShoppingBasket } from 'react-icons/fa';
import { AppContext } from '../../provider/AppProvider';

const Header: FC = () => {

  const { state } = useContext(AppContext);
  const { user, signed } = state;
  const { basket } = state;

  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="inner-container">
        <Logo>
          <Link to='/'>
            Dev Store
          </Link>
        </Logo>
        <aside>
          <Link to='/shoppingcart'>
            <BasketArea>
              <FaShoppingBasket size={25} />
              {basket.length > 0 && (
                <>
                  <BasketCounter>{basket.length}</BasketCounter>
                  <div className="basket-drop-down">
                    {basket.map(item => (
                      <BasketItem key={item.id}>
                        <img src={item.imageUrl} alt={item.imageUrl} />
                        <div>
                          <strong>{item.title}</strong>
                          <span>{item.price}</span>
                          <span>{item.quantity}X</span>
                        </div>
                      </BasketItem>
                    ))}
                  </div>
                </>
              )}
            </BasketArea>
          </Link>
          <Divider />

          {!signed && (
            <BtnSignIn onClick={() => setOpen(true)}>Entrar</BtnSignIn>
          )}

          {signed && (
            <UserArea>
              <div>
                <span>Olá, <strong>{user.name}</strong></span>
              </div>
              <img src={user.avatarUrl} alt="user avatar" onClick={() => setOpen(true)} />
            </UserArea>
          )}

        </aside>
      </div>
      <AuthAside open={open} onClose={() => setOpen(false)} />
    </Container>
  )
}

export default Header;