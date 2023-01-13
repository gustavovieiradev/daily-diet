import React from 'react';

import logoImg from '../../assets/logo.png';
import {
  BoxAlert,
  Button,
  Container,
  DescriptionAlert,
  Icon,
  Logo,
  TitleAlert,
} from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <BoxAlert>
        <TitleAlert>90,86%</TitleAlert>
        <DescriptionAlert>das refeições dentro da dieta</DescriptionAlert>
        <Button>
          <Icon />
        </Button>
      </BoxAlert>
    </Container>
  );
};
