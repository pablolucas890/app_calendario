import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
    title: string;
    color: boolean;//false -red //true -grean
}
export function Buttom({ title,color, ...rest }: ButtomProps) {

    return (
        <TouchableOpacity style={color == true ? styles.botao : styles.botao2} {...rest}>
            <Text style={styles.texto}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
