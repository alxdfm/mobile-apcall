import { View, ActivityIndicator } from 'react-native';
import stylesLoading from './styles';

export function Loading() {
  return (
    <View style={stylesLoading.container}>
      <ActivityIndicator color="#A6CAEB" size={40} />
    </View>
  );
}
