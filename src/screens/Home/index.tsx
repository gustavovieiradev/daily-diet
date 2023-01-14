import { PhosphorLogo, Plus } from 'phosphor-react-native';
import React from 'react';

import logoImg from '../../assets/logo.png';
import { Button } from '../../components/Button';
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

export const Home: React.FC = () => {
  return (
    <Container>
      <Logo source={logoImg} />
      <BoxAlert>
        <TitleAlert>90,86%</TitleAlert>
        <DescriptionAlert>das refeições dentro da dieta</DescriptionAlert>
        <ButtonAlert>
          <Icon />
        </ButtonAlert>
      </BoxAlert>
      <TitleList>Refeições</TitleList>
      <Button title="Nova refeição" icon="add" />
      <GroupHeader>12.08.22</GroupHeader>
      <GroupItem>
        <GroupItemStart>
          <GroupHour>22:00</GroupHour>
          <GroupDivider />
          <GroupName>X-tudo</GroupName>
        </GroupItemStart>
        <GroupStatus />
      </GroupItem>
    </Container>
  );
};
