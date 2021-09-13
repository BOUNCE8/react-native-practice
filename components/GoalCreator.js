import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const GoalCreator = ({ addGoalHandler }) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };

  return (
    <View style={styles.goalCreate}>
      <TextInput
        placeholder="Add a goal"
        onChangeText={goalInputHandler}
        value={enterGoal}
      ></TextInput>
      <View>
        <Button title="+" onPress={() => addGoalHandler(enterGoal)}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalCreate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1.5,
    borderColor: "blue",
    width: 300,
    paddingHorizontal: 5,
  },
});
