import { useGetUserGlobal } from "@/Components/Components_Globales/hooks/useGetUserGlobal";

export const useGetHome = () => {
  const { Datauser, GetDataUser } = useGetUserGlobal();

  return {
    GetDataUser,
    Datauser,
  };
};
