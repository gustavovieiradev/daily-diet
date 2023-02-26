import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import BackButton from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Action, Container, Content, Header, HeaderTitle, Row } from './styles';

const FormDiet: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton color={theme.COLORS.GRAY_100} />
        <HeaderTitle>Nova refeição</HeaderTitle>
      </Header>
      <Content>
        <Input label="Nome" />
        <Input label="Descrição" multiline />
        <Row>
          <View style={{ flex: 1 }}>
            <Input label="Data" />
          </View>
          <View style={{ width: 10 }} />
          <View style={{ flex: 1 }}>
            <Input label="Hora" />
          </View>
        </Row>
      </Content>
      <Action>
        <Button title="Cadastrar refeição" />
      </Action>
    </Container>
  );
};

export default FormDiet;
