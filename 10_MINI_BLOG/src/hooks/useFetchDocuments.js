import { db } from "../firebase/config"
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore"
import { useState, useEffect } from "react"

export default useFechDocuments => (docCollection, serch=null, uid=null) => {

    const [documents, setDocuments] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

    //deal with memory leak
    const[cancelled, setCancelled] = useState(false)    

    useEffect(() => {
        async function loadData() {
            if (cancelled) {
              return;
            }
      
            setLoading(true);
      
            const collectionRef = await collection(db, docCollection);
      
            try {
              let q;
      
              if (search) {
                q = await query(
                  collectionRef,
                  where("tags", "array-contains", search),
                  orderBy("createdAt", "desc")
                );
              } else if (uid) {
                q = await query(
                  collectionRef,
                  where("uid", "==", uid),
                  orderBy("createdAt", "desc")
                );
              } else {
                q = await query(collectionRef, orderBy("createdAt", "desc"));
              }
      
              await onSnapshot(q, (querySnapshot) => {
                setDocuments(
                  querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                  }))
                );
              });
            } catch (error) {
              console.log(error);
              setError(error.message);
            }
      
            setLoading(false);
          }
        loadData();
    }, [docCollection, serch, uid, cancelled])

    console.log(documents);
    
    //deal with memory leak
    useEffect(() => {
        return () => setCancelled(true)
    },[])

    return { documents, loading, error };
}