import { View } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { Select } from './src/components/Select';
import { Input } from './src/components/Input';

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
        <Input />
      </View>
    </ThemeProvider>
  );
}
