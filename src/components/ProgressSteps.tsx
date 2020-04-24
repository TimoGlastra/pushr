import React from 'react'
import { Text, useTheme } from '@ui-kitten/components'
import { View } from 'react-native'
import { sum } from '../utils/numbers'

interface ProgressStepsProps {
  steps: number[]
  currentStep: number
}

function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  const theme = useTheme()
  const total = sum(steps)

  const isDone = (stepIndex: number) => currentStep <= stepIndex

  const backgroundColor = theme['background-basic-color-1']
  const successColor = theme['color-success-500']
  const hintColor = theme['text-hint-color']
  const successTransparentColor = theme['color-success-transparent-200']

  return (
    <View
      style={{
        height: 30,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 1000,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: successColor,
      }}
    >
      {steps.map((step, stepIndex) => (
        <View
          key={stepIndex}
          style={{
            backgroundColor: isDone(stepIndex)
              ? backgroundColor
              : successTransparentColor,
            borderRightWidth: stepIndex !== steps.length - 1 ? 1 : 0,
            borderColor: successColor,
            width: `${(step / total) * 100}%`,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: isDone(stepIndex) ? hintColor : successColor,
              fontWeight: isDone(stepIndex) ? 'normal' : 'bold',
            }}
          >
            {step}
          </Text>
        </View>
      ))}
    </View>
  )
}

export { ProgressSteps }
