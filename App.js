import { StatusBar, useColorScheme } from 'react-native';
import TabNav from './src/navigation/TabNav'
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <TabNav />
        <StatusBar />
    </NavigationContainer>
  );
}