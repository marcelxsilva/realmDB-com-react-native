import React from 'react'
import { StatusBar } from 'react-native';
import Main from './pages/Main';

const index = () => {
  return (
    <>
    <StatusBar backgroundColor='#7159c1' barStyle='light-content' />
      <Main />
    </>
  )
}

export default index
