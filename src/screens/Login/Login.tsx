import {
  View,
  Text,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import stylesLogin from './styles';
import LogoLogin from '../../assets/logo.svg';
import Button from '../../components/Button';

export function Login() {
  const window = useWindowDimensions();
  const height = window.height;

  return (
    <ScrollView>
      <View style={stylesLogin(height).container}>
        <View style={stylesLogin().logoContainer}>
          <LogoLogin height={200} width={200} viewBox="0 0 721 830" />
        </View>
        <View style={stylesLogin().loginContainer}>
          <Text style={stylesLogin().title}>Boas-vindas ao ApCall!</Text>
          <Text style={stylesLogin().description}>
            O app onde você pode controlar, criar e acompanhar os chamados do
            seu condomínio!
          </Text>
          <TextInput
            style={stylesLogin().inputs}
            keyboardType="email-address"
            placeholder="Email"
          />
          <TextInput
            style={stylesLogin().inputs}
            placeholder="Senha"
            secureTextEntry
          />
          <View style={stylesLogin().loginOrSigninContainer}>
            <Text style={stylesLogin().signin}>
              Não tem conta?{' '}
              <Text
                style={{ textDecorationLine: 'underline' }}
                onPress={() => {}}
              >
                Cadastre-se
              </Text>
            </Text>
            <Button text="Fazer login" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
