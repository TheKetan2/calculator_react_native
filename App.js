import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";

export default function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const handleClick = (type, value) => {
    if (currentValue.includes(".") && value === ".") return;
    if (type === "num") {
      let temp = "";
      if (currentValue === "0") {
        temp = value;
        setCurrentValue(temp);
      } else {
        temp = currentValue + value;
        setCurrentValue(temp);
      }
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle={"light-content"} />
        <Text style={styles.value}>
          {parseFloat(currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button theme={"secondary"} onPress={() => {}} text={"C"} />
          <Button theme={"secondary"} onPress={() => {}} text={"+/-"} />
          <Button theme={"secondary"} onPress={() => {}} text={"%"} />
          <Button theme={"accent"} onPress={() => {}} text={"/"} />
        </Row>
        <Row>
          <Button onPress={() => handleClick("num", "7")} text={"7"} />
          <Button onPress={() => handleClick("num", "8")} text={"8"} />
          <Button onPress={() => handleClick("num", "9")} text={"9"} />
          <Button theme={"accent"} onPress={() => {}} text={"x"} />
        </Row>
        <Row>
          <Button onPress={() => handleClick("num", "4")} text={"4"} />
          <Button onPress={() => handleClick("num", "5")} text={"5"} />
          <Button onPress={() => handleClick("num", "6")} text={"6"} />
          <Button theme={"accent"} onPress={() => {}} text={"-"} />
        </Row>
        <Row>
          <Button onPress={() => handleClick("num", "1")} text={"1"} />
          <Button onPress={() => handleClick("num", "2")} text={"2"} />
          <Button onPress={() => handleClick("num", "3")} text={"3"} />
          <Button theme={"accent"} onPress={() => {}} text={"+"} />
        </Row>
        <Row>
          <Button
            size={"double"}
            onPress={() => handleClick("num", "0")}
            text={"0"}
          />
          <Button onPress={() => handleClick("num", ".")} text={"."} />
          <Button theme={"accent"} onPress={() => {}} text={"="} />
        </Row>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 10,
  },
});
