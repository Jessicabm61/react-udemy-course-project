import { createContext, useReducer } from "react";

// Cria o contexto
export const TitleColorContext = createContext()

export const TitleColorReducer = (state, action) => {
    switch(action.type) {
        case "RED":
            return {...state, color:"red"}
        case "BLUE":
            return {...state, color:"blue"}
        default:
            return {...state}
    }
    }

//Cria o provider
export const TitleColorContextProvider = ({children}) => {
    //Criando o state com useReducer
    const [state, dispatch] = useReducer(TitleColorReducer, {color : "purple"})


    console.log(state)

    return(
        <TitleColorContext.Provider value={{...state, dispatch}}>
        {children}
        </TitleColorContext.Provider>
    )

}