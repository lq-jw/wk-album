import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import Banner from "./src/components/Banner";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />  
      {/* <Banner /> */}
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ececec',
    flex: 1,
  },
});

export default App;
