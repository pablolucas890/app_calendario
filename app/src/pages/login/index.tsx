import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  View,
  Alert,
} from "react-native";
import { styles } from "./style";
import { Back } from "../../components/Back";
import { Title } from "../../components/Title";
import { Input } from "../../components/input";
import { TextGray } from "../../components/TextGray";
import { Buttom } from "../../components/Buttom";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../global/props";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
type Props = NativeStackScreenProps<RootStackParamList>;

export function Login({ navigation }: Props) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setErrpr] = useState(false);



  async function alertMessage() {
    if (email && password) {
      const response = await login({
        email,
        password,
      })

    if(response === 0){
      Alert.alert("Atenção !!!", "Email/Senha Incorretos", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelar"),
          style: "cancel",
        },
        { text: "OK" },
      ]);
    }else {
      navigation.navigate("Calendario")
    }
      
    } else {
      Alert.alert("Você não preencheu todos os campos", "Atenção", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelar"),
          style: "cancel",
        },
        { text: "OK" },
      ]);
    }
  }
  function handleBack() {
    navigation.navigate("Index");
  }
  function handleCadastro() {
  
    navigation.navigate("BemVindo");
  }
  function handleCalendario() {
  
    navigation.navigate("Calendario");
  }
  return (
    <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Back onPress={handleBack} />
            </View>
            <View>
              <Title title="Login" sizeReturn={35} />
            </View>
            <View style={styles.middle}>
              <Input
                onChangeText={(value) => {
                  setEmail(value);
                }}
                placeholder="Email"
                keyboardType="email-address"
              />
              <Input
                onChangeText={(value) => {
                  setPassword(value);
                }}
                placeholder="Senha"
                keyboardType="default"
              />
              <View style={{ paddingLeft: 20 }}>
                <TextGray
                  onPress={() => {
                    Alert.alert("Enviaremos um E-mail em breve");
                  }}
                  text="Esqueci minha senha"
                />
              </View>
            </View>
            <View style={styles.middle2}>
              <Buttom color={true} title="Entrar" onPress={alertMessage} />
              <View style={{ height: 15 }}></View>
              <TextGray onPress={handleCadastro} text="Cadastre-se aqui" />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
function setLoadingAsync(arg0: boolean) {
  throw new Error("Function not implemented.");
}
