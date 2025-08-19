import { useState,useEffect } from "react";

export const useSubReporte = () => {
  const [Status_S, setStatus_S] = useState<{
    S1: boolean;
    S2: boolean;
    S3: boolean;
    S4: boolean;
    S5: boolean;
  }>({
    S1: false,
    S2: false,
    S3: false,
    S4: false,
    S5: false,
  });

  const [StatusConducto, setStatusConducto] = useState<{
    opinion: string;
    color: string;
  }>();

  const [LevelStar, setLevelStar] = useState<number>(1);

  useEffect(() => {
    switch (LevelStar) {
      case 1:
        setStatusConducto({
          opinion: "Horrible",
          color: "red",
        });
        break;
      case 2:
        setStatusConducto({
          opinion: "Horrible",
          color: "red",
        });
        break;
      case 3:
        setStatusConducto({
          opinion: "Regular",
          color: "#0F539C",
        });
        break;
      case 4:
        setStatusConducto({
          opinion: "Buena",
          color: "#FF9700",
        });
        break;
      case 5:
        setStatusConducto({
          opinion: "Exelente",
          color: "#4BB04D",
        });
        break;
    }
  }, [Status_S, LevelStar]);
  return {
    setStatus_S,
    LevelStar,
    setLevelStar,
    StatusConducto,
    Status_S,
  };
};
