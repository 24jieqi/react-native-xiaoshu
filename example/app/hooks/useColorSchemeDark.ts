import { useColorScheme } from 'react-native'

const useColorSchemeDark = () => {
  const colorScheme = useColorScheme()

  return colorScheme === 'dark'
}

export default useColorSchemeDark
