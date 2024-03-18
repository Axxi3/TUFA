import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const RenderItem = ({item}) => {
    const { width: WIDTH, height: HEIGHT } = useWindowDimensions()
    const imageWidth = WIDTH - 40; // Assuming 20 units of margin on both sides
    return (
        <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={{ width: imageWidth, resizeMode: 'contain' }} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text]}>{item.text}</Text>
            </View>
        </View>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
        paddingHorizontal: 20 // Adding horizontal padding
    },
    imageContainer: {
        flex: 0.6,
        justifyContent: 'center', // Center the image vertically
        alignItems: 'center' // Center the image horizontally
    },
    textContainer: { 
        flex:0.4,
        marginTop: 20 // Adjust the margin as needed
    },
    text:{
        margin:10,
        textAlign:"center",
        fontSize:35,
        fontWeight:"bold"
    }
})
