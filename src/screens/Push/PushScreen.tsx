import React, {
  useState,
  useReducer,
  useEffect,
  PropsWithChildren,
} from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import { Layout, Text, useTheme } from '@ui-kitten/components'
import { Timer, Pusher, PushButton } from './components'
import { Container } from '../../components/Container'
import { PushProgress } from '../../components/PushProgress'
import { stepsReducer } from './stepsReducer'
import { useTimer } from 'use-timer'

export function PushScreen() {
  const steps = [10, 10, 15, 20]
  const [state, dispatch] = useReducer(stepsReducer, {
    steps,
    currentStep: 0,
    restSecondsBetweenSteps: 15,
    isResting: false,
    isDone: false,
  })
  const { reset, start, time } = useTimer({
    timerType: 'DECREMENTAL',
    initialTime: state.restSecondsBetweenSteps,
    onTimeOver: onTimeOver,
    endTime: 0,
  })

  function onTimeOver() {
    dispatch({ type: 'END_REST' })
  }

  let render = null

  useEffect(() => {
    if (state.isResting) {
      reset()
      start()
    }
  }, [state.isResting])

  if (state.isResting) {
    const skipResting = () => dispatch({ type: 'END_REST' })
    render = (
      <>
        <Timer seconds={time} />
        <PushButton icon="arrowhead-right" label="SKIP" onPress={skipResting} />
      </>
    )
  } else {
    const completeStep = () => dispatch({ type: 'COMPLETE_CURRENT_STEP' })
    render = (
      <>
        <Pusher noOfPushUps={state.steps[state.currentStep] || 0} />
        <PushButton
          icon="checkmark"
          label="DONE"
          disabled={state.isDone}
          onPress={completeStep}
        />
      </>
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
