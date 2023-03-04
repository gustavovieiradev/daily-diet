import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Status, Title } from './styles';

type ContainerProps = TouchableOpacityProps & {
  type?: 'success' | 'danger';
  active?: boolean;
  title: string;
  status?: 'on' | 'off';
};

export const Select: React.FC<ContainerProps> = ({
  active = false,
  title,
  type = 'success',
  status = '',
  ...rest
}) => {
  return (
    <Container status={active} type={type} {...rest}>
      {(status === 'on' || status === 'off') && <Status status={status} />}
      <Title>{title}</Title>
    </Container>
  );
};
