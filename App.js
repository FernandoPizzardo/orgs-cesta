
import { StatusBar, SafeAreaView } from "react-native";
import Cesta from "./src/views/cesta";
import React from "react";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}