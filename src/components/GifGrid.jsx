import { GifItem } from './GifItem.jsx'
import { useFetchGifs } from '../hooks/useFetchGifs.jsx'
import './isLoading.css'


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)  // Se recupera la informacion de la categoria (los 10 gifs con su data)
                                                        // y si esta o no cargando
    return (
            <>
                <h3>{category}</h3>
                {isLoading && (
                    <div className="preloader">
                            <i className="loader --1"></i>
                    </div>
                )}

                <div className='card-grid'>
                    {
                        images.map((image) => (
                            <GifItem key={image.id} {...image} />
                        ))
                    }
                </div>
                
                <span className='barrita-end'></span>
            </> 
    )
} 
