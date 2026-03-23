import { Image } from "expo-image";
import { Platform, StyleSheet, View, Text } from "react-native";

import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>Olá mundo</Text>
    </SafeAreaView>
  );
}
