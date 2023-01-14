import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
  mode?: 'contained' | 'outlined';
  status?: 'default' | 'active';
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export const Button: React.FC<Props> = ({
  mode = 'contained',
  status = 'default',
  icon = undefined,
  title,
  ...rest
}) => {
  return (
    <Container mode={mode} status={status} {...rest}>
      {!!icon && <Icon name={icon} mode={mode} />}
      <Title mode={mode}>{title}</Title>
    </Container>
  );
};
