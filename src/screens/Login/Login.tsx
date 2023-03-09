import { View, Text, TextInput } from 'react-native';
import stylesLogin from './styles';
import LogoLogin from '../../assets/logo.svg';

export function Login() {
  return (
    <View style={stylesLogin.container}>
      <View style={stylesLogin.logoContainer}>
        <LogoLogin height={200} width={200} viewBox="0 0 721 830" />
      </View>
      <View style={stylesLogin.loginContainer}>
        <Text style={stylesLogin.title}>Boas-vindas ao ApCall!</Text>
        <Text style={stylesLogin.description}>
          O app onde você pode controlar, criar e acompanhar os chamados do seu
          condomínio!
        </Text>
        <TextInput
          style={stylesLogin.inputs}
          keyboardType="email-address"
          placeholder="Email"
        ></TextInput>
        <TextInput
          style={stylesLogin.inputs}
          secureTextEntry
          placeholder="Senha"
        ></TextInput>
      </View>
    </View>
  );
}
