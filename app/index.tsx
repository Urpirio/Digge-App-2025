import { router } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function index(){
    return(
        <SafeAreaProvider>
            <Image 
            style={{objectFit:'contain',height:'100%',width:'100%'}}
            source={require('../Assets/Backgrounds/Pagina de bienvenida.png')}/>

            <View style={{position:'absolute',height:'100%',width:'100%',justifyContent:'center',gap:30}}>

                <View style={{width:'100%',alignItems:'center',gap:30,paddingHorizontal:10}}>
                    <Image style={{objectFit:'contain',height:100,width:100}} source={require('../Assets/Image/Logo.png')}/>
                    <Text style={{fontSize:20,fontWeight:'600'}}>Bienvenido de DIGGEAPP</Text>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'300'}}>Tu nueva forma de conectarte con la gestión vial en República Dominicana.</Text>
                </View>

                <View style={{alignItems:'center',width:'100%',gap:20}}>

                    <TouchableOpacity
                    onPress={()=>router.navigate('/Screens/AScreenHome')}
                     style={{backgroundColor:'#0F539C',width:'80%',padding:10,borderRadius:10}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'white'}}>Iniciar sesion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderWidth:1,borderColor:'#0F539C',width:'80%',padding:10,borderRadius:10,backgroundColor:'white'}}>
                        <Text style={{color:'#1271d6ff',textAlign:'center',fontSize:18}}>Registrarse</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaProvider>
    )
}