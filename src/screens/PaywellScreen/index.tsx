import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import Plant from "../../../assets/Svgs/page4/Plant.svg";
import FixedBottom from "../../components/FixedBottom";
import PrimarySkipButton from "../../components/PrimarySkipButton";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import TermsAndPolicy from "../../components/TermsAndPolicy";
import SubscriptionOption from "../../components/SubscribeOptions";

const Sun = "../../../assets/Svgs/page4/Sun.png";
const Background = "../../../assets/Svgs/page4/Blur.png";

const TermsAndPolicyStyleOne = {
  textStyle: { fontSize: 5 },
  componentStyle: { width: "90%" },
};

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const PaywallScreen: FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View style={styles.topContainer}>
        <View>
          <Image
            source={require(Sun)} // Replace with the actual path to your image
            style={{ width: "100%", height: "100%", position: "absolute" }} // Set the desired width and height
          />
        </View>
        <View>
          <Image
            source={require(Background)} // Replace with the actual path to your image
            style={{ width: "100%", height: "100%", position: "absolute" }} // Set the desired width and height
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <SubscriptionOption/>
        <FixedBottom>
          <PrimarySkipButton
            title="Try For 3 days"
            onPress={() => navigation.navigate("HomePage")}
          />
          <View style={styles.FooterText}>
            <TermsAndPolicy
              style={TermsAndPolicyStyleOne}
              title="After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable"
            />
          </View>
          <View style={styles.FooterText}>
            <TermsAndPolicy
              style={{
                textStyle: { fontSize: 12 },
                componentStyle: { width: "90%" },
              }}
              title="Terms  •  Privacy  •  Restore"
            />
          </View>
        </FixedBottom>
      </View>
    </View>
  );
};

export default PaywallScreen;
