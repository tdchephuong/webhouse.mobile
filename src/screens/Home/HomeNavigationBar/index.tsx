import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SCREEN_WIDTH } from '../../../contants'
import { navigation } from '../../../navigations/rootNavigation'
import CardItem from './CardItem'


const DATA = [
    {
        uri: 'https://images-na.ssl-images-amazon.com/images/I/717-P%2BddbrL._AC_SX522_.jpg',
        like: 3,
    },
    {
        uri: 'https://png.pngtree.com/thumb_back/fw800/background/20191120/pngtree-sunset-nature-landscape-with-big-tree-image_322506.jpg',
        like: 2,
    }
  ];

const index = () => {
    const renderItem = ({ item }: any) => (
        <CardItem imageUri={item.uri} like={item.like} />
      );
    
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.navigationBar}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('StoryTaker')}
                    style={styles.btnBack}>
                    <Icon name="home" size={24} />
                </TouchableOpacity>
                <View style={styles.centerBar}>
                    <Image style={styles.logo} source={require('../../../assets/images/webhouse.png')} />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Direct')}
                    style={styles.btnMessenger}>
                    <View>
                        <Image
                            style={{
                                height: 24,
                                width: 24
                            }}
                            source={require('../../../assets/icons/wehouse.png')} />
                        {/* unRead element */}
                    </View>
                </TouchableOpacity>
            </TouchableOpacity >
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                bounces={false}>
                <View style={styles.productContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.uri}
                />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(250,250,250)',
        width: '100%',
        height: '100%'
    },
    productContainer: {
        width: SCREEN_WIDTH
    },
    navigationBar: {
        flexDirection: 'row',
        height: 44,
        width: '100%',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    centerBar: {
        height: 44,
        width: SCREEN_WIDTH - 44 * 2,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    logo: {
        resizeMode: 'contain',
        height: 30,
        width: 100
    },
    btnBack: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnMessenger: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
