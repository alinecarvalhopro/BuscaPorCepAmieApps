import styled from 'styled-components/native';
import {Colors} from '../../GlobalStyles/Colors/colors';

interface ButtonContainerProps {
  width?: string;
  margin?: string;
  backgroundcolor?: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: ${(props: {width: string}) => (props.width ? props.width : '100%')};
  height: 48px;

  margin: ${(props: {margin: string}) => (props.margin ? props.margin : '0')};

  border-radius: 4px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${(props: {backgroundcolor: string}) =>
    props.backgroundcolor};
`;

export const ButtonDisabled = styled(ButtonContainer)<ButtonContainerProps>`
  background-color: ${Colors.grey};
`;

