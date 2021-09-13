import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const GoalItem = ({ title }) => {
  return (
    <View style={styles.goalItem}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: { marginVertical: 5, backgroundColor: "yellow" },
});
