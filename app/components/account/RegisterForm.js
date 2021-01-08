import React, {useState} from "react";
import {View, StyleSheet} from "react-native";
import {Input, Icon, Button} from "react-native-elements";
import {validateEmail} from "../../utils/validation";
import {size, isEmpty} from "lodash";
import * as firebase from "firebase";
import {useNavigation} from "@react-navigation/native";
import Loading from "../Loading";

export default function RegisterForm(props){
    const {toastRef} =props;
    const [showPassword, setShowPassword] = useState(false);
    const [showRepPassword, setShowRepPassword] = useState(false);
    const [formData, setformData] = useState(defaultFormValue());
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const onSubmit = ()=>{
        if(isEmpty(formData.email) || isEmpty(formData.password) || isEmpty(formData.repeatPassword)){
            //console.log("Todos los campos son obligarotios")
            toastRef.current.show("Todos los campos son obligatorios");
        }else if(!validateEmail(formData.email)){
            //console.log("Email no es correcto");
            toastRef.current.show("Email no es correcto");
        }else if(formData.password!==formData.repeatPassword){
            //console.log("Las contraseñas deben ser iguales");
            toastRef.current.show("Las contraseñas deben ser iguales");
        }else if(size(formData.password)<6){
            //console.log("Las contraseñas deben tener mínimo 6 caracteres");
            toastRef.current.show("Las contraseñas deben tener mínimo 6 caracteres");
        }
        else{
            setLoading(true);
            firebase.auth().createUserWithEmailAndPassword(formData.email,formData.password)
            .then(response=>{
                setLoading(false);
                navigation.navigate("account");
            }).catch(()=>{
                toastRef.current.show("El email ya esta en uso, pruebe con otro");
                setLoading(false);
            })
        }
    };
    
    const onChange = (e, type) =>{
        setformData({...formData,[type]:e.nativeEvent.text})
    };

    return(
        <View style={styles.formContainer}>
            <Input 
                placeholder="Correo electronico"
                containerStyle={styles.inputForm}
                rightIcon={<Icon type="material-community" name="at" iconStyle={styles.iconRight} />}
                onChange={(e)=>onChange(e, "email")}
            />
            <Input 
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                secureTextEntry={showPassword ? false : true}
                password={true}
                onChange={(e)=>onChange(e, "password")}
                rightIcon={<Icon type="material-community" name={showPassword ? "eye-off-outline":"eye-outline"} iconStyle={styles.iconRight} onPress={()=>{
                    setShowPassword(!showPassword)
                }} />}
            />

            <Input 
                placeholder="Repetir contraseña"
                containerStyle={styles.inputForm}
                secureTextEntry={showRepPassword ? false : true}
                password={true}
                onChange={(e)=>onChange(e, "repeatPassword")}
                rightIcon={<Icon type="material-community" name={showRepPassword ? "eye-off-outline":"eye-outline"} iconStyle={styles.iconRight} onPress={()=>{
                    setShowRepPassword(!showRepPassword)
                }} />}
            />

            <Button
            title="Unirse"
            containerStyle={styles.btnContainerRegister} 
            buttonStyle={styles.btnRegister}
            onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Creando cuenta" />
        </View>
    )
}

function defaultFormValue(){
    return{
        email:"",
        password:"",
        repeatPassword:""
    }
}

const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    inputForm:{
        width:"100%",
        marginTop:20
    },
    btnContainerRegister:{
        width:"95%",
        marginTop:20
    },
    btnRegister:{
        backgroundColor:"#00a680"
    },
    iconRight:{
        color:"#c1c1c1",
    }
})