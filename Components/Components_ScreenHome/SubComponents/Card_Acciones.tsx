import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router, useFocusEffect } from "expo-router";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { useCallback, useEffect } from "react";

interface Content {
  bgIconColor: String;
  Icon: any;
  Titulo: String;
  subTitulo: String;
  Link: any;
}

export default function Card_Acciones({
  bgIconColor,
  Icon,
  Titulo,
  subTitulo,
  Link,
}: Content) {
  const opacity = useSharedValue(0);
  const height = useSharedValue(0);

  useFocusEffect(
    useCallback(() => {
      opacity.value = withTiming(1, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      });

      height.value = withTiming(65, {
        duration: 400,
        easing: Easing.inOut(Easing.ease),
      });
    }, [])
  );

  return (
    <Animated.View style={{ opacity, height }}>
      <TouchableOpacity
        onPress={() => router.navigate(Link)}
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `#${bgIconColor}`,
          borderRadius: 10,
          width: 60,
          height: 60,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            backgroundColor: `#${bgIconColor}`,
          }}
        >
          {Icon}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
