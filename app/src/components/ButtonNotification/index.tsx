import { TouchableOpacity, TouchableOpacityProps, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { color } from '../../util/color';

interface ButtomProps extends TouchableOpacityProps {
    title: string;
    active: boolean;
}
export function ButtonNotification({ title, active, ...rest }: ButtomProps) {
    
    if(!active){
        return (
            <TouchableOpacity style = {styles.botao}>
                    <Ionicons name="notifications-off-outline" size={24} color={color.cinza1}/>
                    <Text style={styles.texto}>{title}</Text>
            </TouchableOpacity>
                
        );
    }else{
        return (
            <TouchableOpacity style = {styles.botao}>
                    <Ionicons name="notifications-outline" size={24} color={color.verde} />
                    <Text style={styles.textoAtivado}>{title}</Text>
            </TouchableOpacity>
                
        );
    }
}
