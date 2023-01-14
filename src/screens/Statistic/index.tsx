import React from 'react';

import {
  Container,
  HeaderBack,
  Content,
  Header,
  HeaderDescription,
  HeaderTitle,
  BackIcon,
} from './styles';

const Statistic: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderBack>
          <BackIcon />
        </HeaderBack>
        <HeaderTitle>90%</HeaderTitle>
        <HeaderDescription>das refeições dentro da dieta</HeaderDescription>
      </Header>
      <Content></Content>
    </Container>
  );
};

export default Statistic;
