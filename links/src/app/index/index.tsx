import { View, Image, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { colors } from '@/styles/colors'

import { Category } from '@/components/category'


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
        <MaterialIcons name="add" size={32} color={colors.green[300]} />      
        </TouchableOpacity>
      </View>

      <Category name="Projetos" icon="code" isSelected />
      <Category name="Site" icon="language" isSelected={false} />
      <Category name="Vídeo" icon="movie" isSelected={false} />

    </View>
  )
}