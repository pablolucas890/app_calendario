import { View } from 'react-native';
import { Calendar } from 'react-native-calendario';
import { styles } from './style';


let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

export function Calendario() {
  return(
    <View style={styles.container}>

      <Calendar
      
        onPress={(range) => console.log(range)}
        // minDate={new Date(2018, 3, 20)}
        startDate={new Date(year, month, date)}
        // endDate={new Date(2018, 4, 5)}
      />
    </View>
  );
}