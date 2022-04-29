import { TouchableOpacityProps, Text } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
    text: string;
}
export function TextGray({ text, ...rest }: ButtomProps) {
    return (
        <Text style={styles.text}>{text}</Text>
    );
}
