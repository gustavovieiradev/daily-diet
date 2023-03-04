import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { useTheme } from 'styled-components/native';
import BackButton from '../../components/BackButton';
import { Button } from '../../components/Button';
import Feedback from '../../components/Feedback';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import Space from '../../components/Space';
import { dietCreate } from '../../storage/diet/dietCreate';
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
  // hook theme
  const theme = useTheme();

  // hook state status diet
  const [statusDiet, setStatuDiet] = useState<ValueStatus>('on');
  // hook state name diet
  const [name, setName] = useState('');
  // hook state description diet
  const [description, setDescription] = useState('');
  // hook state date diet
  const [date, setDate] = useState('');
  // hook state hour diet
  const [hour, setHour] = useState('');
  // hook state show feedback save
  const [finishSave, setFinishSave] = useState(false);

  // action set status diet
  function handleSetStatus(value: ValueStatus) {
    setStatuDiet(value);
  }

  // action save form diet
  async function handleSave() {
    try {
      await dietCreate({
        date,
        description,
        hour,
        name,
        status: statusDiet,
      });

      setFinishSave(true);
    } catch (err) {
      Alert.alert('Preencha todos os campos de forma correta!');
    }
  }

  return (
    <>
      {finishSave ? (
        <Feedback status={statusDiet} />
      ) : (
        <Container>
          <Header>
            <BackButton color={theme.COLORS.GRAY_100} />
            <HeaderTitle>Nova refeição</HeaderTitle>
          </Header>
          <Content>
            <Input label="Nome" onChangeText={setName} />
            <Input label="Descrição" onChangeText={setDescription} multiline />
            <Row>
              <Column>
                <Input label="Data" onChangeText={setDate} />
              </Column>
              <Space width={10} />
              <Column>
                <Input label="Hora" onChangeText={setHour} />
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
            <Button title="Cadastrar refeição" onPress={handleSave} />
          </Action>
        </Container>
      )}
    </>
  );
};

export default FormDiet;
