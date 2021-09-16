import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";

import { ThemeContext } from "../Utilities/ThemeManager";

export const GoalItem = ({ title, id, removeGoalHandler }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => removeGoalHandler(id)}>
      <View style={(styles.goalItem, styles[`goalItem${theme}`])}>
        <Text style={styles[`textStyle${theme}`]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // goalItem: {
  //   marginVertical: 2.5,
  //   paddingVertical: 5,
  //   paddingHorizontal: 5,
  //   backgroundColor: "yellow",
  //   borderWidth: 1,
  // },
  goalItemlight: {
    marginVertical: 2.5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: "white",
    borderWidth: 1,
  },
  goalItemdark: {
    marginVertical: 2.5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: "grey",
    borderWidth: 1,
  },
  textStylelight: { color: "black" },
  textStyledark: { color: "white" },
});
