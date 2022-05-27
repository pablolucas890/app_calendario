import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';
import { Back } from '../../components/Back'
import { Title } from '../../components/Title'
import { Input } from '../../components/input'
import { TextGray } from '../../components/TextGray'
import { Buttom } from '../../components/Buttom'


export function BemVindo() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Back />
            </View>
            <View>
                <Title title='Bem Vindo(a)' sizeReturn={35} />
            </View>
            <View style={styles.middle}>
                <Input placeholder='Nome' />
                <Input placeholder='Email' />
                <Input placeholder='Senha' />
                <Input placeholder='Confirme sua senha' />
            </View>
            <View style={styles.middle2}>
                <Buttom title='Entrar' />
            </View>
        </View>
    );
}
