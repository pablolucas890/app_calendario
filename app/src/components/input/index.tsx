import { TextInputProps, TextInput } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TextInputProps {
    placeholder: string;
}
export function Input({ placeholder, ...rest }: ButtomProps) {

    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...rest}
      />
    );
}
