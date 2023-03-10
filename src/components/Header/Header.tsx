import { View, TouchableOpacity } from 'react-native';
import stylesHeader from './styles';
import Logo from '../../assets/logo.svg';
import { MaterialIcons } from '@expo/vector-icons';
import global from '../../global/variables';

export function Header() {
  return (
    <View style={stylesHeader.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <MaterialIcons
          name="list"
          size={28}
          color={global.colors.blue.secondary}
        />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Logo />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <MaterialIcons
          name="logout"
          size={28}
          color={global.colors.blue.secondary}
        />
      </TouchableOpacity>
    </View>
  );
}
