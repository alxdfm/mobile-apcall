import { View, TouchableOpacity } from 'react-native';
import stylesHeader from './styles';
import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <View style={stylesHeader.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <Logo />
      </TouchableOpacity>
    </View>
  );
}
