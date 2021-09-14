import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export const GoalCreator = ({
  addGoalHandler,
  cancelAddGoalHandler,
  isModalVisible,
}) => {
  const [enterGoal, setEnterGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnterGoal(enteredText);
  };

  const addGoal = () => {
    addGoalHandler(enterGoal);
    setEnterGoal("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.goalCreate}>
        <TextInput
          style={styles.goalInputField}
          placeholder="Add a goal"
          onChangeText={goalInputHandler}
          value={enterGoal}
        ></TextInput>
        <View>
          <Button
            title="Cancel"
            color="red"
            onPress={() => cancelAddGoalHandler()}
          ></Button>
          <Button title="+" onPress={addGoal}></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  goalCreate: {
    flex: 1,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    width: "100%",
    paddingHorizontal: 5,
  },
  goalInputField: {
    borderWidth: 1.5,
    width: 300,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 5,
  },
  addGoalModal: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
