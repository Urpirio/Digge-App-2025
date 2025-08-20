import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { BlurView } from "expo-blur";

export default function Modal_InfoReporte() {
  const DataLocal = useLocalSearchParams();

  return (
    <SafeAreaProvider style={{ justifyContent: "flex-end" }}>
      <BlurView
        style={{ height: "100%", width: "100%" }}
        intensity={100}
        tint="dark"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            height: "100%",
            width: "100%",
          }}
        ></TouchableOpacity>
      </BlurView>
      <View
        style={{
          borderWidth: 1,
          width: "100%",
          height: "50%",
          borderRadius: 30,
          backgroundColor: "white",
          position: "absolute",
          borderColor: "#adb5bd",
          padding: 10,
          gap: 10,
        }}
      >
        <Image
          style={{ width: "100%", height: "50%", borderRadius: 20 }}
          source={{ uri: `${DataLocal?.Image}` }}
        />
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          {DataLocal?.Titulo}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "300" }}>
          {DataLocal?.Descripcion}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
