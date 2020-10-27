import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar barStyle={"light-content"} />
        <Text style={styles.value}>100</Text>
        <Row>
          <Button onPress={() => {}} text={"C"} />
          <Button onPress={() => {}} text={"+/-"} />
          <Button onPress={() => {}} text={"%"} />
          <Button onPress={() => {}} text={"/"} />
        </Row>
        <Row>
          <Button onPress={() => {}} text={"7"} />
          <Button onPress={() => {}} text={"8"} />
          <Button onPress={() => {}} text={"9"} />
          <Button onPress={() => {}} text={"x"} />
        </Row>
        <Row>
          <Button onPress={() => {}} text={"4"} />
          <Button onPress={() => {}} text={"5"} />
          <Button onPress={() => {}} text={"6"} />
          <Button onPress={() => {}} text={"-"} />
        </Row>
        <Row>
          <Button onPress={() => {}} text={"1"} />
          <Button onPress={() => {}} text={"2"} />
          <Button onPress={() => {}} text={"3"} />
          <Button onPress={() => {}} text={"+"} />
        </Row>
        <Row>
          <Button onPress={() => {}} text={"0"} />
          <Button onPress={() => {}} text={"."} />
          <Button onPress={() => {}} text={"="} />
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
