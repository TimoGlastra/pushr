import React, { PropsWithChildren } from 'react'
import { View, ViewProps, StyleSheet } from 'react-native'

interface ContainerProps extends ViewProps {
  flex?: true | number
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

function Container({
  direction,
  align,
  children,
  style,
  flex,
  justify,
  ...props
}: PropsWithChildren<ContainerProps>) {
  return (
    <View
      style={StyleSheet.flatten([
        {
          flexDirection: direction,
          alignItems: align,
          flex: flex === true ? 1 : flex,
          justifyContent: justify,
        },
        style,
      ])}
      {...props}
    >
      {children}
    </View>
  )
}

export { Container }
