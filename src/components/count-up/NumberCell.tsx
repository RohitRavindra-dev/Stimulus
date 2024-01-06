import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { gridCellStyles as gcs } from './styles';

type NumberCellProps = {
    value: number,
    index:number,
    onPickNextVal : (value:number, index:number)=>any;
    disabled: boolean;
    color: string;
}

export const NumberCell = ({value, onPickNextVal,index, disabled=false, color}:NumberCellProps) => {
  return (
    <TouchableOpacity style={{...gcs.gridCell, backgroundColor:color}} onPress={() => onPickNextVal(value,index)} disabled={disabled}>
      <Text style={gcs.cellValue}>{value}</Text>
    </TouchableOpacity>
  );
};
