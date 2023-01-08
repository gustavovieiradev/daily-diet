import React from 'react';
import { View } from 'react-native';
import { Container, Label } from './styles';

export const Input: React.FC = () => {
  return (
    <View style={{ width: '100%' }}>
      <Label>Label</Label>
      <Container></Container>
    </View>
  );
};
