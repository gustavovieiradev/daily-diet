import styled from 'styled-components/native';

type InputViewProps = {
  multiline?: boolean;
};

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const InputView = styled.View<InputViewProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  padding: 14px;
  width: 100%;
  min-height: ${({ multiline }) => (multiline ? '120px' : '48px')};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin-bottom: 4px;
`;

export const TextInput = styled.TextInput`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  line-height: 20.8px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
