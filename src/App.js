import React from 'react';
import Header from './components/header';
import Landing from './containers/landing';
import store from './redux/store';
import { Provider } from 'react-redux';
import Footer from './components/footer';
import DiscountWidget from './common/discount.widget';

function App() {
  DiscountWidget.setDiscount();

  return (<Provider store={store}>
    <Header />
      <Landing />
    <Footer />
  </Provider>
  );
}

export default App;
