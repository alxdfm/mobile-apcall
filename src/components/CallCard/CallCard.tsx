import React from 'react';
import { Text, View } from 'react-native';
import Progress from '../Progress';
import stylesCallCard from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import global from '../../global/variables';

export type CallCardProps = {
  callId: string;
  callTitle: string;
  callDescription: string;
  callPriority: number;
  callStatus: 'open' | 'viewed' | 'wip' | 'closed';
  callCreatedAt: string;
  callUpdatedAt?: string;
};

const priorityToColor = [
  global.colors.priorityColors.veryLow,
  global.colors.priorityColors.low,
  global.colors.priorityColors.normal,
  global.colors.priorityColors.high,
];

export function CallCard(props: CallCardProps) {
  const priorityColor = priorityToColor[props.callPriority];
  return (
    <View style={stylesCallCard.container}>
      <View style={stylesCallCard.titleContainer}>
        <Text style={stylesCallCard.title}>{props.callTitle}</Text>
        <MaterialIcons
          name="label"
          size={global.fontSize.medium}
          color={priorityColor}
        />
      </View>
      <Text style={stylesCallCard.description}>{props.callDescription}</Text>
      <Progress
        callStatus={props.callStatus}
        callCreatedAt={props.callCreatedAt}
        callUpdatedAt={props.callUpdatedAt}
      />
    </View>
  );
}
