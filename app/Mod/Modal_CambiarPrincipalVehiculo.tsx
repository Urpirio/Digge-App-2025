import { SafeAreaProvider } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useGetCarRetenidos } from "@/Components/Compenents_VehiculosRetenidos/Hooks/useGetCarRetenidos";
import { useGetUpdatePrincipalCar } from "@/Components/Components_Vehiculos/hooks/useGetUpdatePrincipalCar";
import { ActivityIndicator } from "react-native";

export default function ConfirmarCambioVehiculo() {
  const router = useRouter();
  const DataLocal = useLocalSearchParams();

  const { Get_DataUserCars, cargando } = useGetUpdatePrincipalCar();

  return (
    <SafeAreaProvider style={{ justifyContent: "flex-end" }}>
      <BlurView
        style={{ height: "100%", width: "100%" }}
        intensity={100}
        tint="dark"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            height: "100%",
            width: "100%",
          }}
        ></TouchableOpacity>
      </BlurView>

      <View
        style={{
          borderWidth: 1,
          width: "100%",
          height: "35%",
          borderRadius: 30,
          backgroundColor: "white",
          position: "absolute",
          borderColor: "#adb5bd",
          padding: 20,
          gap: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>
          ¿Estás seguro de cambiar este vehículo como principal?
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "300",
            textAlign: "center",
            color: "#6c757d",
          }}
        >
          Este será el vehículo que aparecerá por defecto en tus reportes y
          gestiones.
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 25,
              borderRadius: 15,
              backgroundColor: "#adb5bd6a",
              width: "45%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#0F539C" }}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Get_DataUserCars({ matricula: DataLocal?.matricula });
            }}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 25,
              borderRadius: 15,
              backgroundColor: "#0F539C",
              width: "45%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cargando ? (
              <ActivityIndicator size={"small"}  color={"white"}/>
            ) : (
              <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
                Confirmar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
