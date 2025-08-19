import { Dispatch, SetStateAction } from "react";

export const useBtnStar = () => {
  const start_opinion = (Tools: {
    setStatus_S: Dispatch<
      SetStateAction<{
        S1: boolean;
        S2: boolean;
        S3: boolean;
        S4: boolean;
        S5: boolean;
      }>
    >;
    setLevelStar: Dispatch<SetStateAction<number>>;
    LevelStart: number;
  }) => {
    const { setStatus_S, setLevelStar, LevelStart } = Tools;
    if (LevelStart === 1) {
      setStatus_S({
        S1: true,
        S2: false,
        S3: false,
        S4: false,
        S5: false,
      });
      setLevelStar(LevelStart);
    } else if (LevelStart === 2) {
      setStatus_S({
        S1: true,
        S2: true,
        S3: false,
        S4: false,
        S5: false,
      });
      setLevelStar(LevelStart);
    } else if (LevelStart === 3) {
      setStatus_S({
        S1: true,
        S2: true,
        S3: true,
        S4: false,
        S5: false,
      });
      setLevelStar(LevelStart);
    } else if (LevelStart === 4) {
      setStatus_S({
        S1: true,
        S2: true,
        S3: true,
        S4: true,
        S5: false,
      });
      setLevelStar(LevelStart);
    } else if (LevelStart === 5) {
      setStatus_S({
        S1: true,
        S2: true,
        S3: true,
        S4: true,
        S5: true,
      });
      setLevelStar(LevelStart);
    }
  };

  return {
    start_opinion,
  };
};
