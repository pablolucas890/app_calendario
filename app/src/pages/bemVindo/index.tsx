import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, ScrollView, Alert } from 'react-native';
import { styles } from './style';
import { Back } from '../../components/Back'
import { Title } from '../../components/Title'
import { Input } from '../../components/input'
import { TextGray } from '../../components/TextGray'
import { Buttom } from '../../components/Buttom'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
type Props = NativeStackScreenProps<RootStackParamList>;

export function BemVindo({ navigation }: Props) {

    const alertMessage = () =>
        Alert.alert('Você não preencheu todos os campos', 'Atenção', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancelar'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK') },
        ]);
        function handleBack() {
            navigation.navigate('Login')
        }
    return (

        <KeyboardAvoidingView
            behavior={'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Back onPress={handleBack}/>
                        </View>
                        <View>
                            <Title title='Bem Vindo(a)' sizeReturn={35} />
                        </View>
                        <View style={styles.middle}>
                            <Input placeholder='Nome' keyboardType='name-phone-pad' />
                            <Input placeholder='Email' keyboardType='email-address' />
                            <Input placeholder='Senha' keyboardType='default' />
                            <Input placeholder='Confirme sua senha' keyboardType='default' />
                        </View>
                        <View style={styles.middle2}>
                            <Buttom color={true} title='Entrar' onPress={alertMessage} />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
