import { StyleSheet, Text, View } from "react-native";
import CountdownCard from "@/components/CountdownCard";
import RefreshButton from "@/components/RefreshButton";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.title}>집가기까지 남은 시간</Text>
        </View>
        <CountdownCard />
        <RefreshButton />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
    gap: 20,
    paddingHorizontal: 20,
    bottom: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: "500",
    color: "#666",
  },
});
