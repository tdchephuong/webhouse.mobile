import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SCREEN_WIDTH } from '../../../contants'
import { navigation } from '../../../navigations/rootNavigation'

const index = () => {
    
    return (
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
    )
}

export default index

const styles = StyleSheet.create({
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
