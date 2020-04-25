import React from 'react'
import { TextInput, View } from 'react-native'
import { useTheme } from '@ui-kitten/components'
import { IconLabelRow, IconRow } from '../../../components/IconRow'

function Pusher({ noOfPushUps }: { noOfPushUps: number }) {
  return <IconLabelRow label={noOfPushUps.toString()} icon="arrowhead-down" />
}

function InputPusher({
  value,
  onChangeText,
  disabled = false,
}: {
  value: string
  onChangeText: (nextValue: string) => void
  disabled?: boolean
}) {
  const theme = useTheme()
  const textColor = theme['text-basic-color']

  return (
    <IconRow icon="arrowhead-down">
      <TextInput
        keyboardType="number-pad"
        value={value}
        onChangeText={onChangeText}
        caretHidden
        clearTextOnFocus
        maxLength={3}
        returnKeyType="done"
        editable={!disabled}
        style={{
          color: textColor,
          fontSize: 40,
          fontWeight: 'bold',
          borderBottomWidth: 4,
          borderBottomColor: textColor,
        }}
      ></TextInput>
    </IconRow>
  )
}

export { Pusher, InputPusher }
