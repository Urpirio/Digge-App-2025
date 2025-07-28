import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const Data_BtnIconos = [
  {
    Icon: (D: { Color: string }) => (
      <FontAwesome name="motorcycle" size={24} color={D.Color} />
    ),
    titulo: "motorcycle",
  },
  {
    Icon: (D: { Color: string }) => (
      <FontAwesome5 name="car-side" size={24} color={D.Color} />
    ),
    titulo: "car-side",
  },
  {
    Icon: (D: { Color: string }) => (
      <MaterialCommunityIcons
        name="truck-minus-outline"
        size={24}
        color={D.Color}
      />
    ),
    titulo: "truck-minus-outline",
  },
  {
    Icon: (D: { Color: string }) => (
      <FontAwesome5 name="truck-pickup" size={24} color={D.Color} />
    ),
    titulo: "truck-pickup",
  },
];
