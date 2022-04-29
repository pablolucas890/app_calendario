import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';
import { Feather } from '@expo/vector-icons';
export function Back() {

    return (
        <TouchableOpacity style={styles.botao}>
            <Feather style={styles.texto} name='chevron-left'/>
        </TouchableOpacity>
    );
}
