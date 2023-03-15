import { Text, TouchableHighlight } from 'react-native';
import global from '../../global/variables';
import stylesButton from './styles';

type ButtonProps = {
  text: string;
};

export function Button(prop: ButtonProps) {
  return (
    <TouchableHighlight
      onPress={() => {}}
      activeOpacity={0.6}
      underlayColor={global.colors.neutral.black}
      style={stylesButton.button}
    >
      <Text style={stylesButton.textButton}>{prop.text}</Text>
    </TouchableHighlight>
  );
}
