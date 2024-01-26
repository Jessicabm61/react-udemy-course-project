import {useState, useEffect} from 'react'

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 -- refatorando post
    const[config, setConfig] = useState(null)
    const[method, setMethod] = useState(null)
    const[callFetch, setCallFetch] = useState(false)

    // 6 - Loading
    const[loading, setLoading] = useState(false)

    //7 - Considernado erro ao conectar ao banco
    const[error, setError] = useState(null)

    //10 - Desafio implementando delete
    const[id, setId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            
            setMethod("POST")// Para chamar o useEffect que refatora o POST
        }else if (method === "DELETE") {
            setConfig({
                method : "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            setMethod("DELETE")
            setId(data)
        }
    }

    // Refatora o DATA
    useEffect(() => {

        const fetchData = async () => {

            // 6 - Loading
            setLoading(true)           
            
            try {
                const res = await fetch(url)
                
                const json = await res.json()
                
                setData(json)
        
                setMethod(null)

                // 8 - tratando erros
                setError(null)


            }catch (error) {
                console.log(error.message);

                setError("Houve um erro ao carregar os dados!");
            }
            // 6 - Loading
            setLoading(false)
        }
        fetchData()

    },[url, callFetch])

    // 5 - Refatorando POST ou DELETE

    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()
                setCallFetch(json)
            } else if (method === 'DELETE') {
                const urlDelete = url + "/" + id
                let fetchOptions = [urlDelete, config]

                const res = await fetch (...fetchOptions)

                const json = await res.json() // Variável com o arquivo json atualizado
                setCallFetch(json) // Muda esse estado sempre que o json for atualizado
            }
        }
        httpRequest();
    },[config, method, url])
    return{ data, httpConfig, loading, error }
}

