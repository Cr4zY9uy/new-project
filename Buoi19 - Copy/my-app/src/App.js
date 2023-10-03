import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layouts/header';
import Menu from './components/layouts/menu';
import Home from './components/pages/home';
import Category from './components/pages/category';
import Product from './components/pages/product';
import Cart from './components/pages/cart';
import SingUp from './components/pages/signup';
import Login from './components/pages/login';
import { AppProvider } from './context/context';
import STATE from './context/initState';
import { useState } from 'react';
import { useReducer } from 'react';
import reducer from './context/reducer';
function App() {
  const [state, dispatch] = useReducer(reducer, STATE);
  return (
    <AppProvider value={{ state, dispatch }}>
      <div className='app'>
        <Header />
        <Menu />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/category/:slug' element={<Category />} />
            <Route path='/products/:slug' element={<Product />} />
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/sign-up' element={<SingUp />} />
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
