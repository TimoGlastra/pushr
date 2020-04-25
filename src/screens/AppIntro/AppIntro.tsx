import React, { useEffect } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Image } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { Pusher, Timer, InputPusher } from '../Push/components'
import { Container } from '../../components/Container'
import { useThemeColor } from '../../utils/hooks'
import FitnessTracker from '../../../assets/fitness-tracker.svg'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProp } from '../../Navigation'

interface Slide {
  key: string
  title: string
  text: string
  image?: any
  component?: JSX.Element
}

const slides: Slide[] = [
  {
    key: 'intro',
    title: '0-100 Pushups',
    text: 'Go from 0-100 push ups in just 6 weeks',
    component: <FitnessTracker width={250} height={250} />,
  },
  {
    key: 'initial-test',
    title: 'Initial Test',
    text: 'Other cool stuff',
    component: <InputPusher disabled value="?" onChangeText={() => {}} />,
  },
  {
    key: 'third',
    title: 'Push',
    text: 'Do push ups',
    component: <Pusher noOfPushUps={25} />,
  },
  {
    key: 'fourth',
    title: 'Rest',
    text: 'Do push ups',
    component: <Timer seconds={60} />,
  },
  {
    key: 'fifth',
    title: 'Check your max',
    text: 'Do push ups',
    component: <InputPusher disabled value="30+" onChangeText={() => {}} />,
  },
]

function AppIntro() {
  const textColor = useThemeColor('text-basic-color')
  const navigation = useNavigation<RootStackNavigationProp<'AppIntro'>>()

  const onDone = () => {
    navigation.replace('App')
  }

  const renderItem = ({ item }: { item: Slide }) => (
    <Container
      flex
      align="center"
      justify="space-between"
      background="background-basic-color-1"
      style={{ paddingBottom: 100, paddingTop: 40 }}
    >
      <Text category="h1">{item.title}</Text>
      {item.image && (
        <Image
          style={{ width: 160, height: 160 }}
          width={160}
          height={160}
          source={item.image}
        />
      )}
      {item.component}
      <Text category="s1">{item.text}</Text>
    </Container>
  )

  const IconButton = ({ icon }: { icon: string }) => (
    <Icon style={{ height: 48, width: 48 }} name={icon} fill={textColor} />
  )

  const renderNextButton = () => (
    <IconButton icon="arrow-circle-right-outline" />
  )

  const renderDoneButton = () => (
    <IconButton icon="checkmark-circle-2-outline" />
  )

  return (
    // @ts-ignore
    <AppIntroSlider
      data={slides}
      // @ts-ignore
      renderItem={renderItem}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      activeDotStyle={{
        backgroundColor: textColor,
      }}
      onDone={onDone}
    />
  )
}

export { AppIntro }
