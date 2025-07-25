import { useState } from "react";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export const useStyleLogin = () => {
  const [IconPass, setIconPass] = useState<boolean>(true);

  const BtnIconPass = () => {
    switch (IconPass) {
      case true:
        return <Feather name="eye-off" size={24} color="#adb5bd" />;

      case false:
        return <Feather name="eye" size={24} color="#adb5bd" />;
    }
  };

  return {
    BtnIconPass,
    IconPass,
    setIconPass,
  };
};
