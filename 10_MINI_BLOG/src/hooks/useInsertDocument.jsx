
import { useEffect, useReducer, useState } from "react";
import { db } from "../firebase/config"
import { collection, addDoc, Timestamp } from "firebase/firestore" // Importa funções específicas do Firebase Firestore

const initialState  = {
    loading: null, // Estado inicial de carregamento
    error: null // Estado inicial de erro
}

// Função reducer para gerenciar o estado do processo de inserção
const insertReducer = (state, action) => {
    switch(action.type) {
        case "LOADING":
            return {loading: true, error: null} // Ativa o estado de carregamento
            console.log("Passou aqui")
        case "INSERTED_DOC":
            return {loading: false, error: null} // Indica que o documento foi inserido com sucesso
        case "ERROR":
            return {loading: false, error: action.payload} // Indica um erro ocorrido durante a inserção
        default:
            return state
    }
}



// Hook personalizado para inserir documentos no Firestore
export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState) // Usa o reducer para gerenciar o estado
   
    // Lidar com vazamento de memória
   const [cancelled, setCancelled] = useState(false) // Estado para rastrear se a operação foi cancelada

     // Função para verificar se a operação foi cancelada antes de despachar uma ação

   const checkCancelBeforeDispatch = (action) => {
    if (cancelled) {
      dispatch(action);
    }
  };

   // Função para inserir um documento no Firestore
   const insertDocument = async (document) => {

    checkCancelBeforeDispatch({ type: "LOADING"})

        console.log(response)
        try {
            const newDocument = { ...document, createdAt: Timestamp.now() } // Adiciona um campo de data e hora ao documento

            const insertedDocument = await addDoc(
                collection(db, docCollection), newDocument // Adiciona o documento à coleção no Firestore
            )

            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertedDocument // Dispara a ação indicando que o documento foi inserido com sucesso
            })

        } catch (error) {
            checkCancelBeforeDispatch({
                type: "ERROR",
                payload: error.message // Dispara a ação indicando que ocorreu um erro durante a inserção
            })
        }
    }

   // Efeito para lidar com o cancelamento
   useEffect(() => {
    return () => setCancelled(true) // Quando o componente é desmontado, cancela a operação
   }, [])

   // Retorna a função de inserção e o estado atual da operação
   return { insertDocument, response }
}
