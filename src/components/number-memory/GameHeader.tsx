import React from 'react';
import {View, Text} from 'react-native';
import PauseSVGComponent from '../../assets/svgs/PauseIconSVG';
import PlaySVGComponent from '../../assets/svgs/PlayIconSVG';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { headerStyles as hs } from './styles';

type GamerHeaderProps = {
  level: number;
  paused: boolean;
  pausePlayHandler: () => any;
};

export const GameHeader = ({
  level,
  paused,
  pausePlayHandler,
}: GamerHeaderProps) => {
  return (
    <View style={hs.header}>
      <Text style={hs.levelText}>LVL {level}</Text>
      <TouchableOpacity onPress={pausePlayHandler} style={hs.pausePlayButton}>
        {paused ? <PlaySVGComponent /> : <PauseSVGComponent />}
      </TouchableOpacity>
    </View>
  );
};
