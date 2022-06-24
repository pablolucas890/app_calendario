import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { styles } from './style'
import { Feather } from '@expo/vector-icons';
import { color } from '../../util/color';
import { useState } from 'react';

interface Props {
    colorReceived: string;
    description: string;
    title: string;
    date_start: string;
    date_end: string;
}
export function Event({ date_start, date_end, title, colorReceived, description, ...rest }: Props) {
    const horario = date_start.substring(11, 16) + ' - ' + date_end.substring(11, 16);
    const sizeDesc = 40;
    const [booleanModal, setBooleanModal] = useState(false);
    return (
        <View style={styles.container}>
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={booleanModal}
                onRequestClose={() => {
                    setBooleanModal(false)
                }}>
                {
                    //FALTA ESTILIZAR AQUI, POIS APARECE COMO UMA NOVA JANELA
                }
                <View>
                    <Text>oiiiiiiiiiiiiiiiiiiiiiiiiiiii</Text>
                    <Text>oiiiiiiiiiiiiiiiiiiiiiiiiiiii</Text>
                    <TouchableOpacity
                        onPress={() => setBooleanModal(false)}
                    >
                        <Text style={{ fontSize: 13, marginLeft: 5, fontFamily: 'Quicksand_600SemiBold', color: colorReceived }}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.top}>
                <View style={{ width: '90%', flexDirection: 'row' }}>

                    <Feather name='stop-circle' color={colorReceived} style={{ paddingRight: 10, paddingTop: 5 }} />
                    <Text style={{ color: color.cinza3, fontWeight: 'bold' }}>{horario}</Text>
                </View>
                <Feather color={color.cinza3} size={20} name='more-horizontal' />
            </View>
            <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Quicksand_600SemiBold', letterSpacing: 1.5 }}>{title}</Text>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row' }}>
                <Text style={{ fontFamily: 'Quicksand_600SemiBold', color: color.cinza1 }}>{description.length > sizeDesc ? description.substring(0, sizeDesc) + '...' : description}</Text>
                {description.length > sizeDesc ? (
                    <TouchableOpacity
                        onPress={() => setBooleanModal(true)}
                    >
                        <Text style={{ fontSize: 13, marginLeft: 5, fontFamily: 'Quicksand_600SemiBold', color: colorReceived }}>Ver mais</Text>
                    </TouchableOpacity>
                ) : (<View></View>)}
            </View>
        </View>
    );
}
