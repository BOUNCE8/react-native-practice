import React, { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

import { ThemeContext } from "../Utilities/ThemeManager";

export const GoalCreator = ({
  addGoalHandler,
  cancelAddGoalHandler,
  isModalVisible,
}) => {
  const { theme } = useContext(ThemeContext);

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
      <View style={(styles.goalCreate, styles[`goalCreate${theme}`])}>
        <TextInput
          style={styles.goalInputField}
          placeholder="Add a goal"
          onChangeText={goalInputHandler}
          value={enterGoal}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={() => cancelAddGoalHandler()}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal}></Button>
          </View>
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
    // backgroundColor: "red",
  },
  goalCreatelight: {
    flex: 1,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    width: "100%",
    paddingHorizontal: 5,
    backgroundColor: "white",
  },
  goalCreatedark: {
    flex: 1,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    width: "100%",
    paddingHorizontal: 5,
    backgroundColor: "grey",
  },
  goalInputField: {
    borderWidth: 1.5,
    width: "75%",
    height: 40,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});
