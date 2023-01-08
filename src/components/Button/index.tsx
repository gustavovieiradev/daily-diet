import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  mode?: 'contained' | 'outlined';
  status?: 'default' | 'active';
  title: string;
};

export const Button: React.FC<Props> = ({
  mode = 'contained',
  status = 'default',
  title,
  ...rest
}) => {
  return (
    <Container mode={mode} status={status}>
      <Title mode={mode}>{title}</Title>
    </Container>
  );
};
