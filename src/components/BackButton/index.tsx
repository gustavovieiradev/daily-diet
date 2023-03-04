import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
  color: string;
};

const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  // hook navigation
  const navigation = useNavigation();

  // action navigation back screen
  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container {...rest} onPress={handleGoBack}>
      <Icon color={color} />
    </Container>
  );
};

export default BackButton;
