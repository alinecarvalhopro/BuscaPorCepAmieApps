import styled from 'styled-components/native';

export const ContainerText = styled.Text`
  margin: ${(props: {margin?: string}) => props.margin};

  font-family: ${(props: {
    fontFamily:
      | 'JosefinSans-Ligth'
      | 'JosefinSans-Regular'
      | 'JosefinSans-Medium'
      | 'JosefinSans-SemiBold'
      | 'Nunito-Ligth'
      | 'Nunito-Regular'
      | 'Nunito-Medium'
      | 'Nunito-SemiBold';
  }) => props.fontFamily};
  font-size: ${(props: {fontSize: string}) => props.fontSize};
  color: ${(props: {color?: string}) => props.color};

  text-align: ${(props: {textAlign?: string}) => props.textAlign};
`;
