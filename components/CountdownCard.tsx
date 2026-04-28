import { StyleSheet, View, Text } from 'react-native';

export default function CountdownCard () {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{day}일</Text>
      <Text style={styles.text}>{hour}시간</Text>
      <Text style={styles.text}>{minute}분</Text>
      <Text style={styles.text}>{second}초</Text>
    </View>
  );
}

const day = 1;
const hour = 2;
const minute = 3;
const second = 4;

const styles = StyleSheet.create({
  card: {
    gap: 10,
    padding: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: 'white',
  },

  text: {
    fontSize: 30,
    fontWeight: '400',

  }
});