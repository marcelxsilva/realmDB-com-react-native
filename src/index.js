import React from 'react'
import { StatusBar } from 'react-native';
import Routes from './routes';

const index = () => {
  return (
    <>
    <StatusBar backgroundColor='#7159c1' barStyle='light-content' />
      <Routes />
    </>
  )
}

export default index
