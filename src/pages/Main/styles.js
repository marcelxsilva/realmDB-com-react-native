import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#21618C', '#3498DB'],
  start: { x: 0, y: 0 }, // inicia no lado superior esquerdo
  end: { x: 1, y: 1 } // termina no lado inferior direito
})`
  flex: 1;
  padding-top: ${50 + getStatusBarHeight(true)}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #FFF;
  padding: 0 20px;

`
export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  flex: 1;
  background: #fff;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  border: 2px solid ${props => props.error ? '#ff7272' : '#fff'}

`
export const Submit = styled.TouchableOpacity`
  background: #28B463;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
`

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showVerticalScrollIndicator: false, // tirar barra de rolagem
})`
  margin-top: 20px;
`