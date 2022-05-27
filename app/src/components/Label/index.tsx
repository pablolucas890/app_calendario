import { TouchableOpacityProps, Text } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
    title: string;
}
export function Label({ title, ...rest }: ButtomProps) {

    return (
        <Text style={[styles.title]}>{title}</Text>
    );
}
