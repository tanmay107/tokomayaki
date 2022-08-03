import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors/colors'
import { SearchBar } from 'react-native-elements';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const dataTest = [
    {
        "symbol": "ETHBTC",
        "priceChange": "-0.00303300",
        "priceChangePercent": "-4.182",
        "weightedAvgPrice": "0.07055376",
        "prevClosePrice": "0.07253400",
        "lastPrice": "0.06950000",
        "lastQty": "0.16460000",
        "bidPrice": "0.06949900",
        "bidQty": "12.38200000",
        "askPrice": "0.06950000",
        "askQty": "4.78290000",
        "openPrice": "0.07253300",
        "highPrice": "0.07262400",
        "lowPrice": "0.06879000",
        "volume": "92885.46730000",
        "quoteVolume": "6553.41866607",
        "openTime": 1659341175360,
        "closeTime": 1659427575360,
        "firstId": 360620283,
        "lastId": 360895058,
        "count": 274776
        },
        {
        "symbol": "LTCBTC",
        "priceChange": "-0.00006200",
        "priceChangePercent": "-2.410",
        "weightedAvgPrice": "0.00253804",
        "prevClosePrice": "0.00257400",
        "lastPrice": "0.00251100",
        "lastQty": "10.24800000",
        "bidPrice": "0.00251100",
        "bidQty": "17.24800000",
        "askPrice": "0.00251200",
        "askQty": "42.48900000",
        "openPrice": "0.00257300",
        "highPrice": "0.00257500",
        "lowPrice": "0.00248700",
        "volume": "71975.26100000",
        "quoteVolume": "182.67597712",
        "openTime": 1659341172125,
        "closeTime": 1659427572125,
        "firstId": 82353566,
        "lastId": 82373954,
        "count": 20389
        },
        {
        "symbol": "BNBBTC",
        "priceChange": "-0.00013700",
        "priceChangePercent": "-1.110",
        "weightedAvgPrice": "0.01223885",
        "prevClosePrice": "0.01234100",
        "lastPrice": "0.01220300",
        "lastQty": "3.90000000",
        "bidPrice": "0.01220300",
        "bidQty": "12.24100000",
        "askPrice": "0.01220400",
        "askQty": "3.79500000",
        "openPrice": "0.01234000",
        "highPrice": "0.01240000",
        "lowPrice": "0.01203300",
        "volume": "67439.80100000",
        "quoteVolume": "825.38529606",
        "openTime": 1659341173711,
        "closeTime": 1659427573711,
        "firstId": 192191167,
        "lastId": 192415047,
        "count": 223881
        },
]

const LandingScreen = () => {
    const [data, setData] = useState([])
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        axios
            .get("https://api2.binance.com/api/v3/ticker/24hr")
            .then(res => {
                setData(res.data);
                setFilteredDataSource(res.data);
            })
            .catch(e => console.log(e))
    }, [])

    const searchFilterFunction = (text) => {
        if (text) {
          const newData = data.filter(function (item) {
            const itemData = item.symbol
              ? item.symbol.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          setFilteredDataSource(data);
          setSearch(text);
        }
    };
    
    const ItemView = ({ item }) => {
        return (
          // Flat List Item
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Details", {item: item})}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={styles.title}>{item.symbol}</Text>
                <Text style={{ fontFamily: 'ReemKufi-Regular', fontSize: 18, marginLeft: 30, color: colors.backgroud, }}>{item.lastPrice}</Text>
                <View style={{ backgroundColor: `${item.priceChangePercent < 0 ? 'red' : 'green'}`, marginLeft: 20 , height:36, width: 60, justifyContent:'center', alignItems:'center', borderRadius:10}}><Text style={{color: colors.text, fontFamily: 'ReemKufi-Regular', fontSize: 16}}>{item.priceChangePercent}</Text></View>
            </View>
          </TouchableOpacity>
        );
    };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
        <SearchBar
            placeholderTextColor={'#8E8E8E'}
            placeholder={'Search...'}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            value={search}
        />
        </View>
        <View style={styles.flatList}>
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ItemView}
            />
        </View>
    </SafeAreaView>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#213042',
    },
    subContainer: {
        backgroundColor: '#213042',
        height: 25
    },
    flatList: {
        marginTop: 55
    },
    item: {
        padding: 20,
        height: 100,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
    },
    title: {
        fontFamily: 'ReemKufi-Regular',
        color: colors.text,
        fontSize: 17,
    }
})