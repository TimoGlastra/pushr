import React, { PropsWithChildren } from 'react'
import { Tooltip, TooltipProps, Icon } from '@ui-kitten/components'

const InfoIcon = (props: any) => <Icon {...props} name="info-outline" />

function InfoTooltip({ ...props }: PropsWithChildren<TooltipProps>) {
  return <Tooltip accessoryLeft={InfoIcon} {...props} />
}

export { InfoTooltip }
