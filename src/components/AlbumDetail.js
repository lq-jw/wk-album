import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const AlbumDetail = (props) => {
  const { thumbnail_image, title, artist, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={styles.cardSectionStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        {/* <Image
          style={styles.thumbnailStyle}
          source={{
            uri: thumbnail_image
          }}
        /> */}
        <View style={styles.headerContentStyle}>
          <Text style={styles.containTXT}>{title}</Text>
          {/* <Text>{artist}</Text> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "center"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems:"center",
    backgroundColor: "#ececec",
    // paddingLeft: 10
  },
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",s
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    // marginLeft: 20,
    // marginRight: 20,
    justifyContent: "center",
    alignItems:"center",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#ececec",
  },
  cardSectionStyle: {
    padding: 5,
    // backgroundColor: "#fff",
    // borderColor: "#ddd",
    // borderBottomWidth: 1,
    backgroundColor: "#ececec",
  },
  imageStyle: {
    width: 250,
    height: 250,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: "#ececec",
  },
  containTXT: {
    fontStyle: 'italic',
    fontSize:20,
  }
});

export default AlbumDetail;