import React from 'react';

import {
  Container,
  HeaderBack,
  Content,
  Header,
  HeaderDescription,
  HeaderTitle,
  BackIcon,
  Title,
  Box,
  BoxTitle,
  BoxDescription,
  Row,
  Space,
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
      <Content>
        <Title>Estatísticas gerais</Title>
        <Box>
          <BoxTitle>22</BoxTitle>
          <BoxDescription>
            melhor sequência de pratos dentro da dieta
          </BoxDescription>
        </Box>
        <Box>
          <BoxTitle>22</BoxTitle>
          <BoxDescription>
            melhor sequência de pratos dentro da dieta
          </BoxDescription>
        </Box>
        <Row>
          <Box>
            <BoxTitle>22</BoxTitle>
            <BoxDescription>
              melhor sequência de pratos dentro da dieta
            </BoxDescription>
          </Box>
          <Space />
          <Box>
            <BoxTitle>22</BoxTitle>
            <BoxDescription>
              melhor sequência de pratos dentro da dieta
            </BoxDescription>
          </Box>
        </Row>
      </Content>
    </Container>
  );
};

export default Statistic;
