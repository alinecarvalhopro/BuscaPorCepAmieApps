import {Icon} from '../Icon/Icon';
import {Colors} from '../../GlobalStyles/Colors/colors';
import {StyledHeader, StyledHeaderView} from './header.style';
import Text from '../Text/Text';
import {textTypes} from '../Text/textTypes';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderView>
        <Text
          margin="0 8px"
          color={Colors.white}
          textAlign="left"
          type={textTypes.TITLE_SEMI_BOLD}>
          Busca de endereço por CEP
        </Text>
        <Icon name="location_on" size={30} color={Colors.white} />
      </StyledHeaderView>
    </StyledHeader>
  );
};

export default Header;
