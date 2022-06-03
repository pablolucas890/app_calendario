import { TouchableOpacityProps, Text } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
    title: string;
    sizeReturn: number;
}
export function Title({ title, sizeReturn, ...rest }: ButtomProps) {
    const num:number = sizeReturn;
    return (
        <Text style={[styles.title, {fontSize: num}]}>{title}</Text>
    );
}
