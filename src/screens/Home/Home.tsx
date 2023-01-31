import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

type Apartment = {
  apNumber: string;
  apDescription: string;
};

type User = {
  name: string;
  email: string;
  apartment: Apartment[];
};

type Call = {
  callId: string;
  callTitle: string;
  callDescription: string;
  callPriority: number;
  user: User[];
};

export function Home() {
  const data: { local: { userName: string; calls: Call[] } } = {
    local: {
      userName: 'Alexandre',
      calls: [
        // {
        //   callId: 'fe262333-cf79-4c9d-a3d0-62f25c5700c3',
        //   callTitle: 'Tomada não funcionando',
        //   callDescription: '',
        //   callPriority: 5,
        //   user: [
        //     {
        //       name: 'Alexandre',
        //       email: 'alexandre@email.com.br',
        //       apartment: [
        //         {
        //           apNumber: '1223',
        //           apDescription: 'Bloco D',
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    },
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Olá, {data.local.userName}</Text>
        <View style={styles.callsOpen}>
          <Text style={styles.callsTitle}>Seus chamados abertos:</Text>
          {data.local.calls.length === 0 ? (
            <View style={styles.callsEmpty}>
              <Text style={styles.callsEmptyText}>Não há chamados</Text>
            </View>
          ) : (
            <ScrollView>
              {data.local.calls.map((call) => (
                <Text key={call.callId}>{call.callTitle}</Text>
              ))}
            </ScrollView>
          )}
          <TouchableHighlight
            onPress={() => {}}
            activeOpacity={0.6}
            underlayColor="#000"
            style={styles.createCallButton}
          >
            <Text style={styles.textCreateCallButton}>
              Criar um novo chamado
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.callsClosed}>
          <Text style={styles.callsTitle}>Seus chamados já fechados:</Text>
          {data.local.calls.length === 0 ? (
            <View style={styles.callsEmpty}>
              <Text style={styles.callsEmptyText}>Não há chamados</Text>
            </View>
          ) : (
            <ScrollView>
              {data.local.calls.map((call) => (
                <Text key={call.callId}>{call.callTitle}</Text>
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
}
