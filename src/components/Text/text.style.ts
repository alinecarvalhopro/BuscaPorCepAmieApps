import styled from 'styled-components/native';

export const ContainerText = styled.Text`
  margin: ${(props: {custonMargin: string}) => props.custonMargin};

  font-family: ${(props: {
    fontFamily:
      | 'JosefinSans-Regular'
      | 'JosefinSans-Medium'
      | 'JosefinSans-SemiBold'
      | 'Nunito-Regular'
      | 'Nunito-Medium'
      | 'Nunito-SemiBold';
  }) => props.fontFamily};
  font-size: ${(props: {fontSize: string}) => props.fontSize};
  color: ${(props: {color: string}) => props.color};

  text-align: ${(props: {customTextAlign: string}) => props.customTextAlign};
`;
