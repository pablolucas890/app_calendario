import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style'
import { Feather } from '@expo/vector-icons';
import { color } from '../../util/color';

interface Props {
    colorReceived: string;
    description: string;
    title: string;
}
export function Event({ title, colorReceived, description, ...rest }: Props) {
    const sizeDesc = 40;
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ width: '90%', flexDirection: 'row' }}>

                    <Feather name='stop-circle' color={colorReceived} style={{ paddingRight: 10, paddingTop: 5 }} />
                    <Text style={{ color: color.cinza3, fontWeight: 'bold' }}>10:00 - 13:00</Text>
                </View>
                <Feather color={color.cinza3} size={20} name='more-horizontal' />
            </View>
            <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Quicksand_600SemiBold', letterSpacing: 1.5 }}>{title}</Text>
            </View>
            <View style={{ marginTop: 5, flexDirection:'row' }}>
                <Text style={{ fontFamily: 'Quicksand_600SemiBold', color: color.cinza1 }}>{description.length > sizeDesc ? description.substring(0, sizeDesc) + '...' : description}</Text>
                {description.length > sizeDesc ? (
                    <TouchableOpacity>
                        <Text style={{fontSize:13, marginLeft:5, fontFamily:'Quicksand_600SemiBold', color: colorReceived}}>Ver mais</Text>
                    </TouchableOpacity>
                ) : (<View></View>)}
            </View>
        </View>
    );
}
