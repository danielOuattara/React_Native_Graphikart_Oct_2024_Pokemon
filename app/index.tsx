import ThemeText from "@/components/ThemeText";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeText variant="headline" color="grayWhite">
        Pokedex
      </ThemeText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98e6fa",
  },

  navigation: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: "#0e7c97",
    color: "#fff",
    fontSize: 18,
  },
});
