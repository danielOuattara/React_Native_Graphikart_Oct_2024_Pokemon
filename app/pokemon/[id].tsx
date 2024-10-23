import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
export default function SinglePokemon() {
  const params = useLocalSearchParams();
  console.log(params.id);
  return (
    <View>
      <Text>Pokemon id: {params.id}</Text>
    </View>
  );
}
