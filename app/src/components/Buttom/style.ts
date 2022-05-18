
import { StyleSheet } from 'react-native';
import { color } from '../../util/color';

export const styles = StyleSheet.create({
    botao: {
        backgroundColor: color.verde,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: 15,
        width: '100%',
        marginBottom: 5,
        borderRadius: 8,
        shadowOffset: { width: 2, height: 3, },
        shadowColor: 'black',
        shadowOpacity: 0.25,
    },
    texto: {
        shadowOpacity: 0.25,
        color: 'white',
        fontSize: 18,
        fontFamily: 'Quicksand_600SemiBold'
    },
});
