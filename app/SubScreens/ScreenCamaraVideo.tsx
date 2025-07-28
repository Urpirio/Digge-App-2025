import { SafeAreaProvider } from "react-native-safe-area-context";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useRef } from "react";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import { useState } from "react";
import { useVideoPlayer, VideoView } from "expo-video";

export default function ScreenCamaraVideo() {
  const [permiso, pedirPermiso] = useCameraPermissions();
  const camara = useRef<CameraView>(null);
  const [IsRecording, setIsRecording] = useState<boolean>(false);
  const [SaveVideo, setSaveVideo] = useState<any>();

  const GrabarVideo = async () => {
    if (IsRecording) {
      camara.current?.stopRecording();
      setIsRecording(false);
    } else if (!IsRecording) {
      const video = camara.current?.recordAsync();
      setIsRecording(true);
      setSaveVideo(video);
    }
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
          onPress={() => GrabarVideo()}
          style={{
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            backgroundColor: "#f8f9fa90",
          }}
        >
          {IsRecording ? (
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                backgroundColor: "red",
              }}
            ></View>
          ) : (
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 50,
                backgroundColor: "white",
              }}
            ></View>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}
