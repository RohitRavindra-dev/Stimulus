import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {GamePanel} from '../../../components/number-memory/Panel';
import {TimerBar} from '../../../components/number-memory/TimerBar';
import {Modes} from '../../../components/number-memory/utils';
import {modesConfig} from '../../../components/number-memory/utils';
import {IDLE_TIME} from '../../../assets/constants/AppConstants';
import {GameHeader} from '../../../components/number-memory/GameHeader';
import {useFocusEffect} from '@react-navigation/native';

export const NumbersMemoryScreen = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [mode, setMode] = useState<Modes>('IDLE');

  const [isPaused, setIsPaused] = useState(true);

  const togglePausePlay = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(prevVal => (prevVal == 0 ? 20 : prevVal - 1));
    }, 1000);
  }, []);

  return (
    <View style={{height: '100%'}}>
      <StatusBar backgroundColor={'#420015'} />
      <TimerBar
        timeLeft={timeLeft}
        totalTime={20}
        timeText="s"
        idle={isPaused}
      />
      <View style={{flex: 1}}>
        <GamePanel
          level={1}
          isPaused={isPaused}
          pausePlayHandler={togglePausePlay}
        />
      </View>
    </View>
  );
};
