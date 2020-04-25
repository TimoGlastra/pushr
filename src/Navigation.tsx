import React from 'react'
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AppIntro } from './screens/AppIntro/AppIntro'
import { PushScreen } from './screens/Push/PushScreen'

export type AppStackParamList = {
  Push: undefined
}

export type RootStackParamList = {
  AppIntro: undefined
  App: undefined
}

export type RootStackNavigationProp<
  RouteName extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, RouteName>

const RootStack = createStackNavigator<RootStackParamList>()
const AppStack = createStackNavigator<AppStackParamList>()

function AppNavigation() {
  return (
    <AppStack.Navigator initialRouteName="Push" headerMode="none">
      <AppStack.Screen name="Push" component={PushScreen}></AppStack.Screen>
    </AppStack.Navigator>
  )
}

function Navigation({ isFirstLaunch }: { isFirstLaunch: boolean }) {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        headerMode="none"
        initialRouteName={isFirstLaunch ? 'AppIntro' : 'App'}
      >
        <RootStack.Screen name="AppIntro" component={AppIntro} />
        <RootStack.Screen name="App" component={AppNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export { Navigation }
