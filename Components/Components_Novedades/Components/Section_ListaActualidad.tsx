import { ScrollView, View } from "react-native";
import Card_Actulizada from "../SubComponents/Card_Actulizada";

export default function Section_ListaActualidad() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{ padding: 10 }}>
      <View style={{ gap: 10, paddingBottom: 50 }}>
        <Card_Actulizada />
        <Card_Actulizada />
        <Card_Actulizada />
        <Card_Actulizada />
        <Card_Actulizada />
        <Card_Actulizada />
        <Card_Actulizada />
        <Card_Actulizada />
      </View>
    </ScrollView>
  );
}
