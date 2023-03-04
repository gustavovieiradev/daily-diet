import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button } from '../../components/Button';

import {
  Container,
  Description,
  DescriptionBold,
  FeedbackImage,
  Title,
} from './styles';

import successImage from '../../assets/success.png';

const Feedback: React.FC = () => {
  // hook navigation
  const navigation = useNavigation();

  // action go screen home
  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      <Title>Continue assim!</Title>
      <Description>
        Você continua <DescriptionBold>dentro da dieta</DescriptionBold>. Muito
        bem!
      </Description>
      <FeedbackImage source={successImage} />
      <Button title="Ir para a página inicial" onPress={handleGoHome} />
    </Container>
  );
};

export default Feedback;
