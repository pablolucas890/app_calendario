import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, View, ScrollView, Alert } from 'react-native';
import { styles } from './style';
import { Back } from '../../components/Back'
import { Title } from '../../components/Title'
import { Input } from '../../components/input'
import { TextGray } from '../../components/TextGray'
import { Buttom } from '../../components/Buttom'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { RegisterEventButton } from '../../components/RegisterEventButton';
type Props = NativeStackScreenProps<RootStackParamList>;

export function BemVindo({ navigation }: Props) {
    const { createUser } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    
    async function alertMessage() {
        if (!(email && password && name)) {

          Alert.alert("Você não preencheu todos os campos", "Atenção", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancelar"),
              style: "cancel",
            },
            { text: "OK" },
          ]);

          
        }
        else if(password != password2){
            Alert.alert("Senhas diferentes", "Atenção", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancelar"),
                  style: "cancel",
                },
                { text: "OK" },
              ]);
        }
        else {
            const response = await createUser({
                email,
                password,
                name
              })
        
            if(response === 0){
              Alert.alert("Atenção !!!", "Erro ao criar o usuário", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancelar"),
                  style: "cancel",
                },
                { text: "OK" },
              ]);
            }else if(response === 2){
                Alert.alert("Atenção !!!", "O usuário já existe", [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancelar"),
                    style: "cancel",
                  },
                  { text: "OK" },
                ]);
            }
        }
      }
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
                            <Back onPress={handleBack} />
                        </View>
                        <View>
                            <Title title='Bem Vindo(a)' sizeReturn={35} />
                        </View>
                        <View style={styles.middle}>
                            <Input
                                placeholder='Nome'
                                onChangeText={(value) => {
                                    return setName(value);
                                }}
                                keyboardType='name-phone-pad' />

                            <Input placeholder='Email'
                                onChangeText={(value) => {
                                    return setEmail(value);
                                }}
                                keyboardType='email-address' />
                            <Input placeholder='Senha'
                                onChangeText={(value) => {
                                    setPassword(value);
                                }}
                                keyboardType='default' />
                            <Input placeholder='Confirme sua senha'
                                onChangeText={(value) => {
                                    setPassword2(value);
                                }}
                                keyboardType='default' />
                        </View>

                        <View style={styles.middle2}>
                            <Buttom color={true} title='Cadastrar' onPress={alertMessage} />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      

    );
}
