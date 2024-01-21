import { View, Text, Image } from "react-native";
import React from "react";
import FixedBottom from "../../components/FixedBottom";
import FixedTop from "../../components/FixedTop";
import {
  useGetCategoriesQuery,
  useGetQuestionsQuery,
} from "../../features/apiSlice";
import { Input } from "react-native-elements";
import IconSVG from "../../../assets/Svgs/home/Icon.svg";
import { buttonWidth } from "../../components/PrimarySkipButton/styles";
import { SearchBar } from "react-native-screens";

const topImage = "../../../assets/Svgs/home/Images.png";
const HomePage = () => {
  // const { data: questions, isLoading: isLoadingQuestions } =
  //   useGetQuestionsQuery();
  // const { data: categories, isLoading: isLoadingCategories } =
  //   useGetCategoriesQuery();

  // console.log(categories, questions);
  return (
    <View>
      <View className="w-full absolute  ">
        <Image
          source={require(topImage)} // Replace with the actual path to your image
          className="w-full z-0 absolute top-40" // Set the desired width and height
        />
        <FixedTop>
          
         <SearchBar />
        </FixedTop>
      </View>

      <FixedBottom></FixedBottom>
    </View>
  );
};

export default HomePage;
