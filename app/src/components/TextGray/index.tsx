import { TouchableOpacityProps, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
    text: string;
}
export function TextGray({ text, ...rest }: ButtomProps) {
    return (
        <TouchableOpacity {...rest}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
