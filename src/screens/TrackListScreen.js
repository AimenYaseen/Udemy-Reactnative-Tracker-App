import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <Button
        title="Go to Track Details"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
