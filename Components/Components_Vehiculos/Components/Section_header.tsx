import { Image, View,Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function Section_header() {
  return (
    <View style={{flexDirection:'row',backgroundColor:'#0F539C',paddingBottom:10,paddingHorizontal:10,justifyContent:'space-between',alignItems:'center'}}>
        <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
           <Image
          style={{height:50,width:50,borderRadius:80}}
          source={{uri:'https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg'}}/>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',}}>Juan Marte</Text>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10 }}
        >
          <TouchableOpacity>
            <Ionicons name="search-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>router.navigate('/SubScreens/ScreenNotificaciones')}>
            <Ionicons name="notifications-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
    </View>
  )
}
