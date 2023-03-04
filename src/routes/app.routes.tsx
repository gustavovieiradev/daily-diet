import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import FormDiet from '../screens/FormDiet';
import DetailDiet from '../screens/DetailDiet';
import Statistic from '../screens/Statistic';

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="new" component={FormDiet} />
      <Screen name="detail" component={DetailDiet} />
      <Screen name="statistic" component={Statistic} />
    </Navigator>
  );
};
