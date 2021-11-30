import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { JoinPage, LoginPage, MainPage } from './pages';
import GlobalStyle from './styles/globalStyles';
import ProductRegisterPage from './pages/ProductRegisterPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/product-register" component={ProductRegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
