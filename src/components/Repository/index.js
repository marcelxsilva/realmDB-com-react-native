import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Name, Description, Stat, StatCount, Stats, } from './styles';

export default function Repository({ data }) {
  return (
    <Container >
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
      <Stats>
        <Stat>
          <Icon size={16} name='star' color='#000' />
          <StatCount>{data.starts}</StatCount>
        </Stat>

        <Stat>
          <Icon size={16} name='code-fork' color='#000' />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
}
