import { View, ActivityIndicator } from 'react-native';
import loadingStyles from './styles';

export function Loading() {
  return (
    <View style={loadingStyles.container}>
      <ActivityIndicator color="#A6CAEB" size={40} />
    </View>
  );
}
