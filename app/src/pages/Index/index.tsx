import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, View, Alert, Image, Text } from 'react-native';
import { styles } from './style';
import { Back } from '../../components/Back'
import { Title } from '../../components/Title'
import { Input } from '../../components/input'
import { TextGray } from '../../components/TextGray'
import { Buttom } from '../../components/Buttom'

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
type Props = NativeStackScreenProps<RootStackParamList>;



export function Index({ navigation }: Props) {
    function handleLogin() {
      navigation.navigate('Login');
    }
    return (
          <View style={styles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} />
      </View>
      <Text style={styles.description}>
        Gerencie seus eventos e veja todos os eventos futuros, <Text style={{ fontWeight: 'bold' }}>em um só lugar </Text>
      </Text>
      <View style={styles.center}>
        <Buttom color={true} onPress={handleLogin} title='Entrar' />
        <Buttom color={true} title='Público' />
      </View>
    </View>
    );
}
