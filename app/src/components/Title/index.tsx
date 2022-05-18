import { TouchableOpacityProps, Text } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
    title: string;
    sizeReturn: Number;
}
export function Title({ title, sizeReturn, ...rest }: ButtomProps) {
    const num = 35;
    return (
        <Text style={[styles.title, {fontSize: num}]}>{title}</Text>
    );
}
