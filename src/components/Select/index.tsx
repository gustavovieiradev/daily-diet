import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

type ContainerProps = TouchableOpacityProps & {
  type?: 'success' | 'danger';
  active?: boolean;
  title: string;
};

export const Select: React.FC<ContainerProps> = ({
  active = false,
  title,
  type = 'success',
  ...rest
}) => {
  return (
    <Container status={active} type={type}>
      <Title>{title}</Title>
    </Container>
  );
};
