import { useGetReporte } from "./useGetReportes";

export const useNavegacion = () => {

  const { GetReportes,Data_Reportes } = useGetReporte();

  return {
    GetReportes,
    Data_Reportes,
  };
};
