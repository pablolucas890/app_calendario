import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, View, Alert } from 'react-native';
import { styles } from './style';
import { Back } from '../../components/Back'
import { Title } from '../../components/Title'
import { Input } from '../../components/input'
import { TextGray } from '../../components/TextGray'
import { Buttom } from '../../components/Buttom'


export function Login() {
    const alertMessage = () =>
        Alert.alert('Você não preencheu todos os campos', 'Atenção', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancelar'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK') },
        ]);
    return (
        <KeyboardAvoidingView
            behavior={'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={{flex: 1}}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Back />
                        </View>
                        <View>
                            <Title title='Login' sizeReturn={35} />
                        </View>
                        <View style={styles.middle}>
                            <Input placeholder='Email' keyboardType='email-address' />
                            <Input placeholder='Senha' keyboardType='default' />
                            <View style={{ paddingLeft: 20 }}>
                                <TextGray text='Esqueci minha senha' />
                            </View>
                        </View>
                        <View style={styles.middle2}>
                            <Buttom  color={true} title='Entrar' onPress={alertMessage} />
                            <View style={{ height: 15 }}></View>
                            <TextGray text='Cadastre-se aqui' />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
