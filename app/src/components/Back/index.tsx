import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';
import { Feather } from '@expo/vector-icons';

export function Back({...rest}:TouchableOpacityProps) {

    return (
        <TouchableOpacity style={styles.botao} {...rest}>
            <Feather style={styles.texto} name='chevron-left'/>
        </TouchableOpacity>
    );
}
