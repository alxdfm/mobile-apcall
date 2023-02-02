import { View, ActivityIndicator } from 'react-native';
import global from '../../global/colors';
import stylesLoading from './styles';

export function Loading() {
  return (
    <View style={stylesLoading.container}>
      <ActivityIndicator color={global.colors.blue.secondary} size={40} />
    </View>
  );
}
