import { TouchableOpacity, TouchableOpacityProps, Text, View } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
    title: string;
}
export function Buttom({ title, ...rest }: ButtomProps) {

    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
