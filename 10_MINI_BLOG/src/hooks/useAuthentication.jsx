import { db } from '../firebase/config'

//Hook useAuthentication
import {getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
updateProfile,
signOut} from 'firebase/auth'

import {useState, useEffect} from 'react'


export const useAuthentication = () => {

    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    //cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth() // Cria uma autenticação para usar no método que cria o usuário createUser
    
    //cleanup
    const checkIfsCancelled = () => {
        if (cancelled) {
            return
        }
    }

    const createUser = async (data) => {
        
            checkIfsCancelled() // Chama funcão que checa se está cancelado, se sim a função da um return

            setLoading(true) //Enquanto está criando o usuário o useState de Loading fica como true
            setError(null)
            try {

                //cria um objeto chamado user, utilizando um método do firebase, e passa alguns parâmetros para esse método
                //No firebase foi configurado que o método de autenticação é e-mail e senha
                const { user } = await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                  );
           
            //utiliza um método do firebase para atualizar o nome do usuário, do usuário criado anteriormente
            await updateProfile (user, {
                displayName: data.displayName,
            })
            setLoading(false) //Ao final da função seta o carregamento de Loading
            return user;
            } catch (error) {
                console.log(error.message) //Retorna a mensagem de erro
                console.log(typeof error.message) //Retorna o tipo do erro exemplo, se for string vai retornar "String"
            
            let systemErrorMessage

            if (error.message.includes('password')) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
            } else if (error.message.includes("auth/email-already-in-use")) {
                systemErrorMessage = "E-mail já cadastrado."
            } else if (error.message.includes("auth/invalid-email")) {
                systemErrorMessage = "E-mail inválido, digite outro e-mail"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente mais tarde."
            }
            
            setLoading(false) //Ao final da função seta o carregamento de Loading
            setError(systemErrorMessage)
            }
    }

    return{
        auth,
        createUser,
        error,
        loading,
    }
}