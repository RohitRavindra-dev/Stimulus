import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {appCardStyles as acs} from './styles';

type AppCardProps = {
  cardBackground: any;
  cardName: string;
};

export const AppCard = ({cardBackground, cardName}: AppCardProps) => {
  return (
    <View style={acs.appCard}>
      <ImageBackground
        source={cardBackground}
        resizeMode="contain"
        style={{height: '100%', width: '100%', opacity: 0.5, borderRadius: 15}}
      />
      <View style={acs.cardNameCntr}>
        <Text style={acs.cardName}>{cardName}</Text>
      </View>
    </View>
  );
};
