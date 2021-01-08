import {View, Text, StyleSheet, ScrollView, Image} from "react-native";
import React from 'react';
import {Button} from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest(){
    const navigation  = useNavigation();
    return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image 
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
            <Text style={styles.description}>
                Como describirás tu mejor restayrante. Busca y visualiza los mejores restaurantes.
                Vota cual te ha gustado mas
            </Text>
            <View style={styles.viewBtn}>
                <Button buttonStyle={styles.btnStyle} containerStyle={styles.btnContainer} title="Ver tu perfil" onPress={()=>{
                    navigation.navigate("login")
                }} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginLeft:30,
        marginRight:30,
    },
    image:{
        height:300,
        width: "100%",
        marginBottom:40
    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom:10,
        textAlign:"center"
    },
    description:{
        textAlign:"center",
        marginBottom:10

    },
    btnStyle:{
        backgroundColor:"#00a680"
    },
    btnContainer:{
        width:"70%"
    },
    viewBtn:{
        flex:1,
        alignItems:"center"
    }
});