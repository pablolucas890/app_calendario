import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';
import { Feather } from '@expo/vector-icons';

interface ButtomProps extends TouchableOpacityProps {
    text: String;
    icon: String;
}

export function Logout({icon, text, ...rest }: ButtomProps) {

    return (
        <TouchableOpacity style={styles.botao}>
            <Feather style={styles.iconColor} name={icon}/>
            <Text style={[styles.text]}>{text}</Text>
        </TouchableOpacity>
    );
}
