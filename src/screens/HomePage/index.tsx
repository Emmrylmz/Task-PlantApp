import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SectionList,
  Dimensions,
  SafeAreaView,
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
const { width } = Dimensions.get("window");

const topImage = "../../../assets/Svgs/home/Images.png";

const HomePage = () => {
  const { data: questions } =
    useGetQuestionsQuery();
  const { data: categories } =
    useGetCategoriesQuery();

  const merged = [
    { horizontal: true, title: "questions", data: questions ?? [] },
    { title: "categories", data: categories?.data ?? [] },
  ];


  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require(topImage)}
        className="w-full  z-0 absolute top-36"
      />
      <FixedTop bodyStyle={{ height: heightPercentageToDP(19), top:heightPercentageToDP(5) }}>
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

      <SafeAreaView className="left-8 top-60 z-10 h-auto">
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={merged}
          numColumns={2}
          renderSectionHeader={({ section }) => (
            <>
              {section.horizontal ? (
                <>
                  <Text className="font-Rubik font-semibold text-xl ">
                    Get Started
                  </Text>

                  <PremiumAvailable />
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({ item }) => <RenderQuestions item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                </>
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <RenderCategories item={item} />;
          }}
        />
      </SafeAreaView>

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

const RenderQuestions = ({ item }) => {
  return (
    <TouchableOpacity className="h-40 w-56 rounded-xl  mr-1 ">
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
};

const RenderCategories = ({ item }) => {
  return (
    <TouchableOpacity className="h-44 w-44 rounded-xl  bg-CATEGORIES_BACKGROUND mt-2   ">
      <Image
        source={{ uri: item.image.url }}
        className="h-44 w-44 rounded-xl absolute "
      />
      <View className="w-24">
        <Text className="font-Rubik text-BLACK text-md absolute w-full mt-6 p-2 px-2 font-bold  ">
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};



export default HomePage;
