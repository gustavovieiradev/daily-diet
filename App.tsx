import { View } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Select } from './src/components/Select';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Select title="Sim" />
          <Select title="Não" type="danger" active={true} />
        </View>
      </View>
    </ThemeProvider>
  );
}
