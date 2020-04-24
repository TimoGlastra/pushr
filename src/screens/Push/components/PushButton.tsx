import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Icon, ButtonProps } from '@ui-kitten/components'

interface PushButtonProps extends ButtonProps {
  icon: string
  label: string
  onPress: () => void
}

function PushButton({
  icon,
  label,
  onPress,
  style,
  ...props
}: PushButtonProps) {
  const PushIcon = (props: any) => <Icon {...props} name={icon} />
  return (
    <Button
      style={StyleSheet.flatten([{ marginHorizontal: 40 }, style])}
      accessoryRight={PushIcon}
      onPress={onPress}
      appearance="outline"
      size="giant"
      status="success"
      {...props}
    >
      {label}
    </Button>
  )
}

export { PushButton }
