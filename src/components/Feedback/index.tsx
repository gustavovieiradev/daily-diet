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
import negativeImage from '../../assets/negative.png';

type ValueStatus = 'on' | 'off';

type Props = {
  status: ValueStatus;
};

const Feedback: React.FC<Props> = ({ status }) => {
  // hook navigation
  const navigation = useNavigation();

  // action go screen home
  function handleGoHome() {
    navigation.navigate('home');
  }

  return (
    <Container>
      {status === 'on' ? (
        <>
          <Title status={status}>Continue assim!</Title>
          <Description>
            Você continua <DescriptionBold>dentro da dieta</DescriptionBold>.
            Muito bem!
          </Description>
          <FeedbackImage source={successImage} />
        </>
      ) : (
        <>
          <Title status={status}>Que pena!</Title>
          <Description>
            Você <DescriptionBold>saiu da dieta</DescriptionBold> dessa vez, mas
            continue se esforçando e não desista!
          </Description>
          <FeedbackImage source={negativeImage} />
        </>
      )}
      <Button title="Ir para a página inicial" onPress={handleGoHome} />
    </Container>
  );
};

export default Feedback;
