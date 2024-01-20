import React, { FC, useEffect, useRef } from "react";
import { View, Dimensions, FlatList, BackHandler } from "react-native";
import OnBoardingOne from "../OnBoardingOne";
import OnBoardingTwo from "../OnBoardingTwo";
import FixedBottom from "../../components/FixedBottom";
import PrimarySkipButton from "../../components/PrimarySkipButton";
import Paginator from "../../components/Paginator";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import {
  NavigationProp,
  ParamListBase,
  StackActions,
} from "@react-navigation/native";
import { setCurrentPage } from "../../features/OnBoardingSlice";


const { width } = Dimensions.get("window");

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const OnBoardingCarousel: FC<IProps> = ({ navigation }) => {
  const currentPage = useSelector(
    (state: RootState) => state.onboarding.currentPage
  );

  const flatListRef = useRef<FlatList>(null);
  const totalOnboardingPages = 2;
  const dispatch = useDispatch();

  const handleScroll = (event: any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const newPage = Math.round(xOffset / width);

    if (newPage !== currentPage) {
      dispatch(setCurrentPage(newPage));
    }
  };

  const handleScrollToNextPage = () => {
    if (currentPage < totalOnboardingPages - 1) {
      const nextPage = currentPage + 1;
      dispatch(setCurrentPage(nextPage));
      if (nextPage < data.length) {
        flatListRef.current?.scrollToIndex({ index: nextPage });
      }
    } else {
      navigation.navigate("PaywallScreen");
    }
  };

  useEffect(() => {
    dispatch(setCurrentPage(0))
    const handleBackButton = () => {
      return true; 
    };
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      />

      <FixedBottom>
        <PrimarySkipButton
          title="Continue"
          disabled={false}
          onPress={handleScrollToNextPage}
        />
        <Paginator pages={3} currentPage={currentPage} />
      </FixedBottom>
    </View>
  );
};

const renderItem = ({
  item,
}: {
  item: { id: string; component: React.ReactNode };
}) => {
  return <View style={{ width }}>{item.component}</View>;
};

const data = [
  { id: "0", component: <OnBoardingOne /> },
  { id: "1", component: <OnBoardingTwo /> },
];

export default OnBoardingCarousel;
