import Section_header from "@/Components/Components_Vehiculos/Components/Section_header";
import Section_Principal from "@/Components/Components_Vehiculos/Components/Section_Principal";
import Section_TusCarros from "@/Components/Components_Vehiculos/Components/Section_TusCarros";
import { useGetVehiculos } from "@/Components/Components_Vehiculos/hooks/useGetVehiculos";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ScreenVehiculos() {
  const {
    Data_userCar,
    Datauser,
    GetDataUser,
    Get_DataUserCars,
    ContarCars,
    DataCar_Principanl,
  } = useGetVehiculos();

  useFocusEffect(
    useCallback(() => {
      GetDataUser();
      Get_DataUserCars();
    }, [])
  );

  return (
    <SafeAreaProvider style={{ backgroundColor: "white" }}>
      <Section_header
        foto_perfil={Datauser?.foto_perfil}
        nombres={Datauser?.nombres}
        apellidos={Datauser?.apellidos}
      />
      <Section_Principal NumeroCars={ContarCars} Data={DataCar_Principanl} />
      <Section_TusCarros Data_cars={Data_userCar} />
    </SafeAreaProvider>
  );
}
