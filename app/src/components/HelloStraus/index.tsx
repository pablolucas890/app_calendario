import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { TouchableOpacityProps, Text } from 'react-native';

interface ButtomProps extends TouchableOpacityProps {
    name: string;
}
export function HelloStraus({name, ...rest}: ButtomProps) {
    const num = 32;
  return (
    <View style={{ marginTop: 10}}>
        <Text style={[styles.text,{fontSize: num}]}>
            Olá,
        </Text>
        <Text style={[styles.name,{fontSize: num},{fontWeight: "bold"}]}>
            {name}
        </Text>
    </View>
  );
}