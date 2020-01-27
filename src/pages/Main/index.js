import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { Container, Title, Form, Input, Submit, List } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Repository from '../../components/Repository';
import api from '../../services/api';
import getRealm from '../../services/realm';

const index = () => {
  const [input, setInput] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(false);

  async function saveRepository({ id, name, full_name, description, stargazers_count, forks_count }) {
    const data = {
      id: id,
      name: name,
      fullName: full_name,
      description: description,
      stars: stargazers_count,
      forks: forks_count,
    };

    const realm = await getRealm();
    realm.write(() => {
      realm.create('Repository', data, 'modified') // escrevendo dados dentro do schema repository
    });

    return data;
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`)
      await saveRepository(response.data);
      setInput('');
      setError(false)
      Keyboard.dismiss();

    } catch (error) {
      setError(true)
    }
  }


  async function handleRefreshRepository(repository) {
    const response = await api.get(`/repos/${repository.fullName}`)
    const data = await saveRepository(response.data)
    setRepositories(repositories.map(repo => repo.id === data.id ? data : repo))
  }

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();
      const data = realm.objects('Repository').sorted('stars', true)
      setRepositories(data)

    }
    loadRepositories()
  }, [])

  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          error={error}
          value={input}
          onChangeText={setInput}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Procurar Repositório'
        />
        <Submit onPress={handleAddRepository}>
          <Icon size={20} name='add' />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps='handled' // deve fechar o telcado quando o usuario clicar no centro da tela
        data={repositories} // conteudo a ser listado
        keyExtractor={item => String(item.id)} // identificador unico de cada item 
        renderItem={({ item }) => (
          <Repository
            data={item}
            onRefresh={() => { handleRefreshRepository(item) }}
          />
        )}
      />
    </Container>
  )
}

export default index
