import { View, Text, Image } from 'react-native';
import { Buttom } from "./src/components/Buttom";
import { styles } from './style';
import AppLoading from 'expo-app-loading';
import { Login } from "./src/pages/login";
import { Back } from "./src/components/Back";
import { Input } from "./src/components/input";
import { Title } from "./src/components/Title";
import { Event } from "./src/components/Event";
import { TextGray } from "./src/components/TextGray";
import { useFonts, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand'
import { HelloStraus } from './src/components/HelloStraus';
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
    //     <Buttom title='Entrar' />
    //     <Buttom title='Público' />
    //   </View>
    // </View>
    // <View style={styles.container}>
    //   <Input placeholder='Email' />
    //   <Input placeholder='Senha' />
    //   <Buttom title='Entrar'/>
    //   <Title title='Login' sizeReturn={35}/>
    //   <TextGray text='Esqueci minha senha'/>
    //   <Back/>
    // </View>
    //<Login />
    <View style={[styles.container, {marginHorizontal: '10%'}]}>
      <Buttom title='Entrar'/>
      <Input placeholder='Senha' />
      <Event colorReceived='orange' description='Edital para colsistas uallllllllllll s sssssssssssssss s'/>
      <TextGray text='Esqueci minha senha'/>
      <Title title='Login' sizeReturn={35}/>
      <HelloStraus name='Straus'/> 
    </View>
  );
}

