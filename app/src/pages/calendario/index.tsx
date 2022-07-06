import { Alert, FlatList, ScrollView, View } from 'react-native';
import { Calendar } from 'react-native-calendario';
import { styles } from './style';
import { Event } from '../../components/Event'
import { useState } from 'react';
let date = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();

import { Buttom } from '../../components/Buttom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';

interface eventProps {
  id: string,
  date_start: string,
  date_end: string,
  title: string,
  description: string,
  type: Number,
}
export function Calendario() {
  let { eventslist, loading } = useAuth()
  const [eventsByday, setEventsByday] = useState<eventProps[]>([])
  useEffect(() => {
    if (!loading) {
      for (let index = 0; index < eventslist.length; index++) {
        const element = eventslist[index];
        element.date_end.replaceAll('T', ' ')
        element.date_start.replaceAll('T', ' ')
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
  return (
    <View style={styles.container}>
      {loading
        ?
        (<View>

        </View>)
        : (<ScrollView>
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
          <View style={styles.lista}>
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
        )}

    </View>
  );
}