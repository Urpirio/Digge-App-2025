import { SafeAreaProvider } from "react-native-safe-area-context";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useCallback, useState } from "react";

export default function Modal_InfoReporte() {
  const [BgStatus, setBgStatus] = useState<boolean | null>(false);
  const DataLocal = useLocalSearchParams();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        setBgStatus(true);
      }, 400);
      console.log(DataLocal);
    }, [])
  );

  const CloseBg = () => {
    router.back();
    setTimeout(() => {
      setBgStatus(false);
    }, 400);
  };

  return (
    <SafeAreaProvider style={{ justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={CloseBg}
        style={{
          backgroundColor: BgStatus ? "#21252934" : "",
          height: "100%",
          width: "100%",
        }}
      ></TouchableOpacity>
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
