import { Text } from 'react-native';

export type CallCardProps = {
  callId: string;
  callTitle: string;
  callDescription: string;
  callPriority: number;
  callStatus: string;
};

export function CallCard(props: CallCardProps) {
  return (
    <Text key={props.callId}>
      {props.callTitle} {props.callDescription}
      {props.callStatus}
    </Text>
  );
}
