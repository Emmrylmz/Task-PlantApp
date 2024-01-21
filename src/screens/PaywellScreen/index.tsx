import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import Plant from "../../../assets/Svgs/page4/Plant.svg";
import FixedBottom from "../../components/FixedBottom";
import PrimarySkipButton from "../../components/PrimarySkipButton";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import TermsAndPolicy from "../../components/TermsAndPolicy";
import SubscriptionOption from "../../components/SubscribeOptions";
import SubscribeOptionsContainer from "../../components/SubscribeOptionContainer";
import UnlimitedSVG from "../../../assets/Svgs/payment/Icon.svg";
import FasterSVG from "../../../assets/Svgs/payment/Icon (1).svg";
import OverlaySVG from "../../../assets/Svgs/page4/Overlay.svg";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import PlantSVG from "../../../assets/Svgs/page4/Plant.svg";
import ScanSVG from "../../../assets/Svgs/Camera Line.svg";
import { useDispatch } from "react-redux";
import { setHasFinished } from "../../features/OnBoardingSlice";

const Sun = "../../../assets/Svgs/page4/Sun.png";
const Background = "../../../assets/Svgs/page4/Blur.png";
const Overlay = "../../../assets/Svgs/page4/Overlay.png";
const Scan = "../../../assets/Svgs/page4/Camera Line.png";
const Cross = "../../../assets/Svgs/page4/X.png";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const PaywallScreen: FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const finishOnboarding = () => {
    dispatch(setHasFinished(true));
  };
  return (
    <View style={styles.body}>
      <TouchableOpacity
        onPress={finishOnboarding}
        className="h-8 w-8 z-50 rounded-full opacity-50 bg-BLACK   absolute right-7 top-12"
      >
        <Image
          source={require(Cross)} // Replace with the actual path to your image
          className="w-3 h-3 absolute z-50 right-2.5 top-2.5" // Set the desired width and height
        />
      </TouchableOpacity>
      <View style={styles.topContainer}>
        <Image
          source={require(Sun)} // Replace with the actual path to your image
          className="w-full h-60 absolute z-30" // Set the desired width and height
        />
        <View>
          <Image
            source={require(Background)} // Replace with the actual path to your image
            className="w-full h-96 z-0 absolute" // Set the desired width and height
          />
        </View>
      </View>
      <Image
        source={require(Overlay)} // Replace with the actual path to your image
        className="w-full h-96 z-10 absolute top-15" // Set the desired width and height
      />
      <View className="top-0">
        <PlantSVG className="w-full h-full absolute pt-5" />
        <Image
          source={require(Scan)} // Replace with the actual path to your image
          className="w-72 h-72 z-10 absolute top-15 left-10 opacity-80" // Set the desired width and height
        />
      </View>

      <View style={styles.bottomContainer}>
        <View className="flex flex-row absolute flex-start w-full space-x-1 pt-2">
          <Text className="font-bold text-4xl text-WHITE">PlantApp</Text>
          <Text className="text-3xl text-WHITE">Premium</Text>
        </View>
        <View className="w-full top-12 ">
          <Text className="text-xl text-WHITE opacity-70">
            Access All Features
          </Text>
        </View>
        <FlatList
          className="absolute top-24 z-100"
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={dataArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <SubscribeOptionsContainer />
        <FixedBottom>
          <PrimarySkipButton
            title="Try For 3 days"
            onPress={finishOnboarding}
          />
          <View className="top-16 w-80">
            <TermsAndPolicy
              textStyle={{ fontSize: wp(2.1), color: "white", opacity: 0.52 }}
              title="After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable"
            />
          </View>
          <View className="w-40 top-20">
            <TermsAndPolicy
              textStyle={{ fontSize: wp(3), color: "white", opacity: 0.52 }}
              title="Terms  •  Privacy  •  Restore"
            />
          </View>
        </FixedBottom>
      </View>
    </View>
  );
};

const dataArray = [
  {
    id: "1",
    title: "Unlimited",
    subTitle: "PlantIdentify",
    svg: <UnlimitedSVG height="100%" width="100%" />,
  },
  {
    id: "2",
    title: "Faster",
    subTitle: "Process",
    svg: <FasterSVG height="100%" width="100%" />,
  },
  { id: "3", title: "Detailed", subTitle: "Plant care" },
];

const renderItem = ({ item }) => (
  <View className="h-32 w-36 rounded-xl bg-LIGHT_GREY mr-1.5">
    <View className="p-4">
      <View className="h-9 w-9">{item.svg}</View>
      <View className="pt-2">
        <Text className="font-bold text-WHITE text-xl">{item.title}</Text>
        <Text className="text-WHITE opacity-70">{item.subTitle}</Text>
      </View>
    </View>
  </View>
);

export default PaywallScreen;
