import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    View,
    Alert,
} from "react-native";

import { useState } from "react";
import { Title } from "../../components/Title";
import { Input } from "../../components/input";
import { TextGray } from "../../components/TextGray";
import { Buttom } from "../../components/Buttom";
import { styles } from "./style";
import { useAuth } from "../../hooks/useAuth";

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../global/props';
import { Back } from "../../components/Back";
type Props = NativeStackScreenProps<RootStackParamList>;




export function Evento({navigation}:Props){



    const [titulo, setTitulo] = useState('');
    const [descricao, setDesc] = useState('');
    const [tipo, setTipo] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [horaInicio, sethoraInicio] = useState('');
    const [horaFim, sethoraFim] = useState('');
    const {createEvent, setEvento} = useAuth();
    const state = {
        data: ''
    }

    function handleCreateEvent(){
        const response = createEvent({title:titulo, description:descricao, event_type: 0, date_start:dataInicio+" "+horaInicio,date_end:dataFim+ " "+horaFim})
        setEvento();
        navigation.navigate("Calendario");
    }

    function handleBack(){
        navigation.navigate("Calendario");
    }

    // function changeDate = (valor) => {
    //     this.setState({
    //         data: valor
    //     })
    // }

    return (
        <KeyboardAvoidingView behavior={"height"} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={{ flex: 1, paddingTop: 32}}>
                    <Back onPress={handleBack}/>
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
                            <Input 
                                onChangeText={(value) =>{
                                    setTipo(value);
                                }}
                                placeholder="Ex.: Formal"
                                keyboardType="default"
                            />
                            <Input 
                                onChangeText={(value) =>{
                                    setDataInicio(value);
                                }}
                                placeholder="Data de inicio.: 20/02/2018"
                                keyboardType="default"
                                
                            />
                            <Input 
                                onChangeText={(value) =>{
                                    sethoraInicio(value);
                                }}
                                placeholder="Hora de inicio.: 20:00"
                                keyboardType="default"
                                
                            />
                             
                           
                            <Input 
                                onChangeText={(value) =>{
                                    setDataFim(value);
                                }}
                                placeholder="Data de fim.: 20/02/2018"
                                keyboardType="default"
                                
                            />
                            <Input 
                                onChangeText={(value) =>{
                                    sethoraFim(value);
                                }}
                                placeholder="Hora de termino.: 20:00"
                                keyboardType="default"
                                
                            />
                            {/* <DatePicker 
                                format="DD/MM/YYYY"
                                style={{width: 350}}
                                date={this.state.data}
                                onDateChange={this.changeDate}
                            /> */}
                        </View>
                        <View style={styles.middle2}>
                            <Buttom color={true} onPress={handleCreateEvent} title="Cadastrar"/>
                            <View style={{ height: 15 }}></View>
                            <TextGray  text="Cancelar" /> 
                            {/* onPress={handleback} */}
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}