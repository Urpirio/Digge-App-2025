import { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

export const useStyleRegistro = () => {
  const [IconPass_A, setIconPass_A] = useState<boolean>(true);
  const [IconPass_B, setIconPass_B] = useState<boolean>(true);

  const BtnPass_A = () => {
    switch (IconPass_A) {
      case true:
        return <Feather name="eye-off" size={24} color="#adb5bd" />;
      case false:
        return <Feather name="eye" size={24} color="#adb5bd" />;
    }
  };

  const BtnPass_B = () => {
    switch (IconPass_B) {
      case true:
        return <Feather name="eye-off" size={24} color="#adb5bd" />;
      case false:
        return <Feather name="eye" size={24} color="#adb5bd" />;
    }
  };

  return {
    IconPass_A,
    IconPass_B,
    setIconPass_A,
    setIconPass_B,
    BtnPass_A,
    BtnPass_B,
  };
};
