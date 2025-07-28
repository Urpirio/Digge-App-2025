import { SafeAreaProvider } from "react-native-safe-area-context";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar,Image } from "react-native";
import { useState } from "react";

export default function ScreenCamaraFotos() {

  const [permiso, pedirPermiso] = useCameraPermissions();
  useFocusEffect(useCallback(() => {}, []));
  const camara = useRef<CameraView>(null);
  const [ImageTrirada,setImageTrirada] = useState<any | null>(null);


  const TomarFoto = async () =>{
    const Photo = await camara.current?.takePictureAsync();
    setImageTrirada(Photo?.uri);
  };

 if (!permiso?.granted) {
    return (
      <SafeAreaProvider
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ gap: 20 }}>
          <Text
            style={{ fontSize: 18, fontWeight: "300", textAlign: "center" }}
          >
            Se necesita permiso a la camra para continuar
          </Text>
          <View style={{ gap: 10 }}>
            <TouchableOpacity
              onPress={pedirPermiso}
              style={{
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: "#0F539C",
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>
                Conceder Permiso
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: "#adb5bd",
              }}
            >
              <Text style={{ fontSize: 14, color: "white" }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar barStyle={"dark-content"} />
      </SafeAreaProvider>
    );
  };

  if(ImageTrirada){
    return <SafeAreaProvider>
      <Image style={{height:'100%',width:'100%'}} source={{uri: ImageTrirada }}/>
    </SafeAreaProvider>
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <CameraView
        ref={camara}
        responsiveOrientationWhenOrientationLocked
        style={{ flex: 1, width: "100%" }}
      />

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => TomarFoto()}
          style={{
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: "#f8f9fa90",
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              backgroundColor: "white",
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
