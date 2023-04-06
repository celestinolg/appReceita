import {useLayoutEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import {View, Text, StyleSheet, Pressable} from 'react-native'
import { Entypo} from '@expo/vector-icons';


export default function Detail(){
    const route = useRoute(); 
    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () =>(
                <Pressable onPress={()=> console.log("dddddd")}>
                    <Entypo 
                        name='heart'
                        size={28}
                        color={"#ff4141"}
                    
                    />
                </Pressable>
            )
        })
    },[navigation, route.params?.data])
    return(
        <View style={style.container}>
            <Text>
                Página detalhe
            </Text>
        </View>
    )
} 

const style = StyleSheet.create({
    container:{
        backgroundColor:"red"
    }
});