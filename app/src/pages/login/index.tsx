import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';
import { Back } from '../../components/Back'
import { Title } from '../../components/Title'
import { Input } from '../../components/input'
import { TextGray } from '../../components/TextGray'
import { Buttom } from '../../components/Buttom'


export function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Back />
            </View>
            <View>
                <Title title='Login' sizeReturn={35} />
            </View>
            <View style={styles.middle}>
                <Input placeholder='Email' />
                <Input placeholder='Senha' />
                <View style={{ paddingLeft: 20 }}>
                    <TextGray text='Esqueci minha senha' />
                </View>
            </View>
            <View style={styles.middle2}>
                <Buttom title='Entrar' />
                <View style={{height:15}}></View>
                <TextGray text='Cadastre-se aqui' />
            </View>
        </View>
    );
}
