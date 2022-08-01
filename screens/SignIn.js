import { Alert, Button, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../assets/colors/colors'
import { useNavigation } from '@react-navigation/native';
import { users } from '../assets/userCreds';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const validateEmail = (email_id) => {
        const regex_pattern =      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (regex_pattern.test(email_id)) {
            return true;
        }
        else {
            return false;
        }
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          console.log(e)
        }
      }

    const handlePress = () => {
        if(validateEmail(email)){
            const found = users.some(user => user.email === email && user.password === password);
            if (found) {
                let result = users.find(user => user.email === email);
                storeData(result);
                navigation.navigate("Home", { user: result.name })
            } else {
                Alert.alert("Warning", "Wrong Credentials !")
            }
        }else {
            Alert.alert("Warning !", "Invalid Email !!")
        }
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={require('../assets/images/Group1.png')} style={styles.image} />
        <Text style={styles.title}>Tokomayaki</Text>
      </View>
      <View style={styles.signInContainer} >
        <Text style={styles.Login}>Log in</Text>
        <TextInput style={[styles.inputText]} placeholder={'Email'} placeholderTextColor="#B9B9B9"  onChangeText = {(text) => setEmail(text)}/>
        <TextInput style={[styles.inputText, { marginTop: 13 }]} placeholder={'Password'} placeholderTextColor="#8E8E8E" secureTextEntry={true} onChangeText = {(text) => setPassword(text)}/>
        <Pressable style={styles.button} onPress={handlePress}>
            <Text style={{ color: '#656565', fontSize: 14, lineHeight: 21, fontFamily: 'ReemKufi-Regular', }}>Log in</Text>
        </Pressable>
        <Text style={styles.or}>or</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}><Text style={styles.signUp}>Sign Up?</Text></TouchableOpacity>
        <Text style={styles.textContent}>Create an account to be a part of Toko family, we deliver the best in class ice-creams across Japan and Taiwan. Starting soon in USA, Canada and UK...</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/Layer2.png')} style={styles.bottomImage}/>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroud,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 65
    },
    titleContainer: {
        flex: 0.1,
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Bulgatti',
        color: colors.text,
        fontSize: 18,
    },
    image: {
        height: 30,
        width: 48,
        margin: 5,
        marginTop: 9,
    },
    signInContainer: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        height: 352,
        width: 259,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 35
    },
    Login: {
        marginTop: 19,
        marginLeft: 30,
        marginRight: 183,
        marginBottom: 18,
        color: colors.text,
        fontFamily: 'ReemKufi-Regular',
        fontSize: 16
    },
    inputText: {
        height: 37,
        width: 199,
        marginHorizontal: 30,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
    },
    button: {
        height: 30,
        width: 131,
        backgroundColor: '#F1F2C4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 21,
        marginHorizontal: 64,
    },
    or: {
        fontFamily: 'ReemKufi-Regular',
        color: '#ffffff',
        fontSize: 14,
        marginTop: 3,
    },
    signUp: {
        color: '#F1F2C4',
        fontSize: 15,
        marginTop: 3,
        lineHeight: 21,
        fontFamily: 'ReemKufi-Regular',
    },
    textContent: {
        color: '#ffffff',
        fontSize: 8,
        lineHeight: 12,
        textAlign: 'center',
        marginTop: 6,
        fontFamily: 'ReemKufi-Regular',
        marginHorizontal: 40
    },
    imageContainer: {
        marginTop: 32
    },
    bottomImage: {
        height: 249,
        width: 320,
        marginBottom: 5
    }
})