import styled, { css } from 'styled-components/native';

type ContainerProps = {
  type: 'success' | 'danger';
  status: boolean;
};

type StatusProps = {
  status: 'on' | 'off';
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
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  ${({ theme, type, status }) =>
    status &&
    css`
      background-color: ${type === 'success'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
      border: 1px solid
        ${type === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `};
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Status = styled.View<StatusProps>`
  width: 8px;
  margin-right: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, status }) =>
    status === 'on' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
