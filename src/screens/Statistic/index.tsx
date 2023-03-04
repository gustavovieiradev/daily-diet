import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';
import BackButton from '../../components/BackButton';

import {
  Container,
  Content,
  Header,
  HeaderDescription,
  HeaderTitle,
  Title,
  Box,
  BoxTitle,
  BoxDescription,
  Row,
  Space,
} from './styles';

const Statistic: React.FC = () => {
  // hook theme
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <BackButton color={theme.COLORS.GREEN_DARK} />
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
