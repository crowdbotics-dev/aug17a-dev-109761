import { Switch } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Switch style={styles.gdAqpXVM} value={true} enabled={true}></Switch><Switch style={styles.vghcdquB} value={true}></Switch><Switch style={styles.ogVblCSB} enabled={true} value={true}></Switch></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  gdAqpXVM: {
    width: 50,
    height: 25
  },
  vghcdquB: {
    width: 50,
    height: 25
  },
  ogVblCSB: {
    width: 50,
    height: 25
  }
});
export default Untitled3;