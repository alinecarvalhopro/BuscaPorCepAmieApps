import styled from 'styled-components/native';
import { Colors } from '../Colors/colors';

export const Display = styled.SafeAreaView`
  width: ${(props: {width: string}) => (props.width ? props.width : '100%')};

  background-color: ${Colors.white};
  
  display: flex;
  flex-direction: column;
`;