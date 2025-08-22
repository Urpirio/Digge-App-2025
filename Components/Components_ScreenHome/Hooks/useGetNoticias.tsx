import { useState } from "react";
// import xml2js from "react-native-xml2js";

export const useGetNoticias = () => {
  //   const [DataActualidad,setDataActualidad] = useState<
  //     Array<{
  //       titulo: string | undefined;
  //       image: string | undefined;
  //       descripcion: string | undefined;
  //     }>
  //   >();
  const GetNoticias = () => {
    // try {
    //   const respuesta = await fetch(
    //     "https://www.diariolibre.com/rss/actualidad.xml"
    //   );
    //   const data = await respuesta.text();
    //   const parser = new DOMParser();
    //   const dt_xml = parser.parseFromString(data, "application/xml");
    //   const items = dt_xml.querySelectorAll("item");

    //   const DataActualidad: any = [];
    //   items.forEach((items) => {
    //     const titulo = items.querySelector("title")?.textContent;
    //     const image = items.querySelector("media:content")?.textContent;
    //     const descripcion = items.querySelector("description")?.textContent;

    //     DataActualidad?.push({
    //       titulo: titulo,
    //       image: image,
    //       descripcion: descripcion,
    //     });

    //     console.log(DataActualidad);
    //   });
    // } catch (err) {
    //     console.log(err)
    // }

    fetch("https://www.diariolibre.com/rss/actualidad.xml", {
      headers: { "Content-Type": "application/xml" },
    })
      .then((Data) => Data.text())
      .then((xmlText) => {
        console.log(xmlText);
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        console.log(xmlDoc);
      });
  };

  return {
    GetNoticias,
  };
};
