import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";

export default function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [prev, setPrev] = useState(null);
  const [operator, setOperator] = useState(null);
  const handleClick = (type, value) => {
    if (currentValue.includes(".") && value === ".") return;
    if (type === "num") {
      let temp = "";
      if (currentValue === "0") {
        if (value === ".") {
          setCurrentValue("0" + value);
        } else {
          temp = value;
          setCurrentValue(temp);
        }
      } else {
        temp = currentValue + value;
        setCurrentValue(temp);
      }
    }

    if (type === "operator") {
      setPrev(currentValue);
      setOperator(value);
      setCurrentValue("0");
    }

    if (type === "equal") {
      const current = parseFloat(currentValue);
      const previous = parseFloat(prev);
      if (operator === "+") {
        setCurrentValue((current + previous).toString());
        setOperator(null);
        setPrev(null);
      }
      if (operator === "-") {
        setCurrentValue((current - previous).toString());
        setOperator(null);
        setPrev(null);
      }
      if (operator === "*") {
        setCurrentValue((current * previous).toString());
        setOperator(null);
        setPrev(null);
      }
      if (operator === "/") {
        setCurrentValue((current / previous).toString());
        setOperator(null);
        setPrev(null);
      }
    }

    if (type === "clear") {
      setCurrentValue("0");
      setOperator(null);
      setPrev(0);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle={"light-content"} />
        {/* <Text style={styles.value}>{prev + operator}</Text> */}
        <Text style={styles.value}>
          {parseFloat(currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            theme={"secondary"}
            onPress={() => handleClick("clear", "")}
            text={"C"}
          />
          <Button theme={"secondary"} onPress={() => {}} text={"+/-"} />
          <Button theme={"secondary"} onPress={() => {}} text={"%"} />
          <Button
            theme={"accent"}
            onPress={() => handleClick("operator", "/")}
            text={"/"}
          />
        </Row>
        <Row>
          <Button onPress={() => handleClick("num", "7")} text={"7"} />
          <Button onPress={() => handleClick("num", "8")} text={"8"} />
          <Button onPress={() => handleClick("num", "9")} text={"9"} />
          <Button
            theme={"accent"}
            onPress={() => handleClick("operator", "*")}
            text={"x"}
          />
        </Row>
        <Row>
          <Button onPress={() => handleClick("num", "4")} text={"4"} />
          <Button onPress={() => handleClick("num", "5")} text={"5"} />
          <Button onPress={() => handleClick("num", "6")} text={"6"} />
          <Button
            theme={"accent"}
            onPress={() => handleClick("operator", "-")}
            text={"-"}
          />
        </Row>
        <Row>
          <Button onPress={() => handleClick("num", "1")} text={"1"} />
          <Button onPress={() => handleClick("num", "2")} text={"2"} />
          <Button onPress={() => handleClick("num", "3")} text={"3"} />
          <Button
            theme={"accent"}
            onPress={() => handleClick("operator", "+")}
            text={"+"}
          />
        </Row>
        <Row>
          <Button
            size={"double"}
            onPress={() => handleClick("num", "0")}
            text={"0"}
          />
          <Button onPress={() => handleClick("num", ".")} text={"."} />
          <Button
            theme={"accent"}
            onPress={() => handleClick("equal", "=")}
            text={"="}
          />
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
