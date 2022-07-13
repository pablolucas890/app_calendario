import { Alert, FlatList, ScrollView, View ,useWindowDimensions, Text} from 'react-native';
import { Calendar } from 'react-native-calendario';
import { styles } from './style';
import { Event } from '../../components/Event'
import React, { useState } from 'react';
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

import { Buttom } from '../../components/Buttom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { NavigationHelpersContext } from '@react-navigation/native';
import { RootStackParamList } from '../../global/props';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Back } from '../../components/Back';

type Props = NativeStackScreenProps<RootStackParamList>;


interface eventProps {
  id: string,
  date_start: string,
  date_end: string,
  title: string,
  description: string,
  event_type: Number,
}
export function Calendario({navigation} : Props) {
  const { height, width } = useWindowDimensions();
  console.log(height)
  let { eventslist, loading, userFinal,setUserFinal2 } = useAuth()

  console.log(userFinal.name)
  const [eventsByday, setEventsByday] = useState<eventProps[]>([])
  useEffect(() => {
    if (!loading) {
      for (let index = 0; index < eventslist.length; index++) {
        const element = eventslist[index];
        eventslist[index] = element;
      }
      console.log('novo events')
      console.log(eventslist)

    }
  });
  function handlePressDate(range) {
    setEventsByday([]);
    const dateRec: string = range.toString()
    let mes = dateRec.substring(4, 7)
    if (mes === 'Jul') {
      mes = '07'
    }
    const day = dateRec.substring(8, 10)
    const year = dateRec.substring(11, 15)
    const dateAll = year + '-' + mes + '-' + day
    let aux = 0;
    for (let i = 0; i < eventslist.length; i++) {
      const element = eventslist[i];
      if (element.date_start.substring(0, 10) === dateAll) {
        setEventsByday(eventsByday => [...eventsByday, element])
      }
    }
  }

  function handleBack(){
    if (userFinal.name === undefined){
      navigation.navigate('Index')  
    }else{
      navigation.navigate('Login')
    }
  }
  function handleWelcome(){
    setUserFinal2()
    navigation.navigate('Index')
  }
  return (
    <View style={styles.container}>
      {loading
        ?
        (<View>

        </View>)
        : (<ScrollView>
          <Back onPress={handleBack}/>
          <Calendar
            onPress={(range) => handlePressDate(range)}
            // minDate={new Date(2018, 3, 20)}
            startDate={new Date(year, month, date)}
            firstDayMonday={false}
            monthHeight={378}
            numberOfMonths={1}        // endDate={new Date(2018, 4, 5)}
            theme={{
              activeDayColor: 'red',
              monthTitleTextStyle: {
                color: '#393838',
                fontWeight: '300',
                fontSize: 16,
              },
              emptyMonthContainerStyle: {},
              emptyMonthTextStyle: {
                fontWeight: '300',
              },
              weekColumnsContainerStyle: {},
              weekColumnStyle: {
                paddingVertical: 10,
              },
              weekColumnTextStyle: {
                color: '#019D4A',
                fontSize: 13,
              },
              nonTouchableDayContainerStyle: {},
              nonTouchableDayTextStyle: {},
              startDateContainerStyle: {},
              endDateContainerStyle: {},
              dayContainerStyle: {},
              dayTextStyle: {
                color: '#393838',
                fontWeight: '400',
                fontSize: 15,
              },
              dayOutOfRangeContainerStyle: {},
              dayOutOfRangeTextStyle: {},
              todayContainerStyle: {},
              todayTextStyle: {
                color: '#6d95da',
              },
              activeDayContainerStyle: {
                backgroundColor: '#019D4A',
              },
              activeDayTextStyle: {
                color: 'white',
              },
              nonTouchableLastMonthDayTextStyle: {},
            }}
          />
          <View style={styles.lista}>
            <FlatList

              data={eventsByday}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Event
                  colorReceived={item.event_type == 0 ? '#0095FF' : '#FF7A00'}
                  description={item.description}
                  title={item.title}
                  date_start={item.date_start}
                  date_end={item.date_end}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
          <View style={styles.inserir}>

          { 
              userFinal.name != undefined && userFinal != undefined && userFinal != null
              ?
              <Buttom title='Logout' onPress={handleWelcome} color={false} />
              :
              <View></View>
            }
          </View>
          <View>
            { 
              userFinal.name != undefined && userFinal != undefined && userFinal != null
              ?
              <View><Text>BoTÃO</Text></View>
              :
              <View></View>
            }
          </View>
        </ScrollView>
        )}

    </View>
  );
}