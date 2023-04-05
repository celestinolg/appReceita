import {View, Text, StyleSheet} from 'react-native'


export default function Search(){
    return(
        <View style={style.container}>
            <Text>
                Página busca
            </Text>
        </View>
    )
} 

const style = StyleSheet.create({
    container:{
        backgroundColor:"green"
    }
});