import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {arenaStyles as as} from './styles';
import {CellStatus, configDifficultyMap} from './utils';
import { NumberCell } from './NumberCell';

type NumbersArenaProps = {
  grid: Array<number> | undefined;
  cellStatus: Array<CellStatus>;
  difficulty: number;
  onPickNextVal: (val: number, index:number) => any;
};

export const NumbersArena = ({grid, difficulty, onPickNextVal, cellStatus}: NumbersArenaProps) => {
  if (difficulty == 1 || difficulty == 2 || difficulty == 3) {
    return (
      <View style={as.arena}>
        <FlatList
          key={difficulty}
          keyExtractor={item => item.toFixed()}
          data={grid}
          contentContainerStyle={as.grid}
          renderItem={({item, index}) => {
            return (
              <NumberCell value={item} index={index} onPickNextVal={onPickNextVal} disabled={cellStatus[index]=="green"} color={cellStatus[index]} />
            );
          }}
          numColumns={configDifficultyMap[difficulty].columns}
        />
      </View>
    );
  }
};
