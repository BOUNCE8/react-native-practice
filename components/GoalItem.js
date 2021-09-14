import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const GoalItem = ({ title, id, removeGoalHandler }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => removeGoalHandler(id)}>
      <View style={styles.goalItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 2.5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: "yellow",
    borderWidth: 1,
  },
});
