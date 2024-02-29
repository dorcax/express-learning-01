import { useState ,useEffect} from "react"
import axios from "axios"
const UseFetch =(url)=>{
    const[data,setData] =useState(null)
    const[loading,setLoading]=useState(false)
    const [error,setError]=useState(null)


useEffect(()=>{
   const fetch =async()=>{
    try {
        const result =await axios.get(url,{
            withCredentials:true
        })
         setData(result)
    } catch (error) {
        console.log(error.message)
        setError(error.message)
    }
   }
   fetch()
},[url])
    return {data,loading,error}
}


export default UseFetch
