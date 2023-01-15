import styled from 'styled-components/native';

import { ArrowLeft } from 'phosphor-react-native';

type IconProps = {
  color: string;
};

export const Container = styled.TouchableOpacity`
  position: absolute;
  top: 56px;
  left: 24px;
`;

export const Icon = styled(ArrowLeft).attrs<IconProps>(({ theme, color }) => ({
  size: 24,
  color: color,
}))``;
