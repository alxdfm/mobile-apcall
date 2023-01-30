import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.callsSection}>
          <Text style={styles.callsTitle}>Seus chamados abertos:</Text>
          <ScrollView>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
            <Text>ASLDFASJGFASKGJSFASKFDASDJKDASKD</Text>
          </ScrollView>
          <TouchableHighlight
            onPress={() => {}}
            activeOpacity={0.6}
            underlayColor="#f4e19d"
            style={{
              marginTop: 4,
              borderRadius: 6,
              alignSelf: 'flex-end',
            }}
          >
            <Text
              style={{
                fontSize: 10,
                padding: 2,
                borderRadius: 4,
                borderWidth: 0.5,
                backgroundColor: '#F1C835',
              }}
            >
              Criar um novo chamado
            </Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Test</Text>
      </View>
    </View>
  );
}
