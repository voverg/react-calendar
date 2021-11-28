import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Layout } from 'antd';

import {AppRouter, Navbar} from 'components';
import UserService from 'api/UserService.js';
import {useActions} from 'hooks/useActions.js';
import './App.css';

function App() {
  const {setUser, setIsAuth} = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      const user = UserService.getUser(localStorage.getItem('username' || ''));
      setUser( {...user} )
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
