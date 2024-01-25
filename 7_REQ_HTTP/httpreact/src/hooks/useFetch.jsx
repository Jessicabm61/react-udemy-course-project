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

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        setMethod(method)
        }
    }

    // Refatora o DATA
    useEffect(() => {

        const fetchData = async () => {

            // 6 - Loading
            setLoading(true)

            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        
            // 6 - Loading
            setLoading(false)

        }
        fetchData()

    },[url, callFetch])

    // 5 - Refatorando POST

    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest();
    },[config, method, url])
    return{ data, httpConfig, loading }
}

