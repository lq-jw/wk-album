import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Banner =() =>{
    return(
        <View>
            <View style={styles.bannerSectionStyle}>
                <Image
                style={styles.imageStyle}
                source={{
                    uri: 'https://i.scdn.co/image/ab67706c0000bebbcbced0f101c7d64e7a9dfa38'
                }}
                />
                <Text style={styles.bannerTXT}>Starset</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerSectionStyle: {
        justifyContent: "center",
        alignItems:"center",
        height: 250,
        paddingTop: 0,
    },
    imageStyle: {
        height: 250,
        width: '100%',
    },
    bannerTXT: {
        position:"absolute",
        fontSize: 60,
        right:20,
        top:-10,
        fontStyle: 'italic',
        color: 'black',
    }  
  });
export default Banner;