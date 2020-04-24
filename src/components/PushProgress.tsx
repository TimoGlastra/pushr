import React from 'react'
import { Text } from '@ui-kitten/components'
import { Container } from './Container'
import { ProgressSteps } from './ProgressSteps'
import { sum } from '../utils/numbers'

interface PushProgressProps {
  steps: number[]
  currentStep: number
}

function PushProgress({ steps, currentStep }: PushProgressProps) {
  const done = sum(steps.slice(0, currentStep))
  const toGo = sum(steps.slice(currentStep))

  return (
    <Container>
      <Container
        direction="row"
        style={{ width: '100%', marginVertical: 10 }}
        justify="center"
      >
        <Text category="h2" style={{ paddingHorizontal: 5 }}>
          {done}{' '}
          <Text category="h5" appearance="hint">
            DONE
          </Text>
        </Text>
        <Text category="h2" style={{ paddingHorizontal: 5 }}>
          /
        </Text>
        <Text category="h2" style={{ paddingHorizontal: 5 }}>
          {toGo}{' '}
          <Text category="h5" appearance="hint">
            TO GO
          </Text>
        </Text>
      </Container>
      <Container
        style={{ marginVertical: 10, marginHorizontal: 25, maxWidth: 400 }}
      >
        <ProgressSteps steps={steps} currentStep={currentStep} />
      </Container>
    </Container>
  )
}

export { PushProgress }
