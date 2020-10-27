import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screen = Dimensions.get("window");

const Button = ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme === "secondary") {
    buttonStyles.push({
      backgroundColor: "#a6a6a6",
    });
  } else if (theme === "accent") {
    buttonStyles.push({
      backgroundColor: "#f09a36",
    });
  }
  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text
        style={
          theme === "secondary"
            ? [styles.text, { color: "#060606" }]
            : styles.text
        }
      >
        {text}
      </Text>
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
    height: Math.floor(screen.width / 4) - 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(screen.width / 4),
    margin: 5,
  },
  buttonDouble: {
    width: Math.floor(screen.width / 2) - 10,
    alignItems: "flex-start",
    flex: 0,
    paddingLeft: 40,
  },
});

// #a6a6a6 #f09a36
