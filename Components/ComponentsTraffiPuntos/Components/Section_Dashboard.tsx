import { View } from "react-native";
import Card_Denuncias from "../SubComponents/Card_Denuncias";


export default function Section_Dashboard() {
  return (
    <View style={{paddingHorizontal:10,gap:10,paddingBottom:50}}>
        <Card_Denuncias/>
        <Card_Denuncias/>
        <Card_Denuncias/>
        <Card_Denuncias/>
        <Card_Denuncias/>
        <Card_Denuncias/>
        <Card_Denuncias/>
        <Card_Denuncias/>
    </View>
  )
}
