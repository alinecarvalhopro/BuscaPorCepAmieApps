import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonContainer, ButtonDisabled} from './button.style';
import {Colors} from '../../GlobalStyles/Colors/colors';
import Text from '../Text/Text';
import {textTypes} from '../Text/textTypes';
import {ActivityIndicator} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  width?: string;
  margin?: string;
  textAlign?: string;
  backgroundcolor?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}
const Button = ({
  title,
  type,
  loading,
  disabled,
  margin,
  width,
  textAlign,
  backgroundcolor,
  onPress,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };

  const renderText = (color: string) => (
    <>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text
          type={textTypes.PARAGRAPH_SEMI_BOLD}
          color={color}
          margin={margin}
          textAlign={textAlign}>
          {title}
        </Text>
      )}
    </>
  );

  if (loading) {
    return (
      <ButtonDisabled
        {...props}
        margin={margin}
        backgroundcolor={backgroundcolor}
        onPress={handleOnPress}
        width={width}>
        {renderText(Colors.white)}
      </ButtonDisabled>
    );
  } else {
    return (
      <ButtonContainer
        {...props}
        backgroundcolor={backgroundcolor}
        margin={margin}
        onPress={handleOnPress}
        width={width}>
        {renderText(Colors.darkBlue)}
      </ButtonContainer>
    );
  }
};

export default Button;
