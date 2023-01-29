import { View, StyleSheet, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#A6CAEB" size={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81B7EA',
  },
});
