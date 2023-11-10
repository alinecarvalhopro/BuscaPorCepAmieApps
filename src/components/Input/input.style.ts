import styled from 'styled-components/native';
import {Colors} from '../../GlobalStyles/Colors/colors';

export const StyledInputContainer = styled.View`
  width: ${(props: {width: string}) => (props.width ? props.width : '100%')};

  margin: ${(props: {margin: string}) => (props.margin ? props.margin : '0')};

  flex-direction: column;

  position: relative;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 48px;

  padding: 16px;

  border-radius: 4px;
  border: 1px solid
    ${(props: {isError: boolean}) => (props.isError ? Colors.red : Colors.grey)};

  background-color: ${Colors.white};

  color: ${Colors.grey};
`;

export const StyledTextError = styled.Text`
  margin: 2px 0 0 0;

  font-family: 'Nunito-Ligth';
  font-size: 12px;
  color: ${Colors.red};
  text-align: left;

  position: absolute;
  bottom: -20px;
`;
