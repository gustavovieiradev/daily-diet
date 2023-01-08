import styled, { css } from 'styled-components/native';

type ContainerProps = {
  mode: 'contained' | 'outlined';
  status: 'default' | 'active';
};

type TitleProps = {
  mode: 'contained' | 'outlined';
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  padding: 16px 12px;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ theme, mode, status }) =>
    mode === 'contained' &&
    css`
      background-color: ${status === 'active'
        ? theme.COLORS.GRAY_100
        : theme.COLORS.GRAY_200};
    `}
  ${({ theme, mode, status }) =>
    mode === 'outlined' &&
    css`
      background-color: ${status === 'active'
        ? theme.COLORS.GRAY_500
        : theme.COLORS.WHITE};
      border: 1px solid ${theme.COLORS.GRAY_100};
    `};
`;

export const Title = styled.Text<TitleProps>`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme, mode }) =>
    mode === 'contained' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`;
