import { View, Text, StyleSheet } from 'react-native';

export function Logo(){
    return(
    <View style={style.logo}>
        <Text style={style.title}>
            Receita Fácil
        </Text>
    </View>);
}

const style = StyleSheet.create({
    logo:{
        backgroundColor: "#4CBE6C",
        alignSelf: "flex-start",
        padding: 8,
        paddingHorizontal: 16,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff"
    }
});