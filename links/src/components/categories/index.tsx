import { FlatList } from "react-native";

import { styles } from "./styles";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";

export function Categories(){
    return(
    <FlatList 
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <Category name={item.name} icon={item.icon} isSelected={false} />
        )}
        horizontal
        style={styles.container}
        contentContainerStyle={styles.content}
        showsHorizontalScrollIndicator={false}
    />
    )
}