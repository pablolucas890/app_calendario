
import { StyleSheet } from 'react-native';
import { color } from '../../util/color';

export const styles = StyleSheet.create({
    botao: {
        
        backgroundColor: 'white',
        padding: 15,
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: 5,
        borderRadius: 8,
        shadowOffset: { width: 2, height: 3, },
        shadowColor: 'black',
        shadowOpacity: 0.25,
    },
    texto: {
        color: color.cinza1,
        shadowOpacity: 0.25,
        fontSize: 18,
        fontFamily: 'Quicksand_600SemiBold'
    },
    textoAtivado: {
        color: color.verde,
        shadowOpacity: 0.25,
        fontSize: 18,
        fontFamily: 'Quicksand_600SemiBold'
    }
});
