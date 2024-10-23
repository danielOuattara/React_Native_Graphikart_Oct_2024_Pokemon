import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function useThemeColors() {
  const theme = useColorScheme() ?? "light";
  return Colors[theme];
}
