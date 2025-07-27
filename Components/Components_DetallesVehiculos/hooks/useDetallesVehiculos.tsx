import { useState } from "react";
import { Data_CardMatriculasCarros } from "@/Components/Components_Vehiculos/Data/Data_CardMatriculasCarros";

export const useDetallesVehiculos = () => {
  const [DetallesCarro, setDetallesCarro] = useState<any>();

  const ConseguirDetalles = (Dt: { Matricula: any }) => {
    const Carro = Data_CardMatriculasCarros.filter(
      (D) => D.Matricula === Dt.Matricula
    );
    setDetallesCarro(Carro);
  };
  
  return {
    ConseguirDetalles,
    DetallesCarro,
  };
};
