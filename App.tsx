import { View } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
