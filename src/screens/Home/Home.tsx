import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import Button from '../../components/Button';
import CallCard from '../../components/CallCard';
import { CallCardProps } from '../../components/CallCard/CallCard';
import Header from '../../components/Header';
import global from '../../global/variables';
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
  callPriority: 0 | 1 | 2 | 3;
  callStatus: 'open' | 'viewed' | 'wip' | 'closed';
  user: User[];
  callCreatedAt: string;
  callUpdatedAt?: string;
};

const renderCallsScrollView = (data: Call[] | null) => {
  if (!data || !data.length) return null;

  return (
    <ScrollView>
      {data.map((call) => {
        const props: CallCardProps = {
          callId: call.callId,
          callTitle: call.callTitle,
          callDescription: call.callDescription,
          callPriority: call.callPriority,
          callStatus: call.callStatus,
          callCreatedAt: call.callCreatedAt,
          callUpdatedAt: call.callUpdatedAt,
        };
        return <CallCard key={call.callId} {...props}></CallCard>;
      })}
    </ScrollView>
  );
};

const filterCallsByStatus = (
  data: { local: { userName: string; calls: Call[] } },
  filter: string,
  not?: boolean
) => {
  const filteredCalls = not
    ? data.local.calls.filter((call) => call.callStatus !== filter)
    : data.local.calls.filter((call) => call.callStatus === filter);
  return !filteredCalls.length ? null : filteredCalls;
};

export function Home() {
  const data: { local: { userName: string; calls: Call[] } } = {
    local: {
      userName: 'Alexandre',
      calls: [
        {
          callId: 'fe262333-cf79-4c9d-a3d0-62f25c5700c3',
          callTitle: 'Tomada não funcionando',
          callDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur hic incidunt voluptate corporis magni quasi quisquam necessitatibus numquam sequi.',
          callPriority: 2,
          callStatus: 'viewed',
          user: [
            {
              name: 'Alexandre',
              email: 'alexandre@email.com.br',
              apartment: [
                {
                  apNumber: '1223',
                  apDescription: 'Bloco D',
                },
              ],
            },
          ],
          callCreatedAt: '12/10/2022',
          callUpdatedAt: '23/10/2022',
        },
        {
          callId: 'fe262333-2cf79-4c9d-a3d0-62f25c5700c3',
          callTitle: 'Vizinho barulhento',
          callDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ex.',
          callPriority: 3,
          callStatus: 'wip',
          user: [
            {
              name: 'Alexandre',
              email: 'alexandre@email.com.br',
              apartment: [
                {
                  apNumber: '1223',
                  apDescription: 'Bloco D',
                },
              ],
            },
          ],
          callCreatedAt: '12/10/2022',
          callUpdatedAt: '23/10/2022',
        },
        {
          callId: 'fe262333-cf79-4c9d-a3d0-362f25c5700c3',
          callTitle: 'Torneira pingando',
          callDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta illum quod exercitationem. Ea.',
          callPriority: 0,
          callStatus: 'open',
          user: [
            {
              name: 'Alexandre',
              email: 'alexandre@email.com.br',
              apartment: [
                {
                  apNumber: '1223',
                  apDescription: 'Bloco D',
                },
              ],
            },
          ],
          callCreatedAt: '12/10/2022',
        },
        {
          callId: 'fe2623e33-cf79-4c9d-a3d0-362f25c5700c3',
          callTitle: 'Cano vazando',
          callDescription:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          callPriority: 2,
          callStatus: 'closed',
          user: [
            {
              name: 'Alexandre',
              email: 'alexandre@email.com.br',
              apartment: [
                {
                  apNumber: '1223',
                  apDescription: 'Bloco D',
                },
              ],
            },
          ],
          callCreatedAt: '12/10/2022',
          callUpdatedAt: '23/10/2022',
        },
        {
          callId: 'fe262333-cf79-4c29d-a3d0-362f25c5700c3',
          callTitle: 'Tinta descancando',
          callDescription:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore amet blanditiis consectetur!',
          callPriority: 1,
          callStatus: 'closed',
          user: [
            {
              name: 'Alexandre',
              email: 'alexandre@email.com.br',
              apartment: [
                {
                  apNumber: '1223',
                  apDescription: 'Bloco D',
                },
              ],
            },
          ],
          callCreatedAt: '12/10/2022',
          callUpdatedAt: '23/10/2022',
        },
      ],
    },
  };

  const callsOpened = filterCallsByStatus(data, 'closed', true);
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
          <Button text="Criar um novo chamado" />
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
