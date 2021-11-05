import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Layout } from 'antd';

import {AppRouter, Navbar} from './components';
import './App.css';

function App() {

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
