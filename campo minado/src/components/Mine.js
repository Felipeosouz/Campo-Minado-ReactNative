import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.coreMine} />
            <View style={styles.line} />
            <View style={[styles.line, { transform: [{ rotate: '45deg' }] }] }/>
            <View style={[styles.line, { transform: [{ rotate: '90deg' }] }] }/>
            <View style={[styles.line, { transform: [{ rotate: '135deg' }] }] } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    coreMine: {
        width: 14,
        height: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        backgroundColor: 'black',
        width: 20,
        height: 3,
        borderRadius: 3,
        position: 'absolute'
    }
})