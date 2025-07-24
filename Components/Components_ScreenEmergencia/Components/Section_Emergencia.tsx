import { TouchableOpacity, View,Text } from 'react-native'

export default function Section_Emergencia() {
  return (
   <View style={{paddingVertical:10,paddingHorizontal:20,gap:10}}>
    <TouchableOpacity style={{padding:15,borderRadius:10,backgroundColor:'#EE2A24'}}>
        <Text style={{textAlign:'center',fontSize:16,color:'white'}}>ACTIVAR EMERGENCIA</Text>
    </TouchableOpacity>
    <Text style={{textAlign:'center',color:'#737474ff'}}>Presiona para enviar tu ubicación a las autoridadeses y solicitar ayuda inmediata</Text>
   </View>
  )
}
