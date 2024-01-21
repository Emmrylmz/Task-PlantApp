import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import FixedBottom from "../../components/FixedBottom";
import FixedTop from "../../components/FixedTop";
import {
  useGetCategoriesQuery,
  useGetQuestionsQuery,
} from "../../features/apiSlice";
import SearchBar from "../../components/SearchBar";
import { buttonWidth } from "../../components/PrimarySkipButton/styles";
import PremiumAvailable from "../../components/PremiumAvailable";
import { heightPercentageToDP } from "react-native-responsive-screen";

const topImage = "../../../assets/Svgs/home/Images.png";
const HomePage = () => {
  // const { data: questions, isLoading: isLoadingQuestions } = useGetQuestionsQuery();
  // const { data: categories, isLoading: isLoadingCategories } =
  //   useGetCategoriesQuery();

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require(topImage)} // Replace with the actual path to your image
        className="w-full  z-0 absolute top-36" // Set the desired width and height
      />
      <FixedTop bodyStyle={{ height: heightPercentageToDP(19) }}>
        <View className="flex-col">
          <View className="pt-8">
            <Text className="text-xl font-Rubik leading-7 tracking-normal">
              Hi, plant lover!
            </Text>
            <Text className="text-2xl font-Rubik font-bold">
              Good Afternoon! ⛅
            </Text>
          </View>
        </View>
        <View className="pt-6">
          <SearchBar />
        </View>
      </FixedTop>

      <FixedTop
        bodyStyle={{
          height: heightPercentageToDP(120),
          top: heightPercentageToDP(30),
        }}
      >
        <ScrollView className="flex-1 space-y-3">
          <PremiumAvailable />
          <View className="space-y-3">
              <Text className="font-Rubik font-semibold text-xl">
                Get Started
              </Text>
            <FlatList
              data={dummy}
              renderItem={renderQuesitons}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false} // Hides the horizontal scroll bar
            />
          </View>
        </ScrollView>
      </FixedTop>

      <FixedBottom
        bodyStyle={{
          bottom: 0,
          height: heightPercentageToDP(10),
          backgroundColor: "blue",
        }}
      ></FixedBottom>
    </View>
  );
};
const renderQuesitons = ({ item }) => (
  <TouchableOpacity className="h-36 w-56 rounded-xl flex-1 mr-1 flex relative  ">
    <Image source={{uri: item.image_uri}} className="h-36 w-56 rounded-xl absolute "/>
      <View>
          <Text className="font-Rubik text-WHITE text-md absolute w-full mt-24 px-2 font-bold  ">{item.title}</Text>
      </View>
  </TouchableOpacity>
);

const dummy = [
  {
    "id": 1,
    "title": "How to identify plants?",
    "subtitle": "Life Style",
    "image_uri": "https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media",
    "uri": "https://plantapp.app/blog/identifying-plant-in-10-steps/",
    "order": 1
  },
  {
    "id": 2,
    "title": "Differences Between Species and Varieties?",
    "subtitle": "Plant Identify",
    "image_uri": "https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media",
    "uri": "https://plantapp.app/blog/differences-between-species-and-varieties/",
    "order": 2
  },
  {
    "id": 3,
    "title": "The reasons why the same plant can look different?",
    "subtitle": "Life Style",
    "image_uri": "https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media",
    "uri": "https://plantapp.app/blog/same-seeds-but-different-looking-plants/",
    "order": 3
  }
]

export default HomePage;
