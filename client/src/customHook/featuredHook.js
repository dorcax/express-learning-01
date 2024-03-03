import { useState ,useEffect} from "react"
import axios from "axios"
const UseFetch =(url)=>{

    const [comment,setComment] =useState("")
    const[message,setMessage] =useState(null)
    const[loading,setLoading]=useState(false)
    const [error,setError]=useState(null)


useEffect(()=>{
   const fetch =async()=>{
    try {
        const res =await axios.post(url,{
            withCredentials:true
        },
        {
            comment:comment
        }
        )
         setMessage(result.data)
         setComment("")
    } catch (error) {
        console.log(error.message)
        setError(error.message)
    }
   }
   fetch()
},[url])
    return {message,comment,loading,error}
}


export default UseFetch
