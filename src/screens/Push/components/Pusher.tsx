import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Tooltip } from '@ui-kitten/components'
import { IconLabelRow, IconRow } from '../../../components/IconRow'
import { useThemeColor } from '../../../utils/hooks'
import { InfoTooltip } from '../../../components/InfoTooltip'

function Pusher({ noOfPushUps }: { noOfPushUps: number }) {
  return <IconLabelRow label={noOfPushUps.toString()} icon="arrowhead-down" />
}

function InputPusher({
  value,
  onChangeText,
  disabled = false,
  tooltip,
}: {
  value: string
  onChangeText: (nextValue: string) => void
  disabled?: boolean
  tooltip?: string
}) {
  const textColor = useThemeColor('text-basic-color')
  const [isToolTipVisible, setIsTooltipVisible] = useState(true)

  const renderTextInput = () => (
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
        marginBottom: 4,
      }}
    ></TextInput>
  )

  return (
    <IconRow icon="arrowhead-down">
      {tooltip ? (
        <InfoTooltip
          // @ts-ignore
          anchor={renderTextInput}
          visible={isToolTipVisible}
          onBackdropPress={() => setIsTooltipVisible(false)}
        >
          {tooltip}
        </InfoTooltip>
      ) : (
        renderTextInput()
      )}
    </IconRow>
  )
}

export { Pusher, InputPusher }
