import React from 'react'
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SCREEN_WIDTH } from '../../../contants';

export interface CardItemProps {
    imageUri: string,
    like: number
}

const CardItem = ({imageUri, like} : CardItemProps) => {
    return (
        <View>
            <FastImage
                style={styles.item}
                source={{ uri: imageUri, priority: FastImage.priority.normal }} />
            <View style={{
                            backgroundColor: '#fff',
                            height: 40,
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                <Image style={styles.iconLeft} source={require('../../../assets/icons/like.png')} />

                <Text style={{ fontWeight: '500' }}>{like}</Text>
                <View style={{
                            backgroundColor: '#fff',
                            width: SCREEN_WIDTH - 60,
                            height: 30,
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                        }}>
                    <Image style={styles.iconRight} source={require('../../../assets/icons/star.png')} />
                </View>
            </View>
           
        </View>
    )
}

export default CardItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(250,250,250)',
        width: '100%',
        height: '100%'
    },
    profileContainer: {
        width: SCREEN_WIDTH
    },
    item:{
        width: SCREEN_WIDTH - 30 ,
        height: 250,
        borderRadius: 30,
        marginLeft: 15,
        marginRight: 10,
    },
    iconLeft:{
        width: 20,
        height: 20,
        alignItems: 'center',
        marginLeft: 15
    },
    iconRight:{
        width: 20,
        height: 20,
        justifyContent: 'flex-end'
    }
});