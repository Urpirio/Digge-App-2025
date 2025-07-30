import { Image, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEliminarImg } from "../Hook/useEliminarImg";

interface Evidencias {
  Data: any | null;
}

export default function Contenedor_Evidencias({ Data }: Evidencias) {
  const { AlertEliminarImg } = useEliminarImg();
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {Data?.map((D: { ImageTrirada: string }) => {
        return (
          <View
            style={{
              borderRadius: 20,
              marginBottom: 5,
              height: 150,
              width: 100,
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => AlertEliminarImg({ImageTrirada:D.ImageTrirada})}
              style={{
                position: "absolute",
                zIndex: 2,
                alignItems: "flex-end",
                padding: 2,
              }}
            >
              <View
                style={{
                  backgroundColor: "#0F539C",
                  borderRadius: 30,
                  padding: 2,
                }}
              >
                <AntDesign name="close" size={20} color="white" />
              </View>
            </TouchableOpacity>
            <Image
              style={{ height: "100%", width: "100%", borderRadius: 5 }}
              source={{ uri: D.ImageTrirada }}
            />
          </View>
        );
      })}
    </View>
  );
}
