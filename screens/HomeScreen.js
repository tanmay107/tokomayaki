import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import colors from '../assets/colors/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AuthContext } from '../context/context';

const HomeScreen = () => {
    const { signOut } = useContext(AuthContext);
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../assets/images/Group1.png')} style={styles.image}/>
            <Text style={styles.title}>Tokomayaki</Text>
            <Pressable style={styles.buttonSignOut} onPress={signOut}>
                <Text style={{ color: '#656565', fontSize: 14, lineHeight: 21, fontFamily: 'ReemKufi-Regular', }}>Sign out</Text>
            </Pressable>
        </View>
        <View style={styles.main}>
            <Text style={styles.welcome}>Welcome, </Text>
            <Text style={styles.name}>Tanmay</Text>
            <Text style={styles.content}>to the Toko family,  we deliver the best in class ice-creams across Japan and Taiwan. Starting soon in USA, Canada and UK... </Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/Landing1.png')} style={styles.imageTruck} />
            <Pressable style={styles.button} onPress={() => navigation.navigate("GetStart")}>
                <Text style={{ color: '#656565', fontSize: 14, lineHeight: 21, fontFamily: 'ReemKufi-Regular', }}>Get Started</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroud,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 30,
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingLeft: 23,
    },
    title: {
        fontFamily: 'Bulgatti',
        color: colors.text,
        fontSize: 18,
    },
    image: {
        height: 30,
        width: 48,
        marginRight: 5,
        marginTop: 9,
    },
    main: {
        flex: 1
    },
    welcome: {
        color: '#ffffff',
        fontFamily: 'ReemKufi-Regular',
        fontSize: 18,
        marginLeft: 33,
        marginTop: -20,
        textDecorationLine: 'underline'
    },
    name: {
        fontFamily: 'Bulgatti',
        color: '#ffffff',
        fontSize: 42,
        marginTop: 20,
        marginLeft:40
    },
    content: {
        fontFamily: 'ReemKufi-Regular',
        fontSize: 15,
        marginTop: 20,
        marginHorizontal: 70,
        textAlign: 'center',
        color: colors.text
    },
    imageContainer: {
        flex: 4,
        
    },
    imageTruck: {
        marginTop: 150,
        marginLeft:25,
        height: 240,
        width: 360
    },
    button: {
        height: 40,
        width: 200,
        backgroundColor: '#F1F2C4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 21,
        marginHorizontal: 100,
    },
    buttonSignOut: {
        height: 30,
        width: 70,
        backgroundColor: '#F1F2C4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 100,
    },
})