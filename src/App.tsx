import React, { FC } from 'react';
import AppProvider from './provider/AppProvider';

import GlobalStyle from './styles/globals';
import Routes from './routes';

const App: FC = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  )
}

export default App;
