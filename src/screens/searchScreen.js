import React, {useState, useEffect } from 'react'
import {View,Text,StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../Components/ResultsList'
const SearchScreen = ()=> {
    const [term, setTerm] = useState('')
    const [searchApi,results,errorMessage] = useResults()

    //helper function
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    return(
        <View style={{flex:1}}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={()=>searchApi(term)}    
            />
            {errorMessage?<Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList 
                title="Cost Effective" 
                results={filterResultsByPrice('$')}
            />
            <ResultsList 
                title="Bit Pricier" 
                results={filterResultsByPrice('$$')}
            />
            <ResultsList 
                title="Big Spender" 
                results={filterResultsByPrice('$$$')}
            />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen