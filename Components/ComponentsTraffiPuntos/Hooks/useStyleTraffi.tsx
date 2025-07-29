import { useState } from "react";

export const useStyleTraffi = () => {

    const [Panel,setPanel] = useState<boolean | null>(false);
    

  return {Panel,setPanel};
};
