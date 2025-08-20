import { useState } from "react";

export const useFormulario = () => {
  const [PickerHoraValue, setPickerHoraValue] = useState<string | undefined>();
  const [Estado_MostrarPickerHora, setEstado_MostrarPickerHora] =
    useState<boolean>(false);

  const [PickerFechaValue, setPickerFechaValue] = useState<
    string | undefined
  >();
  const [Estado_MostrarPicker, setEstado_MostrarPicker] =
    useState<boolean>(false);

  const [PickerValue,setPickerValue] =  useState<string | undefined>();

  const [AutoEncontrado,setAutoEncontrado] = useState<boolean>(false);

  return {
    PickerHoraValue,
    setPickerHoraValue,
    Estado_MostrarPickerHora,
    setEstado_MostrarPickerHora,
    PickerFechaValue,
    setPickerFechaValue,
    Estado_MostrarPicker,
    setEstado_MostrarPicker,
    PickerValue,
    setPickerValue,
    AutoEncontrado,
    setAutoEncontrado,
  };
};
