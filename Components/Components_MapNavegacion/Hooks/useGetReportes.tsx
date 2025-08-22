import { useState } from "react";

 export interface ObjectReportes {
  cedula: string;
  tipo_dn: string;
  ubicacion: {
    lg: number;
    long: number;
  };
  descripcion: string;
  estado_reporte: string;
}

export const useGetReporte = () => {
  const [Data_Reportes, setData_Reportes] = useState<Array<ObjectReportes>>();

  const GetReportes = () => {
    fetch(`https://bk-digget-app.vercel.app/api/data_reportes`)
      .then((respuesta) => respuesta.json())
      .then((Data) => {
        setData_Reportes(Data);
      })
      .finally(() => {});
  };

  return {
    GetReportes,
    Data_Reportes,
  };
};
