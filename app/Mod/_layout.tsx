import { Stack } from "expo-router";
import { View } from "react-native";

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name="Modal_MapReportesAverias" options={{
            header:()=>{
                return <View style={{height:30,backgroundColor:'#0F539C'}}/>
            }
        }}/>
        <Stack.Screen name="Modal_MapDenuncias" options={{
          header:()=>{
            return <View style={{height:30,backgroundColor:'#0F539C'}}/>
          }
        }}/>
    </Stack>
  )
}
