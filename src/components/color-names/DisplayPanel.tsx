import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {displayPanelStyles as dps} from './styles';
import {GridCell} from '../../navigation/screens/color-names/ColorNamesScreen';
import {GRID_COLUMNS} from '../../assets/constants/AppConstants';

type DisplayPanelProps = {
  gridVals: Array<GridCell>;
};

export const DisplayPanel = ({gridVals}: DisplayPanelProps) => {
  return (
    <View style={dps.panel}>
      <FlatList
        data={gridVals}
        contentContainerStyle={{height: '100%', justifyContent:'center'}}
        renderItem={({item,index}) => (
          <View style={dps.colorCell}>
            <Text style={{...dps.colorText, color: item.hex}}>
              {item.color}
            </Text>
          </View>
        )}
        numColumns={GRID_COLUMNS}
      />
    </View>
  );
};
