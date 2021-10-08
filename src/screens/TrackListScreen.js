import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
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
        keyExtractor={(item) => {
          return item._id;
        }}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetails", {
                    _id: item._id,
                  })
                }
              >
                {item ? (
                  <ListItem bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                      <ListItem.Subtitle>Tracks</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                ) : (
                  <Text>No Data Found</Text>
                )}
              </TouchableOpacity>
            </ScrollView>
          );
        }}
        //  ListEmptyComponent={<Text> No data found </Text>}
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
