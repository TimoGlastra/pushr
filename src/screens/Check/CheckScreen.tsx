import React, { useState } from 'react'
import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Icon,
  TopNavigationAction,
  Modal,
  Card,
  Text,
  Calendar,
  StyleType,
} from '@ui-kitten/components'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { View, StyleSheet } from 'react-native'
import { CalendarDateInfo } from '@ui-kitten/components/ui/calendar/type'

interface CheckScreenProps {
  navigation: BottomTabNavigationProp<{}>
}

const CalendarIcon = (props: any) => <Icon {...props} name="calendar" />

const DayCell: (
  info: CalendarDateInfo<Date>,
  style: StyleType
) => React.ReactElement = ({ date }, style) => (
  <View style={[styles.dayContainer, style.container]}>
    <Text style={style.text}>{`${date.getDate()}`}</Text>
    <Text style={[style.text, styles.value]}>
      {Math.random() > 0.5 ? '•' : ''}
    </Text>
  </View>
)

export function CheckScreen({ navigation }: CheckScreenProps) {
  const [isCalendarModalVisible, setIsCalendarModalVisible] = useState(false)
  const [date, setDate] = useState(new Date())
  const renderRightActions = () => (
    <TopNavigationAction
      icon={CalendarIcon}
      onPress={() => setIsCalendarModalVisible(true)}
    />
  )

  return (
    <>
      <TopNavigation
        title="Check"
        alignment="center"
        accessoryRight={renderRightActions}
        subtitle={`${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`}
      />
      <Divider />
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button>Today</Button>
      </Layout>

      <Modal
        visible={isCalendarModalVisible}
        onBackdropPress={() => setIsCalendarModalVisible(false)}
        // backdropStyle={{
        //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // }}
      >
        <Layout
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Calendar
            date={date}
            onSelect={(nextDate) => {
              setDate(nextDate)
              setIsCalendarModalVisible(false)
            }}
            renderDay={DayCell}
          ></Calendar>
        </Layout>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  value: {
    fontSize: 12,
    fontWeight: '400',
  },
})
