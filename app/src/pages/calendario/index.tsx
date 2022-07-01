import { Alert, FlatList, ScrollView, View } from 'react-native';
import { Calendar } from 'react-native-calendario';
import { styles } from './style';
import { Event } from '../../components/Event'
import { useState } from 'react';
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

import { Buttom } from '../../components/Buttom';

interface eventProps {
  id: string,
  date_start: string,
  date_end: string,
  title: string,
  description: string,
  type: Number,
}
export function Calendario() {
  const [eventsByday, setEventsByday] = useState<eventProps[]>([])
  const events: eventProps[] = [
    {
      id: '1',
      date_start: '2022-07-25 15:00:00',
      date_end: '2022-07-25 16:00:00',
      title: 'Palestra XXXX',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      type: 0,
    },
    {
      id: '2',
      date_start: '2022-07-25 19:00:00',
      date_end: '2022-07-25 20:00:00',
      title: 'Palestra ggggggggggggggggggg',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbggggggggggggggggggggggggggggggggjjjjjjjjjjj',
      type: 1,
    },
    {
      id: '3',
      date_start: '2022-07-25 20:00:00',
      date_end: '2022-07-25 21:00:00',
      title: 'Palestra aaaaaaaaaaaaa',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      type: 0,
    },
    {
      id: '4',
      date_start: '2022-07-30 20:00:00',
      date_end: '2022-07-25 21:00:00',
      title: 'Palestra bbbbbbbbbbb',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
      type: 0,
    },
    {
      id: '5',
      date_start: '2022-07-30 20:00:00',
      date_end: '2022-07-25 21:00:00',
      title: 'Palestra cccccccccccccc',
      description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbggggggggggggggggggg',
      type: 1,
    },
   
  ]

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
    for (let i = 0; i < events.length; i++) {
      const element = events[i];
      if (element.date_start.substring(0, 10) === dateAll) {
        setEventsByday(eventsByday => [...eventsByday, element])
      }
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Calendar
          onPress={(range) => handlePressDate(range)}
          // minDate={new Date(2018, 3, 20)}
          startDate={new Date(year, month, date)}
          firstDayMonday={false}
          monthHeight={300}
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
        <View style= {styles.lista}>
        <FlatList
          
          data={eventsByday}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Event
              colorReceived={item.type == 0 ? '#0095FF' : '#FF7A00'}
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
        <Buttom title='Entrar' />
      </View>
      </ScrollView>
    </View>
  );
}