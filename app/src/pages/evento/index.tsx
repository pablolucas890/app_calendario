import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    View,
    Alert,
  } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { Title } from "../../components/Title";
import { Input } from "../../components/input";
import { TextGray } from "../../components/TextGray";
import { Buttom } from "../../components/Buttom";
import { RootStackParamList } from "../../global/props";
import { styles } from "../login/style";

type Props = NativeStackScreenProps<RootStackParamList>;

export function evento({ navigation } : Props){

    const [titulo, setTitulo] = useState('');
    const [descricao, setDesc] = useState('');

    function handleback(){
        navigation.navigate("Index");
    }

    return (
        <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <View>
                            <Title title="Cadastrar Evento" sizeReturn={35} />
                        </View>
                        <View style={styles.middle}>
                            <Input
                                onChangeText={(value) => {
                                    setTitulo(value);
                                }}
                                placeholder="Ex.: Palestra de Física"
                                keyboardType="default"
                            />
                            <Input
                                onChangeText={(value) => {
                                    setDesc(value);
                                }}
                                placeholder="Insira a descrição do evento"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.middle2}>
                            <Buttom color={true} title="Entrar"/>
                            <View style={{ height: 15 }}></View>
                            <TextGray onPress={handleback} text="Cancelar" />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}