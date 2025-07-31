import { useState } from "react";
import { Data_Reportes } from "@/Components/Components_MapNavegacion/Data/Data_Reportes";

export const useReportes = () => {
  const [StatusNav, setStatusNav] = useState<string | null>('Reportes');
  const [DataPoints, setDataPoints] = useState<any | null>(Data_Reportes);

  const CategoriaMarker = (S: { Status: string }) => {
    switch (S.Status) {
      case "ReporteN":
        return require("../../../Assets/icon/Frame 425.png");
      case "ReporteB":
        return require("../../../Assets/icon/Frame 427.png");
      case "ReporteC":
        return require("../../../Assets/icon/Frame 425.png");
    }
  };

  const ButtonNavegacion = () =>{
    switch(StatusNav){
        case 'Reportes':
            setDataPoints(Data_Reportes)
            break;
        case 'Navegar':
            setDataPoints([])
            break;
    }
  };

  return {
    CategoriaMarker,
    StatusNav,
    setStatusNav,
    DataPoints,
    ButtonNavegacion
  };
};
