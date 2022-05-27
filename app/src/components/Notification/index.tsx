import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons'; 
import { color } from '../../util/color';

interface Props {
    description: string;
    active: boolean;
}
export function Notification({ description, active, ...rest }: Props) {
    const sizeDesc = 40;
    

    if(active == true){
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={{ width: '90%', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color={color.verde} />
                        {/* <Feather name='notifications-outline' color='black' style={{ paddingRight: 10, paddingTop: 5 }} /> */}
                        <Text style={{ color: color.verde, fontWeight: 'bold', fontFamily:'Quicksand_600SemiBold' }}>Formal</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 5 }}>
                <View style={{ width: '90%', flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Ionicons name="notifications-off-outline" size={24} color="black" />
                        <Text style={{ color: color.cinza2, fontWeight: 'bold', fontFamily:'Quicksand_600SemiBold' }}>Informal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
