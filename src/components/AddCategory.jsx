import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {  // Se desestructura la prop
    
    const [inputValue, setInputValue] = useState('')

    const onChangeFunction = (event) =>{    // Esta funcion se encarga de ir actualizando el valor de lo escrito en el input
        setInputValue(event.target.value)       // Toma el valor de input cuando cambia su valor y actualiza el estado
    } 

    const onSubmitFunction = (event) => {       // Esta funcion se encarga de devolver la categoria escrita
        event.preventDefault()                      // Previene el comportamiento por defecto
        if(inputValue.trim().length < 1) return     // Corrobora que no este vacio
        onNewCategory(inputValue)                   // Toma la prop onNewCategory y le pasa la categoria a la f onAddCategory
        setInputValue('')                           // Limpia el inputValue para introducir una nueva categoria
    }


  return (
    <form onSubmit={onSubmitFunction}>
        <input 
            type='text'
            value={inputValue}
            placeholder='Introduce la categoria'
            onChange={onChangeFunction} 
        />
    </form>
  )
}
