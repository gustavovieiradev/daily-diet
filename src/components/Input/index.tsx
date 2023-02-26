import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputView, Label, TextInput } from './styles';

type Props = TextInputProps & {
  label: string;
};

export const Input: React.FC<Props> = ({ label, multiline, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputView multiline={multiline}>
        <TextInput multiline={multiline} {...rest} />
      </InputView>
    </Container>
  );
};
