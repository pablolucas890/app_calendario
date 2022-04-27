import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';

export function Back() {

    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>
                {'˂'}
            </Text>
        </TouchableOpacity>
    );
}
