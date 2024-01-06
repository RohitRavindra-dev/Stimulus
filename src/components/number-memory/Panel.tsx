import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { panelStyles as ps } from './styles'
import { GameHeader } from './GameHeader'

type GamePanelProps = {
    level: number;
    isPaused: boolean;
    pausePlayHandler: () => any;
  };

export const GamePanel = ({level, isPaused, pausePlayHandler}:GamePanelProps)=>{
    return(
        <View style={ps.panel}>
            <GameHeader level={level} paused={isPaused} pausePlayHandler={pausePlayHandler}/>
            <View style={{alignItems:'center', width:'100%', justifyContent:'center'}}>
                <Text>1234567890</Text>
                <TextInput style={{borderWidth: 1, borderColor: 'black'}}/>
            </View>
        </View>
    )
}