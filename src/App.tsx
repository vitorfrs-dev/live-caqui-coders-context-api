import React, { FC } from 'react';
import AppProvider from './provider/AppProvider';

// import HomePage from './pages/HomePage';
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
