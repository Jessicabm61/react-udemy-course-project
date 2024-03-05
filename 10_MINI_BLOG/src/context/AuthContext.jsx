// Importando o hook useContext e a função createContext do React
import { useContext, createContext } from 'react'

// Criando um novo contexto chamado AuthContext usando a função createContext()
export const AuthContext = createContext()

// Criando um componente Provider chamado AuthContextProvider
// Este componente irá envolver os componentes filhos e fornecerá o contexto AuthContext para eles
// Ele recebe children (os componentes filhos) e um valor (o valor a ser passado para o contexto)
export function AuthProvider ({ children, value }) {
    // Retorna o Provider do contexto AuthContext com o valor especificado
    // Os componentes filhos são renderizados dentro deste Provider
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )    
}

// Criando um hook personalizado chamado useAuthValue
// Este hook permite acessar o valor do contexto AuthContext em qualquer componente
export function useAuthValue() {
    // Usa o hook useContext para acessar o valor do contexto AuthContext
    // Retorna o valor do contexto para uso em outros componentes
    return useContext(AuthContext)
}
