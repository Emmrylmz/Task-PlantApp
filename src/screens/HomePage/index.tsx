import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SectionList,
} from "react-native";
import React from "react";
import FixedBottom from "../../components/FixedBottom";
import FixedTop from "../../components/FixedTop";
import {
  useGetCategoriesQuery,
  useGetQuestionsQuery,
} from "../../features/apiSlice";
import SearchBar from "../../components/SearchBar";
import PremiumAvailable from "../../components/PremiumAvailable";
import { heightPercentageToDP } from "react-native-responsive-screen";
import NavbarHome from "../../components/NavbarHome";

const topImage = "../../../assets/Svgs/home/Images.png";
const HomePage = () => {
  const { data: questions, isLoading: isLoadingQuestions } = useGetQuestionsQuery();
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery();

  

  

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require(topImage)}
        className="w-full  z-0 absolute top-36"
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
        <ScrollView
        showsVerticalScrollIndicator={false}>
          <PremiumAvailable />
          <Text className="font-Rubik font-semibold text-xl">Get Started</Text>
          <FlatList
            data={questions ?? []}
            renderItem={renderQuestions}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
          />
          <FlatList
            data={categories?.data ?? []}
            renderItem={renderCategories}
            keyExtractor={(item) => item.id.toString()}
            vertical
            showsVerticalScrollIndicator={false}
            numColumns="2"
            pagingEnabled={true}
          />
        </ScrollView>
      </FixedTop>

      <FixedBottom
        bodyStyle={{
          bottom: 0,
          height: heightPercentageToDP(7),
        }}
      >
        <NavbarHome />
      </FixedBottom>
    </View>
  );
};

const renderQuestions = ({ item }) => {
 
    return (
      <TouchableOpacity className="h-40 w-56 rounded-xl flex-1 mr-1 flex relative  ">
        <Image
          source={{ uri: item.image_uri }}
          className="h-40 w-56 rounded-xl absolute "
        />
        <View>
          <Text className="font-Rubik text-WHITE text-md absolute w-full mt-24 p-2 px-2 font-bold  ">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }


const renderCategories = ({ item }) => {
 
    return (
      <TouchableOpacity className="h-36 w-36 rounded-xl flex-1 mr-1 flex bg-CATEGORIES_BACKGROUND mt-2 pl-1  ">
        <Image
          source={{ uri: item.image.url }}
          className="h-36 w-36 rounded-xl absolute "
        />
        <View className="w-24">
          <Text className="font-Rubik text-BLACK text-md absolute w-full mt-6 p-2 px-2 font-bold  ">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }


export default HomePage;
