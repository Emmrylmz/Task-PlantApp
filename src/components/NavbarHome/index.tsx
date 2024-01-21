import { View, Text } from 'react-native'
import React from 'react'
import ProfileSVG from "../../../assets/Svgs/home/Navbar/Icon.svg";
import ShieldSVG from "../../../assets/Svgs/home/Navbar/Vector.svg";
import MiddleSVG from "../../../assets/Svgs/home/Navbar/profile-icon.svg";
import ScanButtonSVG from "../../../assets/Svgs/home/Navbar/Scan button.svg";
import HomeSVG from "../../../assets/Svgs/home/Navbar/home.svg";

const NavbarHome = () => {
  return (
    <View>
        <View className=" w-full h-full  ">
          <View className="h-full w-full flex flex-row justify-between items-center bg-WHITE opacity-95">
            <View className="w-1/5 h-full items-center  justify-center">
              <HomeSVG className="h-full w-full" />
              <Text className="text-xs font-Rubik text-GREEN">Home</Text>
            </View>

            <View className="w-1/5 h-full items-center justify-center ">
              <ShieldSVG className="h-full w-full" />
              <Text className="text-xs font-Rubik text-NAVBAR_TEXT">Diagnose</Text>
            </View>

            <View className="w-1/5 h-full items-center mb-14">
              <ScanButtonSVG className="h-full w-full" />
            </View>

            <View className="w-1/5 h-full items-center  justify-center">
              <ProfileSVG className="h-full w-full" />
              <Text className="text-xs font-Rubik text-NAVBAR_TEXT">My Garden</Text>
            </View>

            <View className="w-1/5 h-full items-center  justify-center">
              <MiddleSVG className="h-full w-full" />
              <Text className="text-xs font-Rubik text-NAVBAR_TEXT">Profile</Text>
            </View>
          </View>
        </View>
    </View>
  )
}

export default NavbarHome