import React, {useState, useEffect } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../Components/SearchBar'
import yelp from '../api/yelp'
const SearchScreen = ()=> {
    const [term, setTerm] = useState('')
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
    
    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={()=>searchApi(term)}    
            />
            {errorMessage?<Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen