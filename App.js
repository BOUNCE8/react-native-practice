import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import { GoalItem } from "./components/GoalItem";
import { GoalCreator } from "./components/GoalCreator";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <GoalCreator addGoalHandler={addGoalHandler} />
        <FlatList
          data={goalList}
          renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  goalList: { marginVertical: 10 },
});
