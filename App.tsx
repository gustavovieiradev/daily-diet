import { View } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
