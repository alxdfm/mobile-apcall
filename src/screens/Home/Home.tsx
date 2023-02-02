import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import Header from '../../components/Header';
import global from '../../global/colors';
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
  callStatus: string;
  user: User[];
};

const renderCallsScrollView = (data: Call[] | null) => {
  if (!data || !data.length) return null;

  return (
    <ScrollView>
      {data.map((call) => (
        <Text key={call.callId}>{call.callTitle}</Text>
      ))}
    </ScrollView>
  );
};

const filterCallsByStatus = (
  data: { local: { userName: string; calls: Call[] } },
  filter: string
) => {
  const filteredCalls = data.local.calls.filter(
    (call) => call.callStatus === filter
  );
  return !filteredCalls.length ? null : filteredCalls;
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
        //   callStatus: 'open',
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

  const callsOpened = filterCallsByStatus(data, 'open');
  const callsClosed = filterCallsByStatus(data, 'closed');

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Olá, {data.local.userName}</Text>
        <View style={styles.callsOpen}>
          <Text style={styles.callsTitle}>Seus chamados abertos:</Text>
          {renderCallsScrollView(callsOpened) || (
            <View style={styles.callsEmpty}>
              <Text style={styles.callsEmptyText}>Nada por aqui</Text>
            </View>
          )}
          <TouchableHighlight
            onPress={() => {}}
            activeOpacity={0.6}
            underlayColor={global.colors.neutral.black}
            style={styles.createCallButton}
          >
            <Text style={styles.textCreateCallButton}>
              Criar um novo chamado
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.callsClosed}>
          <Text style={styles.callsTitle}>Seus chamados já fechados:</Text>
          {renderCallsScrollView(callsClosed) || (
            <View style={styles.callsEmpty}>
              <Text style={styles.callsEmptyText}>Nada por aqui</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
