import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { PhosphorLogo, Plus } from 'phosphor-react-native';
import React, { useCallback, useState } from 'react';
import { SectionList, View } from 'react-native';

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
  title: string;
  data: Diet[];
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

  useFocusEffect(
    useCallback(() => {
      handleLoadDiets();
    }, [])
  );

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

      {diets.length > 0 && (
        <SectionList
          sections={diets}
          keyExtractor={(item) => item.name}
          renderSectionHeader={({ section }) => (
            <GroupHeader>{section.title}</GroupHeader>
          )}
          renderItem={({ item }) => (
            <GroupItem onPress={handleGoDetail} key={item.name}>
              <GroupItemStart>
                <GroupHour>{item.hour}</GroupHour>
                <GroupDivider />
                <GroupName>{item.name}</GroupName>
              </GroupItemStart>
              <GroupStatus status={item.status} />
            </GroupItem>
          )}
        />
      )}
    </Container>
  );
};
