import { View ,Text} from "react-native";

interface Detalles{
  Titulo:string,
  Subtitulo:any,
  Icono: any,
};

export default function Card_informacionBasica({Titulo,Subtitulo,Icono}:Detalles) {
  return (
    <View style={{borderWidth:1,width:'100%',paddingHorizontal:10,paddingVertical:15,borderRadius:10,borderColor:'#e9ecef',boxShadow:'0px 0px 10px 0px #9a9a9a1d ',gap:10}}>
        <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
          {Icono}
          <Text style={{fontWeight:'300',color:'gray',fontSize:18}}>{Titulo}</Text>
        </View>
        <Text>{Subtitulo}</Text>
    </View>
  )
};
