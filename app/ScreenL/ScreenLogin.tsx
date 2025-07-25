import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image, View, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";
import { router } from "expo-router";
import { useEnviarDatos } from "@/Components/Components_Login/hooks/useEnviarDatos";
import { useStyleLogin } from "@/Components/Components_Login/hooks/useStyleLogin";
import { useEffect } from "react";

export default function ScreenLogin() {
  const { InputEmail, setInputEmail, InputPass, setInputPass } =
    useEnviarDatos();
  const { IconPass, setIconPass, BtnIconPass } = useStyleLogin();

  return (
    <SafeAreaProvider>
      <Image
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        source={require("../../Assets/Backgrounds/Pagina de bienvenida.png")}
      />
      <View
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          paddingTop: 80,
          paddingHorizontal: 20,
          gap: 30,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            gap: 30,
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{ objectFit: "contain", height: 100, width: 100 }}
            source={require("../../Assets/Image/Logo.png")}
          />
          <Text style={{ fontSize: 20, fontWeight: "600" }}>
            Inicia sesión en tu cuenta
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          <TextInput
            value={InputEmail}
            onChangeText={setInputEmail}
            placeholder="Correo electrónico "
            placeholderTextColor={"#adb5bd"}
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              fontSize: 16,
              borderRadius: 10,
              borderColor: "#e9ecef",
              height: 50,
            }}
          />
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#f5f3f3ff",
              flexDirection: "row",
              justifyContent:'space-between',
              borderRadius: 10,
              borderColor: "#e9ecef",
              alignItems:'center',
              padding:5
            }}
          >
            <TextInput
              value={InputPass}
              onChangeText={setInputPass}
              showSoftInputOnFocus
              secureTextEntry={IconPass}
              placeholder="Contraseña"
              placeholderTextColor={"#adb5bd"}
              style={{ fontSize: 16,width:'90%' }}
            />
            <TouchableOpacity onPress={()=>setIconPass(!IconPass)}>
              <BtnIconPass />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.navigate("/Screens/AScreenHome")}
          style={{ padding: 12, backgroundColor: "#0F539C", borderRadius: 10 }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            Iniciar sesion
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar barStyle={'dark-content'}/>
    </SafeAreaProvider>
  );
}
