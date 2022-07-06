
import AppLoading from 'expo-app-loading';

import { useFonts, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand'
import { RootStackParamList } from './src/global/props';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';


export default function App() {

  const [fontsLoaded] = useFonts({
    Quicksand_600SemiBold,
    Quicksand_400Regular
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (


    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

