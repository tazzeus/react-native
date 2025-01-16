import { View, Image, TouchableOpacity, FlatList } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { Link } from '@/components/link'
import { Categories } from '@/components/categories'
import { colors } from '@/styles/colors'
import { styles } from './styles'


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      
      <Categories />

      <FlatList
        data={["1","2","3","4","5"]} 
        keyExtractor={(item) => item}
        
        renderItem={() => (
          <Link
            name="Rocketseat"
            url="https://www.rocketseat.com.br"
            onDetails={() => console.log("Clicou!")}
          />
        )}

        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}