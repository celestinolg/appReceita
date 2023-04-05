
import {useState} from 'react';
import {Text, StyleSheet, SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native'
import { Logo } from '../../component/logo';
import {Ionicons} from '@expo/vector-icons';


export default function Home(){
    const [search,setSearch] = useState("");

    function handleSearch(){
        console.log(search);
    }

    return(
        <SafeAreaView style={styles.container}>
            
            <Logo />
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>que combina com você</Text>
            
            <View style={styles.form}>
                <TextInput
                    placeholder='Digite o nome da comida'
                    style={styles.input}
                    value = {search}
                    onChangeText = {(value)=>{setSearch(value)}}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color={"#46BD6A"} />
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#F3F9FF",
        flex: 1,
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title:{
        fontSize: 28,
        fontWeight: "bold",
        color: "#0e0e0e"
    },
    form:{
        width: "100%",
        backgroundColor: "#fff",
        alignContent: "space-between",
        alignItems: "center",
        borderRadius: 8, 
        marginVertical: 16,
        borderWidth: 1,
        borderColor:"#ececec",
        paddingHorizontal: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"

    },
    input:{
        width: "90%",
        height: 54,
        maxWidth: "90%"
    }
});