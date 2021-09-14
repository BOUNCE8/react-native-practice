import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Modal } from "react-native";

import { GoalItem } from "./components/GoalItem";
import { GoalCreator } from "./components/GoalCreator";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsModalVisible(false);
  };

  const removeGoalHandler = (goalId) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.addGoalModal}>
        <Button title="Add new goal" onPress={() => setIsModalVisible(true)} />

        <GoalCreator
          cancelAddGoalHandler={cancelAddGoalHandler}
          isModalVisible={isModalVisible}
          addGoalHandler={addGoalHandler}
        />

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
  addGoalModal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
