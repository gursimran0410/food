import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default ()=>{
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm)=>{
        try{
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch(err){
            setErrorMessage('Something went wrong')
        }
    }

    //Call search API when component is first rendered. BAD CODE!
    //Bad Method as it will run the entire useState infinite Times 
    //searchApi('pasta')
    useEffect(()=>{
        searchApi('pasta')
    }, [])

    return[searchApi,results,errorMessage]
}