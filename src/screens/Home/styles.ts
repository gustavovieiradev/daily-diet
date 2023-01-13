import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View``;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const BoxAlert = styled.View`
  width: 100%;
  margin-top: 24px;
  border-radius: 8px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const TitleAlert = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL};
  text-align: center;
`;

export const DescriptionAlert = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;
