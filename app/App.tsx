import { View, Text, Image } from 'react-native';
import { Buttom } from "./src/components/Buttom";
import { styles } from './style';
import AppLoading from 'expo-app-loading';
import { Login } from "./src/pages/login";
import { BemVindo } from "./src/pages/bemVindo";
import { Back } from "./src/components/Back";
import { Input } from "./src/components/input";
import { InputFormulario } from "./src/components/InputFormulario";
import { Event } from "./src/components/Event";
import { Title } from "./src/components/Title";
import { TextGray } from "./src/components/TextGray";
import { HelloStraus } from "./src/components/HelloStraus";
import { Logout } from "./src/components/IconLogout";
import { Label } from "./src/components/Label";

import { useFonts, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand'


export default function App() {

  const [fontsLoaded] = useFonts({
    Quicksand_600SemiBold,
    Quicksand_400Regular
  })

  if (!fontsLoaded)
    return <AppLoading />

  return (
    // Tela inicial
    //
    // <View style={styles.container}>
    //   <View>
    //     <Image source={require('./src/assets/logo.png')} />
    //   </View>
    //   <Text style={styles.description}>
    //     Gerencie seus eventos e veja todos os eventos futuros, <Text style={{ fontWeight: 'bold' }}>em um só lugar </Text>
    //   </Text>
    //   <View style={styles.center}>
    //     <Buttom color={true} title='Entrar' />
    //     <Buttom color={true} title='Público' />
    //   </View>
    // </View>
    // <Login />
    <BemVindo/>

    // <View style={styles.containerTeste}>
    //   <Event description='suodfouiasghdfi uiasdgfoyuia sd sdayigfyias gdfy' colorReceived='blue' />
    //   <HelloStraus name="Straus"/>
    //   <Logout text="Teste" icon="log-out"/>
    //   <Label title='Nome'/>
    //   <InputFormulario placeholder='Nome'/>
    // </View>

  );
}

