import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Caed_Actualidad from "../SubComponents/Caed_Actualidad";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";

export default function Section_Actualidad() {
  const scrollRef = useRef<ScrollView>(null);
  const [ScrollX, setScrollX] = useState<number>(360);

  useEffect(() => {
    setTimeout(() => {
      if (ScrollX === 360) {
        setScrollX(720);
        scrollRef.current?.scrollTo({ x: 360, animated: true });
      } else if (ScrollX === 720) {
        setScrollX(1080);
        scrollRef.current?.scrollTo({ x: 720, animated: true });
      } else if (ScrollX === 1080) {
        setScrollX(2160);
        scrollRef.current?.scrollTo({ x: 1080, animated: true });
      } else if (ScrollX === 2160) {
        setScrollX(0);
        scrollRef.current?.scrollTo({ x: 2160, animated: true });
      } else {
        setScrollX(360);
        scrollRef.current?.scrollTo({ x: 0, animated: true });
      }
    }, 3000);
  }, [ScrollX]);

  return (
    <View style={{ paddingBottom: 80 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Actualidad</Text>
        <TouchableOpacity
          onPress={() => router.navigate("/SubScreens/ScreenNovedades")}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ color: "#0F539C", height: 20 }}>Ver mas</Text>
          <Entypo name="chevron-small-right" size={20} color="#0F539C" />
        </TouchableOpacity>
      </View>
      <ScrollView
       
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
      >
        <Caed_Actualidad />
      </ScrollView>
    </View>
  );
}
