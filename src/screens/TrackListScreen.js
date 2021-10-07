import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  VirtualizedList,
  ScrollView,
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        initialNumToRender={state.length}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetails", { _id: item._id })
                }
              >
                <ListItem title={item.name} />
              </TouchableOpacity>
            </ScrollView>
          );
        }}
        // ListEmptyComponent={<Text message="No data found." />}
      />
    </>
  );
};

TrackListScreen.navigationOptions = () => {
  return {
    title: "Tracks",
  };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
