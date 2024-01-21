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

const dummy2 = {
    data: [
      {
        id: 11,
        name: "fern",
        createdAt: "2023-01-11T10:53:05.801Z",
        updatedAt: "2023-01-11T10:54:30.059Z",
        publishedAt: "2023-01-11T10:53:07.416Z",
        title: "Ferns",
        rank: 0,
        image: {
          id: 23,
          name: "6.png",
          alternativeText: null,
          caption: null,
          width: 116,
          height: 126,
          formats: null,
          hash: "6_edbcc6988a",
          ext: ".png",
          mime: "image/png",
          size: 8.24,
          url: "https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:44:46.151Z",
          updatedAt: "2023-01-11T10:44:46.151Z",
        },
      },
      {
        id: 10,
        name: "cacti-and-succulent",
        createdAt: "2023-01-11T10:52:28.521Z",
        updatedAt: "2023-01-11T10:54:39.391Z",
        publishedAt: "2023-01-11T10:52:36.428Z",
        title: "Cacti and Succulents",
        rank: 1,
        image: {
          id: 25,
          name: "5.png",
          alternativeText: null,
          caption: null,
          width: 158,
          height: 152,
          formats: null,
          hash: "5_d2384a3938",
          ext: ".png",
          mime: "image/png",
          size: 10.01,
          url: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:50:17.828Z",
          updatedAt: "2023-01-11T10:51:05.935Z",
        },
      },
      {
        id: 4,
        name: "flowering",
        createdAt: "2023-01-11T10:44:18.862Z",
        updatedAt: "2023-01-11T10:54:54.326Z",
        publishedAt: "2023-01-11T10:44:20.185Z",
        title: "Flowering Plants",
        rank: 2,
        image: {
          id: 22,
          name: "2.png",
          alternativeText: null,
          caption: null,
          width: 116,
          height: 126,
          formats: null,
          hash: "2_4a226c9ae7",
          ext: ".png",
          mime: "image/png",
          size: 5.28,
          url: "https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:44:13.779Z",
          updatedAt: "2023-01-11T10:44:13.779Z",
        },
      },
      {
        id: 7,
        name: "vegetable-and-fruit",
        createdAt: "2023-01-11T10:50:21.177Z",
        updatedAt: "2023-01-11T10:55:06.266Z",
        publishedAt: "2023-01-11T10:50:22.557Z",
        title: "Vegetables and Fruits",
        rank: 3,
        image: {
          id: 25,
          name: "5.png",
          alternativeText: null,
          caption: null,
          width: 158,
          height: 152,
          formats: null,
          hash: "5_d2384a3938",
          ext: ".png",
          mime: "image/png",
          size: 10.01,
          url: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:50:17.828Z",
          updatedAt: "2023-01-11T10:51:05.935Z",
        },
      },
      {
        id: 8,
        name: "herb",
        createdAt: "2023-01-11T10:51:13.403Z",
        updatedAt: "2023-01-11T10:55:15.464Z",
        publishedAt: "2023-01-11T10:51:22.859Z",
        title: "Herbs",
        rank: 4,
        image: {
          id: 25,
          name: "5.png",
          alternativeText: null,
          caption: null,
          width: 158,
          height: 152,
          formats: null,
          hash: "5_d2384a3938",
          ext: ".png",
          mime: "image/png",
          size: 10.01,
          url: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:50:17.828Z",
          updatedAt: "2023-01-11T10:51:05.935Z",
        },
      },
      {
        id: 5,
        name: "tree",
        createdAt: "2023-01-11T10:45:03.763Z",
        updatedAt: "2023-01-11T10:55:46.564Z",
        publishedAt: "2023-01-11T10:46:10.195Z",
        title: "Trees",
        rank: 5,
        image: {
          id: 23,
          name: "6.png",
          alternativeText: null,
          caption: null,
          width: 116,
          height: 126,
          formats: null,
          hash: "6_edbcc6988a",
          ext: ".png",
          mime: "image/png",
          size: 8.24,
          url: "https://cms-cdn.plantapp.app/6_edbcc6988a/6_edbcc6988a.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:44:46.151Z",
          updatedAt: "2023-01-11T10:44:46.151Z",
        },
      },
      {
        id: 6,
        name: "shrub",
        createdAt: "2023-01-11T10:45:51.259Z",
        updatedAt: "2023-01-11T10:56:07.609Z",
        publishedAt: "2023-01-11T10:50:41.670Z",
        title: "Shrubs",
        rank: 6,
        image: {
          id: 24,
          name: "4.png",
          alternativeText: null,
          caption: null,
          width: 116,
          height: 126,
          formats: null,
          hash: "4_31ed0235a1",
          ext: ".png",
          mime: "image/png",
          size: 7.96,
          url: "https://cms-cdn.plantapp.app/4_31ed0235a1/4_31ed0235a1.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:45:32.337Z",
          updatedAt: "2023-01-11T10:45:32.337Z",
        },
      },
      {
        id: 9,
        name: "groundcover",
        createdAt: "2023-01-11T10:51:42.646Z",
        updatedAt: "2023-01-11T11:05:56.404Z",
        publishedAt: "2023-01-11T10:51:43.919Z",
        title: "Groundcover",
        rank: 7,
        image: {
          id: 22,
          name: "2.png",
          alternativeText: null,
          caption: null,
          width: 116,
          height: 126,
          formats: null,
          hash: "2_4a226c9ae7",
          ext: ".png",
          mime: "image/png",
          size: 5.28,
          url: "https://cms-cdn.plantapp.app/2_4a226c9ae7/2_4a226c9ae7.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:44:13.779Z",
          updatedAt: "2023-01-11T10:44:13.779Z",
        },
      },
      {
        id: 12,
        name: "edible",
        createdAt: "2023-01-11T11:04:05.527Z",
        updatedAt: "2023-01-11T11:05:56.542Z",
        publishedAt: "2023-01-11T11:04:06.784Z",
        title: "Edible Plants",
        rank: 8,
        image: {
          id: 25,
          name: "5.png",
          alternativeText: null,
          caption: null,
          width: 158,
          height: 152,
          formats: null,
          hash: "5_d2384a3938",
          ext: ".png",
          mime: "image/png",
          size: 10.01,
          url: "https://cms-cdn.plantapp.app/5_d2384a3938/5_d2384a3938.png",
          previewUrl: null,
          provider:
            "@strapi-community/strapi-provider-upload-google-cloud-storage",
          provider_metadata: null,
          createdAt: "2023-01-11T10:50:17.828Z",
          updatedAt: "2023-01-11T10:51:05.935Z",
        },
      },
    ],
    meta: {
      pagination: {
        page: 1,
        pageSize: 25,
        pageCount: 1,
        total: 9,
      },
    },
  };