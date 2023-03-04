import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 132px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  position: absolute;
  top: 104px;
  padding: 24px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Action = styled.View`
  width: 100%;
  position: absolute;
  padding: 24px;
  bottom: 0;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 4px;
`;

export const Column = styled.View`
  flex: 1;
`;
