import {View, Text, StyleSheet} from 'react-native'


export default function Detail(){
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