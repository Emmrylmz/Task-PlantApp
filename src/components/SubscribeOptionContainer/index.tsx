import React, { SetStateAction, useState } from "react";
import { View } from "react-native";
import SubscriptionOption from "../SubscribeOptions/index"; // Assuming this is the correct path

const SubscribeOptionsContainer = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (optionId) => {
    setSelectedOption(selectedOption === optionId ? null : optionId);
  };

  return (
    <View className="space-y-4  absolute top-64">
        <View>
        <SubscriptionOption
        duration="1 Month"
        description="$2.99/month, auto renewable"
        isSelected={selectedOption === "option1"}
        onSelect={() => handleSelectOption("option1")}
      />
        </View>
      <View>
      <SubscriptionOption
        duration="3 Months"
        description="$7.99/month, auto renewable"
        isSelected={selectedOption === "option2"}
        onSelect={() => handleSelectOption("option2")}
      />
      </View>
      
      {/* Add more SubscriptionOption components as needed */}
    </View>
  );
};

export default SubscribeOptionsContainer;
