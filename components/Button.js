import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screen = Dimensions.get("window");

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: screen.width / 4 - 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: screen.width / 4,
    margin: 5,
  },
});
