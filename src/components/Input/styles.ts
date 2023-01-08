import styled from 'styled-components/native';

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  height: 48px;
  padding: 14px;
  width: 100%;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 4px;
`;
