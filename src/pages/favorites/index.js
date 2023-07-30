import { useState, useEffect} from'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { FoodList} from '../../components/foodlist'

import { getFavorites } from '../../utils/storage'

export function Favorites(){
    const [receipes, setReceipes ] = useState ([]);
    const isFocused = useIsFocused();
    
    useEffect(() => {

        let isActive = true;

        async function getReceipes(){
            const result = await getFavorites("@appreceitas");
            if(isActive){
                setReceipes(result);
            }
        }
            if(isActive){
                getReceipes();
            }
            return() =>{
                isActive = false;
            }
    },[isFocused])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> RECEITAS FAVORITAS </Text>

            {receipes.length === 0 && (
                <Text>Você ainda não tem nenhuma receita Salva.</Text>
            )}

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <FoodList data={item}/> }
            />
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    
    container:{
        flex:1,
         backgroundColor:"#F3F9FF",
         paddingTop: 36,
         paddingStart:14,
         paddingEnd:14
     }, 
     title:{
         fontSize: 24,
         fontWeight: 'bold',
         color:'#0e0e0e'
     },
     form:{
         backgroundColor:'#FFF',
         width:'100%', 
         borderRadius: 8,
         marginTop: 16,
         marginBottom: 16,
         borderWidth: 1,
         borderColor: '#ECECEC',
         paddingLeft: 8,
         paddingRight: 8,
         flexDirection: "row",
         alignItems: 'center',
         justifyContent: 'space-between'
 
     }

})