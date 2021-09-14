import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { GoalItem } from "./components/GoalItem";
import { GoalCreator } from "./components/GoalCreator";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalId) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <GoalCreator addGoalHandler={addGoalHandler} />
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              removeGoalHandler={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
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
