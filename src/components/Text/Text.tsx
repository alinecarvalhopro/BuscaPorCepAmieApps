import {TextProps as TextPropsNative} from 'react-native/types';
import {useMemo} from 'react';
import {textTypes} from './textTypes';
import {ContainerText} from './text.style';
import { Colors } from '../../GlobalStyles/Colors/colors';

interface TextProps extends TextPropsNative {
  color?: string;
  type?: string;
  margin?: string;
  textAlign?: string;
}

const Text = ({color, type, margin, textAlign, ...props}: TextProps) => {
  const fontSize = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_MEDIUM:
      case textTypes.TITLE_REGULAR:
      case textTypes.TITLE_SEMI_BOLD:
        return '20px';
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.SUB_TITLE_MEDIUM:
      case textTypes.SUB_TITLE_SEMI_BOLD:
        return '18px';
      case textTypes.PARAGRAPH_LIGTH:
        return '12px';
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_MEDIUM:
      case textTypes.PARAGRAPH_SEMI_BOLD:
      default:
        return '16px';
    }
  }, [type]);

  const fontFamily = useMemo(() => {
    switch (type) {
      case textTypes.TITLE_MEDIUM:
      case textTypes.TITLE_REGULAR:
      case textTypes.TITLE_SEMI_BOLD:
        return 'JosefinSans-SemiBold';
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
        return 'Nunito-Regular';
      case textTypes.SUB_TITLE_MEDIUM:
      case textTypes.PARAGRAPH_MEDIUM:
      case textTypes.PARAGRAPH_MEDIUM:
        return 'Nunito-Medium';
      case textTypes.SUB_TITLE_SEMI_BOLD:
      case textTypes.PARAGRAPH_SEMI_BOLD:
      case textTypes.PARAGRAPH_SEMI_BOLD:
        return 'Nunito-SemiBold';
      case textTypes.PARAGRAPH_LIGTH:
        return 'Nunito-Ligth';
      default:
        return 'Nunito-Regular';
    }
  }, [type]);

  return (
    <ContainerText
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color ? color : Colors.grey}
      margin={margin}
      textAlign={textAlign}
      {...props}
    />
  );
};

export default Text;
