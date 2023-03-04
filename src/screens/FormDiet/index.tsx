import React, { useState } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import BackButton from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import Space from '../../components/Space';
import {
  Action,
  Column,
  Container,
  Content,
  Header,
  HeaderTitle,
  Label,
  Row,
} from './styles';

type ValueStatus = 'on' | 'off';

const FormDiet: React.FC = () => {
  const theme = useTheme();

  const [statusDiet, setStatuDiet] = useState<ValueStatus>();

  // action set status diet
  function handleSetStatus(value: ValueStatus) {
    setStatuDiet(value);
  }

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
          <Column>
            <Input label="Data" />
          </Column>
          <Space width={10} />
          <Column>
            <Input label="Hora" />
          </Column>
        </Row>

        <Label>Está dentro da dieta?</Label>
        <Row>
          <Select
            title="Sim"
            active={statusDiet === 'on'}
            type="success"
            status="on"
            onPress={() => handleSetStatus('on')}
          />
          <Space width={10} />
          <Select
            title="Não"
            active={statusDiet === 'off'}
            type="danger"
            status="off"
            onPress={() => handleSetStatus('off')}
          />
        </Row>
      </Content>
      <Action>
        <Button title="Cadastrar refeição" />
      </Action>
    </Container>
  );
};

export default FormDiet;
