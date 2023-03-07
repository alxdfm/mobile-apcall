import { Text, View } from 'react-native';
import stylesProgress from './styles';

export type ProgressProps = {
  callStatus: 'open' | 'viewed' | 'wip' | 'closed';
  callCreatedAt: string;
  callUpdatedAt?: string;
};

const statusToPercent = {
  open: '5',
  viewed: '25',
  wip: '65',
  closed: '100',
};

const statusToText = {
  open: 'Aberto',
  viewed: 'Visualizado',
  wip: 'Em andamento',
  closed: 'Fechado',
};

export function Progress(props: ProgressProps) {
  const percent = statusToPercent[props.callStatus];
  const text = statusToText[props.callStatus];
  return (
    <View style={stylesProgress(percent).container}>
      <View style={stylesProgress().progressFull}>
        <View style={stylesProgress(percent).progress} />
      </View>
      <View style={stylesProgress().containerText}>
        <Text style={stylesProgress().text}>
          Aberto - {props.callCreatedAt}
        </Text>
        <Text style={stylesProgress().text}>
          {props.callUpdatedAt ? `${props.callUpdatedAt} - ${text}` : ''}
        </Text>
      </View>
    </View>
  );
}
