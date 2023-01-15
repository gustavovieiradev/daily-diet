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

export const Content = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: absolute;
  top: 168px;
  right: 0;
  width: 100%;
  padding: 24px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 12px;
`;

export const Box = styled.View`
  margin-top: 12px;
  min-height: 89px;
  max-height: 89px;
  align-items: center;
  flex: 1;
  border-radius: 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Space = styled.View`
  width: 12px;
`;

export const BoxTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const BoxDescription = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
