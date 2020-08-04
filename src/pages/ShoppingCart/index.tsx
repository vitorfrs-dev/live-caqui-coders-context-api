import React, { FC, useContext } from 'react';

import { AppContext } from '../../provider/AppProvider';

import {
  Container,
  ProductTable,
  Quantity,
  TotalArea,
  EmptyCart,
  DeleteBtn
} from './styles';

import {
  incrementProduct,
  decrementProduct,
  removeProduct
} from '../../provider/actions';

import emptyCartIcon from '../../assets/empty-cart.png';
import { MdDelete } from 'react-icons/md';

const ShoppingCart: FC = () => {

  const { state, dispatch } = useContext(AppContext);

  const { basket } = state;

  const add = (id: string) => {
    dispatch(incrementProduct(id));
  }

  const remove = (id: string) => {
    dispatch(decrementProduct(id));
  }

  const removeAll = (id: string) => {
    dispatch(removeProduct(id));
  }

  const calcPrice = (): number => {
    if (basket.length === 0) return 0;
    const prices: number[] = basket.map(item => item.price * item.quantity);
    const total = prices.reduce((prev, current) => prev + current);
    return total;
  }

  return (
    <Container>
      {basket.length === 0 && (
        <EmptyCart>
          <img src={emptyCartIcon} alt="Carrinho vazio" />
          <h3>Ops, você ainda não escolheu nada pra chamar de seu :(</h3>
          <p>Volte a tela principal e selecione um ou mais produtos!</p>
        </EmptyCart>
      )}

      {basket.length > 0 && (
        <>
          <main>
            <ProductTable>
              <thead>
                <th />
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th />
              </thead>
              <tbody>
                {basket.map(item => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.imageUrl} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                    <td>
                      <Quantity>
                        <button onClick={() => remove(item.id)}>-</button>
                        <input type="text" value={item.quantity} disabled />
                        <button onClick={() => add(item.id)}>+</button>
                      </Quantity>
                    </td>
                    <td>{Number(item.quantity * item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                    <td>
                      <DeleteBtn
                        onClick={() => removeAll(item.id)}
                      >
                        <MdDelete size={22} />
                      </DeleteBtn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>
          </main>

          <aside>
            <TotalArea>
              <h3>Total</h3>
              <span>{calcPrice().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
            </TotalArea>
          </aside>
        </>
      )}

    </Container>
  );
}

export default ShoppingCart;
