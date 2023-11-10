import styled from 'styled-components/native';

export const Display = styled.SafeAreaView`
  width: ${(props: {width: string}) => (props.width ? props.width : '100%')};
  
  display: flex;
  flex-direction: column;
`;