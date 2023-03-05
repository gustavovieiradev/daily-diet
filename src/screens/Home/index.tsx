import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { PhosphorLogo, Plus } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View } from 'react-native';

import logoImg from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { dietGetAll } from '../../storage/diet/dietGetAll';
import { dietGetGroupedByDate } from '../../storage/diet/dietGetGroupedByDate';
import {
  BoxAlert,
  ButtonAlert,
  Container,
  DescriptionAlert,
  GroupDivider,
  GroupHeader,
  GroupHour,
  GroupItem,
  GroupItemStart,
  GroupName,
  GroupStatus,
  Icon,
  Logo,
  TitleAlert,
  TitleList,
} from './styles';

type Diet = {
  name: string;
  description: string;
  date: string;
  hour: string;
  status: 'on' | 'off';
};

type DietGroupedDate = {
  date: string;
  diets: Diet[];
};

export const Home: React.FC = () => {
  const [diets, setDiets] = useState<DietGroupedDate[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  function handleGoNew() {
    navigation.navigate('new');
  }

  function handleGoDetail() {
    navigation.navigate('detail');
  }

  function handleGoStatistic() {
    navigation.navigate('statistic');
  }

  async function handleLoadDiets() {
    try {
      const dietsGrouped = await dietGetGroupedByDate();
      setDiets(dietsGrouped);
    } catch (err) {}
  }

  useFocusEffect(() => {
    handleLoadDiets();
  });

  return (
    <Container>
      <Logo source={logoImg} />
      <BoxAlert>
        <TitleAlert>90,86%</TitleAlert>
        <DescriptionAlert>das refeições dentro da dieta</DescriptionAlert>
        <ButtonAlert onPress={handleGoStatistic}>
          <Icon />
        </ButtonAlert>
      </BoxAlert>
      <TitleList>Refeições</TitleList>
      <Button title="Nova refeição" icon="add" onPress={handleGoNew} />

      {diets.length > 0 &&
        diets.map((i) => (
          <View key={i.date}>
            <GroupHeader>{i.date}</GroupHeader>
            {i.diets.map((d) => (
              <GroupItem onPress={handleGoDetail} key={d.name}>
                <GroupItemStart>
                  <GroupHour>{d.hour}</GroupHour>
                  <GroupDivider />
                  <GroupName>{d.name}</GroupName>
                </GroupItemStart>
                <GroupStatus />
              </GroupItem>
            ))}
          </View>
        ))}
    </Container>
  );
};
