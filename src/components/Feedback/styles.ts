import styled from 'styled-components/native';

type ValueStatus = 'on' | 'off';

type TitleProps = {
  status: ValueStatus;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  color: ${({ theme, status }) =>
    status === 'on' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
`;

export const DescriptionBold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
  margin-top: 8px;
`;

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
`;
