import { useState } from "react";
import { useSubReporte } from "./useSubReporte";

export const useReportes = () => {
  const { StatusConducto, setLevelStar, setStatus_S, LevelStar, Status_S } =
    useSubReporte();

  const [Status_EnvioEva, setStatus_EnvioEva] = useState<boolean>(false);
  return {
    StatusConducto,
    setLevelStar,
    setStatus_S,
    Status_S,
    Status_EnvioEva,
    setStatus_EnvioEva,
  };
};
