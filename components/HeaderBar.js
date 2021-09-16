import React, { useContext } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

import { ThemeContext } from "../Utilities/ThemeManager";

export const HeaderBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles[`container${theme}`]}>
      <TouchableOpacity style={styles.button}>
        <Button title="Toggle Theme" onPress={() => toggleTheme()} />
      </TouchableOpacity>
      <Text style={styles[`themeStatus${theme}`]}>{theme}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerlight: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerdark: {
    backgroundColor: "grey",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
  },
  themeStatuslight: { color: "blue" },
  themeStatusdark: { color: "white" },
});
