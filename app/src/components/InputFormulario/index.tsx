import { TouchableOpacityProps, TextInput } from 'react-native';
import { styles } from './style';

interface ButtomProps extends TouchableOpacityProps {
  placeholder: string;
}

export function InputFormulario({ placeholder, ...rest }: ButtomProps) {
    return (
        <TextInput
        style={styles.formulario}
        placeholder={placeholder}
      />
    );
}
