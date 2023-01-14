import { ArrowLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
`;

export const HeaderDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const HeaderBack = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const Content = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: absolute;
  top: 168px;
  right: 0;
  width: 100%;
  border-radius: 20px;
`;
