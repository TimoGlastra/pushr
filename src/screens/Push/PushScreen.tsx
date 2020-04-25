import React, { useReducer, PropsWithChildren } from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { Container } from '../../components/Container'
import { PushProgress } from '../../components/PushProgress'
import {
  stepsReducer,
  pushupsForCurrentStepSelector,
  isFinalStepSelector,
} from './stepsReducer'
import { PusherSteps } from './components/PusherSteps'

export function PushScreen() {
  const steps = [10, 10, 15, 20]
  const [state, dispatch] = useReducer(stepsReducer, {
    steps,
    currentStep: 0,
    restSecondsBetweenSteps: 15,
    isResting: false,
    isDone: false,
  })

  const endRest = () => dispatch({ type: 'END_REST' })
  const completeCurrentStep = () => dispatch({ type: 'COMPLETE_CURRENT_STEP' })
  const noOfPushUps = pushupsForCurrentStepSelector(state)

  let render = null

  if (state.isResting) {
    render = (
      <PusherSteps.Timer
        restTime={state.restSecondsBetweenSteps}
        onEnd={endRest}
        onSkip={endRest}
      />
    )
  } else if (isFinalStepSelector(state)) {
    render = (
      <PusherSteps.InputPusher
        noOfPushUps={noOfPushUps}
        onDone={completeCurrentStep}
      />
    )
  } else if (state.isDone) {
    render = null
  } else {
    render = (
      <PusherSteps.Pusher
        noOfPushUps={noOfPushUps}
        onDone={completeCurrentStep}
      />
    )
  }

  return (
    <PushScreenWrapper>
      <Container align="center">
        <Text category="h1">{state.isResting ? 'Rest' : 'Push'}</Text>
        <PushProgress steps={state.steps} currentStep={state.currentStep} />
      </Container>

      {render}
    </PushScreenWrapper>
  )
}

function PushScreenWrapper({ children }: PropsWithChildren<{}>) {
  const theme = useTheme()
  return (
    <ScrollView
      keyboardShouldPersistTaps="never"
      style={{ flex: 1, display: 'flex' }}
      contentContainerStyle={{ flex: 1, display: 'flex' }}
      scrollEnabled={false}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
          display: 'flex',
          backgroundColor: theme['background-basic-color-1'],
        }}
        contentContainerStyle={{
          flex: 1,
          display: 'flex',
          backgroundColor: 'green',
        }}
        behavior="position"
      >
        <Layout
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingTop: 40,
            paddingBottom: 20,
          }}
        >
          {children}
        </Layout>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}
