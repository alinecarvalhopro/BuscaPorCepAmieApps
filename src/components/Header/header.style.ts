import styled from 'styled-components/native';
import {Colors} from '../../GlobalStyles/Colors/colors';

export const StyledHeader = styled.View`
  width: 100%;
  height: 80px;

  background-color: ${Colors.darkBlue};

  position: relative;
`;


export const StyledHeaderView = styled.View`
  height: 80px;

  margin: 0 16px;

  border-radius: 4px;

  padding: 16px;

  background-color: ${Colors.ligthBlue};

  position: absolute;
  top: 40px;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;