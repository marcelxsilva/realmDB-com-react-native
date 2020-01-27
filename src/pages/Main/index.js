import React from 'react'
import { Container, Title, Form, Input, Submit } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
const index = () => {
  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Procurar Repositório'
        />
        <Submit onPress={() => { }}>
          <Icon size={20} name='add' />
        </Submit>
      </Form>
    </Container>
  )
}

export default index
