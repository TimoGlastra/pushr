import { useTheme } from '@ui-kitten/components'
import { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'

function useThemeColor(colorName: string) {
  const theme = useTheme()
  const color = theme[colorName]

  if (__DEV__ && !color) {
    console.error(`colorName: ${colorName} does not exist in theme`)
  }

  return color || colorName
}

function useFirstLaunch() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<null | boolean>(null)

  useEffect(() => {
    let didCancel = false

    async function getStorage() {
      const alreadyLaunched = await AsyncStorage.getItem('alreadyLaunched')

      if (!didCancel) {
        if (alreadyLaunched === null) {
          setIsFirstLaunch(true)
          AsyncStorage.setItem('alreadyLaunched', JSON.stringify(true))
        } else {
          setIsFirstLaunch(false)
        }
      }
    }

    getStorage()
    return () => {
      didCancel = true
    }
  }, [])

  return isFirstLaunch
}

export { useThemeColor, useFirstLaunch }
