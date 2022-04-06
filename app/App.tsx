import { StyleSheet, Text, View } from 'react-native';
import { Buttom } from "./src/components/Buttom"
import { styles } from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nomedapessoa}>Ola João</Text>
      <Buttom />
    </View>
  );
}

