import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'
const SearchBar = ({term,onTermChange,onTermSubmit})=> {
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                placeholder="Search"
                style={styles.inputStyle}
                onEndEditing={()=> onTermSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e6dcdc',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar