import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'


const index = ({ list }) => {
  return (
    <View>
      <FlatList
            data={list.data}
            renderItem={renderCategories}
            keyExtractor={(item) => item.id.toString()}
            vertical
            showsVerticalScrollIndicator={false}
            numColumns="2"
          />
    </View>
  )
}

const renderCategories = ({ item }) => (
    <TouchableOpacity className="h-32 w-10 rounded-xl flex-1 mr-1 flex   ">
      <Image
        source={{ uri: item.image.url }}
        className="h-32 w-20 rounded-xl absolute "
      />
      <View>
        <Text className="font-Rubik text-BLACK text-md absolute w-full mt-24 p-2 px-2 font-bold  ">
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  

export default index

