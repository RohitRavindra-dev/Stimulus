import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import TimerSVGComponent from '../../assets/svgs/ClockTimerSVG';
import {timerBarStyles as tbs} from './styles';

type TimerBarProps = {
  totalTime: number;
  timeLeft: number;
  timeText: string;
  idle?: boolean;
};

const colorGetter = (percVal: number) => {
  if (percVal > 60) {
    return '#00612a';
  } else if (percVal < 40) {
    return '#e60202';
  } else {
    return '#d68400';
  }
};

export const TimerBar = ({
  totalTime,
  timeLeft,
  timeText,
  idle,
}: TimerBarProps) => {
  const widthPerc = (timeLeft / totalTime) * 100;
  if (!idle) {
    return (
      <View style={tbs.timerSection}>
        <View
          style={{
            ...tbs.bar,
            width: `${widthPerc}%`,
            backgroundColor: colorGetter(widthPerc),
          }}>
          <TimerSVGComponent />
          <Text style={tbs.timeLeftText}>{`${timeLeft} ${timeText}`}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={tbs.timerSection}>
      <View style={{...tbs.bar, width: '100%', backgroundColor: 'gray'}}>
        <TimerSVGComponent fill={'#555'} />
        <Text style={{...tbs.timeLeftText, color: '#555'}}>{`Timer Paused`}</Text>
      </View>
    </View>
  );
};
