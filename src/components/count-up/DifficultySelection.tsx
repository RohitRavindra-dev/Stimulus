import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import {difficultySelectionStyles as dss} from './styles';
import { difficultyMapping } from './utils';

type difficultySelectionProps = {
  difficulty: number;
  changeDifficultyHandler: (newDifficulty: 1 | 2 | 3) => any;
};



export const DifficultySelection = ({
  difficulty,
  changeDifficultyHandler,
}: difficultySelectionProps) => {
  
    if(difficulty == 1 || difficulty == 2 || difficulty == 3){
      return(
    <View style={dss.difficultyCntr}>
      
        <View style={dss.difficultyTextCtr}>
          <Text style={dss.difficulty}>Difficulty:</Text>
          <Text
            style={{
              ...dss.difficultyValue,
              color: difficultyMapping[difficulty].color,
            }}>
            {difficultyMapping[difficulty].text}
          </Text>
        </View>
     
   
      <View style={{...dss.sliderPanel, backgroundColor: difficultyMapping[difficulty].bc}}>
        <Slider
          style={{width: '100%'}}
          minimumValue={1}
          maximumValue={3}
          step={1}
          // tapToSeek
          //@ts-ignore
          onValueChange={changeDifficultyHandler}
          minimumTrackTintColor="red"
          maximumTrackTintColor="black"
        />
      </View> 
    </View>)
    }
    return(<View><Text>Error!</Text></View>)
  
};
