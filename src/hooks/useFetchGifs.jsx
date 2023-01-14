import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () =>{
        const gifs = await getGifs(category)
        setImages(gifs)
        setIsLoading(false)
    }


    useEffect(()=>{
        getImages()   // Al usar el useEffect con las dependencias vacias, la funcion se ejecutará
    }, [ ])           // solo la primera vez que se renderice el componente

  return {
    images,
    isLoading
  }
}
