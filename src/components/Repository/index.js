import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Name, Description, Stat, StatCount, Stats, Refresh, RefreshText } from './styles';

export default function Repository({ data, onRefresh }) {
  return (
    <Container >
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Stat>
          <Icon size={16} name='star' color='#000' />
          <StatCount>{data.stars}</StatCount>
        </Stat>

        <Stat>
          <Icon size={16} name='code-fork' color='#000' />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
      <Refresh onPress={onRefresh}>
        <Icon size={16} name='refresh' color='#7159c1' />
        <RefreshText>Atualizar</RefreshText>
      </Refresh>
    </Container>
  );
}
