import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link style={styles.navigation} href="/about">
        A propos
      </Link>
      <Link
        style={styles.navigation}
        href={{ pathname: "/pokemon/[id]", params: { id: 2 } }}
      >
        Pokemon 2
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#98e6fa",
    // justifyContent: "center",
    // alignItems: "center",
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
