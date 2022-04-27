import { View, Text, Image } from 'react-native';
import { Buttom } from "./src/components/Buttom";
import { styles } from './style';
import AppLoading from 'expo-app-loading';
import { Login } from "./src/pages/login";
import { Back } from "./src/components/Back";

import { useFonts, Quicksand_400Regular, Quicksand_700Bold } from '@expo-google-fonts/quicksand'
export default function App() {

  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_700Bold
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    // <View style={styles.container}>
    //   <View>
    //     <Image source={require('./src/assets/logo.png')} />
    //   </View>
    //   <Text style={styles.description}>
    //     Gerencie seus eventos e veja todos os eventos futuros, <Text style={{ fontWeight: 'bold' }}>em um só lugar </Text>
    //   </Text>
    //   <Buttom title='Entrar' />
    //   <Buttom title='Público' />
    // </View>
    <View style={styles.container}>
      <Back />
    </View>

  );
}

