import React, { PropsWithChildren } from 'react'
import { Icon, Text, useTheme } from '@ui-kitten/components'
import { Container } from './Container'
import { View } from 'react-native'

const FixedIcon = ({ name }: { name: string }) => {
  const theme = useTheme()
  return (
    <Icon
      style={{ height: 80, width: 80 }}
      name={name}
      fill={theme['text-basic-color']}
    />
  )
}

interface IconRowProps {
  icon: string
}

function IconRow({ icon, children }: PropsWithChildren<IconRowProps>) {
  return (
    <Container direction="row" align="center" justify="space-around">
      <Container align="flex-end" flex>
        <FixedIcon name={icon} />
      </Container>

      <Container flex align="baseline">
        {children}
      </Container>
    </Container>
  )
}

interface IconLabelRowProps extends IconRowProps {
  label: string
}

function IconLabelRow({ label, ...props }: IconLabelRowProps) {
  return (
    <IconRow {...props}>
      <Text category="h1">{label}</Text>
    </IconRow>
  )
}

export { IconLabelRow, IconRow }
