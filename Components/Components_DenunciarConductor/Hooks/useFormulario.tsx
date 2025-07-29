import { useState } from "react";

export const useFormulario = () => {
    const [InputPlaca,setInputPlaca] = useState<any | null>(null);
    const [InputColor,setInputColor] = useState<any | null>();
    const [InputDescripcion,setInputDescripcion] = useState<any | null>();
    const [DropDownVehiculos,setDropDownVehiculos] = useState<string | null>();
    const [DropDownInfraccion,setDropDownInfraccion] = useState<string | null>()

  return {
    InputColor,
    setInputColor,
    setInputPlaca,
    InputPlaca,
    InputDescripcion,
    setInputDescripcion,
    DropDownInfraccion,
    DropDownVehiculos,
    setDropDownInfraccion,
    setDropDownVehiculos,
  };
};
