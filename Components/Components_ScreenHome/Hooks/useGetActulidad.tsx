import { useState } from "react";
import { useGetNoticias } from "./useGetNoticias";

export const useGetActualidad = () =>{

    const {GetNoticias}= useGetNoticias();


    return{
        GetNoticias
    }
}