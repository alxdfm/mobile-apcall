import { View, Image, TouchableOpacity } from 'react-native';
import stylesHeader from './styles';
import { Foundation } from '@expo/vector-icons';

const image = require('../../assets/logo.png');

export function Header() {
  return (
    <View style={stylesHeader.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image source={image} style={stylesHeader.logo} />
      </TouchableOpacity>
    </View>
  );
}
