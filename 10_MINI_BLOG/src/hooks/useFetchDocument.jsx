import { db } from "../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import { useState, useEffect } from "react"

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //deal with memory leak
    const[cancelled, setCancelled] = useState(false)    

    useEffect(() => {

        const loadDocument = async () => {
           
            setLoading(true);
      
            try {
                const docRef = await doc(db, docCollection, id);
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())
            } catch (error) {
                console.log(error)
                setError(error.message)
            }

            setLoading(false);
        }
        loadDocument();
    }, [docCollection, id])
    
    return { document, loading, error };
}

