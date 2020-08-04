import React, { FC, useEffect, useState, useContext } from 'react';

import fakeData from '../../fakeData.json';

import ProductCard from '../../components/ProductCard';

import { Container, GridArea } from './styles';
import IProduct from '../../models/product';
import { addToBasket } from '../../provider/actions';
import { AppContext } from '../../provider/AppProvider';

const Home: FC = () => {

  const [products, setProducts] = useState<IProduct[]>([]);

  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const products = getData();

    setProducts(products);
  }, []);

  const getData = (): IProduct[] => {
    return fakeData;
  }

  const addProductToBasket = (id: string): void => {
    const product = products.find(product => product.id === id);
    if (product) {
      dispatch(addToBasket({ ...product, quantity: 1 }));
    }
  }

  return (
    <Container>
      <h1>Nossos Produtos</h1>
      <GridArea>
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            price={product.price}
            addToBasket={addProductToBasket}
          />
        ))}
      </GridArea>
    </Container>
  )
}

export default Home;
