import { createContext, useState } from "react"

//1. el componente Context es el que nos permite acceder a la info de contexto de cualquier componente de mi aplicación
const ThemeContext = createContext()

//2. el componente envoltorio que tendrá todos los contextos a pasar (estados, funciones, variables, etc) que quiero compartir con toda mi aplicación
function ThemeWrapper(props) {

  const [ isDarkTheme, setIsDarkTheme ] = useState(false)

  const handleToggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }


  // aqui toda la data que quiero compartir
  const passedContext = {
    isDarkTheme,
    handleToggleTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeContext,
  ThemeWrapper
}