import { Pressable, Text, StyleSheet } from "react-native";

export default function RefreshButton() {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
    >
      <Text style={styles.text}>새로고침</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#fcc",
    borderRadius: 10,
    backgroundColor: "#f44",
    marginTop: 350,
  },

  btnPressed: {
    backgroundColor: "#c11",
  },

  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
  },
});
