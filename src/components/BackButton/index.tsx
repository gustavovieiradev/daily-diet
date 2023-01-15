import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  color: string;
};

const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon color={color} />
    </Container>
  );
};

export default BackButton;
