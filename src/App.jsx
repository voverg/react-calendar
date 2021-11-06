import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Layout } from 'antd';

import {AppRouter, Navbar} from './components';
import {useActions} from './hooks/useActions.js';
import './App.css';

function App() {
  const {setUser, setIsAuth} = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser( {username: localStorage.getItem('username' || '')} )
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
