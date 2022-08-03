import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import colors from '../assets/colors/colors';

const DetailsScreen = () => {
    const route = useRoute();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>------{route.params.item.symbol}------</Text>
      </View>
      <View style={[styles.content, {flex:0, backgroundColor: 'rgba(255, 255, 255, 0.0)'} ]}>
        <View style={styles.tabs}>
            <Text style={styles.tabHeading}>Open</Text>
            <Text style={styles.text}>{(route.params.item.openPrice*10000).toFixed(2)}</Text>
        </View>
        <View style={styles.tabs}>
            <Text style={styles.tabHeading}>High</Text>
            <Text style={styles.text}>{(route.params.item.highPrice*10000).toFixed(2)}</Text>
        </View>
        <View style={styles.tabs}>
            <Text style={styles.tabHeading}>Low</Text>
            <Text style={styles.text}>{(route.params.item.lowPrice*10000).toFixed(2)}</Text>
        </View>
        <View style={styles.tabs}>
            <Text style={styles.tabHeading}>Prev Close</Text>
            <Text style={styles.text}>{(route.params.item.prevClosePrice*10000).toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.tabsTwo}>
            <Text style={styles.tabHeading}>Volume</Text>
            <Text style={styles.text}>{Math.floor(route.params.item.volume)}</Text>
        </View>
        <View style={styles.tabsTwo}>
            <Text style={styles.tabHeading}>Average Trading Price</Text>
            <Text style={styles.text}>{route.params.item.weightedAvgPrice}</Text>
        </View>
        <View style={styles.tabsTwo}>
            <Text style={styles.tabHeading}>Last Traded Quantity</Text>
            <Text style={styles.text}>{Math.floor(route.params.item.lastQty)}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#213042',
    },
    header: {
        height: 80,
        margin: 25,
        marginBottom: -1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },
    heading: {
        fontFamily: 'ReemKufi-Regular',
        fontSize: 35,
        color: colors.text,
    },
    content: {
        flex:1,
        flexDirection: 'row',
        margin: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: -1,
    },
    tabs: {
        flex:1,
        height: 80,
        margin: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
    },
    tabHeading: {
        fontFamily: 'ReemKufi-Regular',
        fontSize: 16,
        marginBottom: 10,
        color: 'rgba(255, 255, 255, 0.5)',
        textDecorationLine: 'underline'
    },
    text: {
        fontFamily: 'ReemKufi-Regular',
        fontSize: 16,
        color: '#ffffff'
    },
    containerTwo: {
        flex:1,
        flexDirection: 'column',
        margin: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        marginBottom: -1,
    },
    tabsTwo: {
        flex: 1,
        margin: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
})