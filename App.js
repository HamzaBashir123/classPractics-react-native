import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignupPage from './Components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Components/splash';
import SignIn from './Components/SignIn'
import SplashScreen0 from './Components/onbordingsScreens/onboarding'
import SplashScreen1 from './Components/onbordingsScreens/onboarding copy'
import SplashScreen2 from './Components/onbordingsScreens/onboarding copy 2'


const Stack = createStackNavigator();




export default function App() {
  return (

    <NavigationContainer>
       <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SplashScreen0" component={SplashScreen0} />
        <Stack.Screen name="SplashScreen1" component={SplashScreen1} />
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
  </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
