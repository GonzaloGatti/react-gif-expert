import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GiffExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = ( newCategory ) => {
        if (categories.includes(newCategory)) return  // Si la categoria ya existe no hace nada, no la añade
        setCategories([newCategory, ...categories])   // Sino la añade al arreglo del useState junto con las anteriores
    }

  return (
    <> 
      
      <h1>Gif Expert App</h1>

    
      <AddCategory 
        onNewCategory={onAddCategory}   // Obtiene y envia la categoria escrita a la funcion onAddCategory
      />


      {
      categories.map((category) => (      
          <GifGrid                     // Renderiza y muestra las categorias
            key={category} 
            category={category}
          />
        ))
      }            
    </>
  )
}
