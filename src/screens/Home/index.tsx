import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StyleSheet } from 'react-native'
import HomeNavigationBar from './HomeNavigationBar'

const Home: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.keyboardAvoidingViewContainer} behavior="height">
                <HomeNavigationBar />
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    keyboardAvoidingViewContainer: {
        position: "relative"
    },
    scrollContainer: {

    },
    loadingIcon: {
        position: 'relative',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})