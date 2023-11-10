import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {Colors} from '../../GlobalStyles/Colors/colors';
import Text from '../Text/Text';
import {textTypes} from '../Text/textTypes';
import {
  StyledInput,
  StyledInputContainer,
  StyledTextError,
} from './input.style';

interface InputProps {
  title?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  margin?: string;
  width?: string;
  onChange: (text: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  value: string;
}

const Input = ({
  title,
  placeholder,
  isError,
  errorMessage,
  margin,
  onChange,
  value,
  width,
  ...props
}: InputProps) => {
  return (
    <StyledInputContainer width={width} margin={margin}>
      {title && (
        <Text
          margin="0 0 4px 0"
          type={textTypes.SUB_TITLE_SEMI_BOLD}
          color={Colors.grey}
          textAlign="left">
          {title}
        </Text>
      )}

      <StyledInput
        placeholder={placeholder}
        placeholderTextColor={`${Colors.grey}`}
        isError={!!errorMessage}
        onChange={onChange}
        value={value}
        {...props}
      />
      {errorMessage && <StyledTextError>{errorMessage}</StyledTextError>}

    </StyledInputContainer>
  );
};

export default Input;
